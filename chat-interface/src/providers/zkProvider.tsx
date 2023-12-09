import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import { ethers } from "ethers";
import axios from "axios";
import { AddressConfig, ZK_ELLASTIC_ABI, vKey } from "../constants";
import * as snarkjs from "snarkjs";
import "dotenv/config";
import { implFactoryAbi } from "../abi/implFactory";
import { entrypointAbi } from "../abi/entrypoint";

const ZK_ELASTIC_WALLET = "zkEllasticWallet";

export type Wallet = {
    address: string;
    balance: string;
};

type ZkContext = {
    wallet: Wallet;
    async(toAddress: string, amount: string): void;
};

export const useZk = () => {
    return useContext(ZkContext);
};

export const ZkContext = createContext({
    wallet: {
        address: "",
        balance: "",
    },
    generateUserOps: async (toAddress: string, amount: string) => {
        toAddress + amount;
    },
});

export const ZkProvider = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated, password } = useAuth();
    const [wallet, setWallet] = useState({
        address: "",
        balance: "",
    });

    async function getProof(
        pwd: string,
        address: string,
        nonce: number,
        datahash: bigint
    ) {
        const expiration = Math.floor(Date.now() / 1000 + 600);
        const chainId = 11155111;
        console.log(expiration, chainId, nonce, datahash);
        let fullhash = ethers.utils.solidityKeccak256(
            ["uint256", "uint256", "uint256", "uint256"],
            [expiration, chainId, nonce, datahash]
        );
        fullhash = ethers.BigNumber.from(fullhash).div(8).toString();

        const input = [stringToHex(pwd), address, fullhash];
        console.log(input);
        const data = await snarkjs.groth16.fullProve(
            { in: input },
            "/zk/verify.wasm",
            "/zk/circuit_0000.zkey"
        );

        // console.log(JSON.stringify(data))

        const res = await snarkjs.groth16.verify(
            vKey,
            data.publicSignals,
            data.proof
        );

        if (res === true) {
            console.log("Verification OK");

            const pwdhash = data.publicSignals[0];
            const fullhash = data.publicSignals[1];
            const allhash = data.publicSignals[2];

            const proof = [
                ethers.BigNumber.from(data.proof.pi_a[0]).toHexString(),
                ethers.BigNumber.from(data.proof.pi_a[1]).toHexString(),
                ethers.BigNumber.from(data.proof.pi_b[0][1]).toHexString(),
                ethers.BigNumber.from(data.proof.pi_b[0][0]).toHexString(),
                ethers.BigNumber.from(data.proof.pi_b[1][1]).toHexString(),
                ethers.BigNumber.from(data.proof.pi_b[1][0]).toHexString(),
                ethers.BigNumber.from(data.proof.pi_c[0]).toHexString(),
                ethers.BigNumber.from(data.proof.pi_c[1]).toHexString(),
            ];

            return {
                proof,
                pwdhash,
                address,
                expiration,
                chainId,
                nonce,
                datahash,
                fullhash,
                allhash,
            };
        } else {
            console.log("Invalid proof");
        }
    }

    const generateUserOps = async (toAddress: string, amount: string) => {
        //in decimal (ether)
        const provider = new ethers.providers.JsonRpcProvider(
            import.meta.env.VITE_RPC_URL
        );
        const nonce = await provider.send("eth_getTransactionCount", [
            wallet.address,
            "latest",
        ]);

        if (!wallet.address || !wallet.balance) return;

        const implFactory = new ethers.Contract(
            AddressConfig.ImplFactory,
            implFactoryAbi,
            provider
        );

        const entrypoint = new ethers.Contract(
            AddressConfig.Entrypoint,
            entrypointAbi,
            provider
        );

        let p = await getProof("PANTHER", wallet.address, 0, 0n);

        const data = ethers.utils.defaultAbiCoder.encode(
            ["address", "address", "uint"],
            [
                entrypoint.address,
                import.meta.env.VITE_SYSTEM_ADDRESS,
                p?.pwdhash,
            ]
        );

        const initTx = (
            await implFactory.populateTransaction.createAccount(
                ZK_ELASTIC_WALLET,
                data
            )
        ).data;

        const initcode = implFactory.address + initTx?.slice(2);

        const userOps = {
            sender: wallet.address,
            nonce: nonce,
            initCode: nonce == 0 ? initcode : "0x",
            callData: new ethers.utils.Interface(
                ZK_ELLASTIC_ABI
            ).encodeFunctionData("execute", [
                toAddress,
                ethers.utils.parseEther(amount),
                "0x",
            ]),
            callGasLimit: 40000,
            verificationGasLimit: 5035000,
            maxFeePerGas: Number(
                ethers.utils.parseUnits(
                    (Number(await getBaseFee()) + 100000000000).toString(),
                    "wei"
                )
            ),
            maxPriorityFeePerGas: Number(ethers.utils.parseUnits("1", "gwei")),
            preVerificationGas: 50000,
            paymasterAndData: "0x",
            signature: "0x",
        };

        const userOpHash = await entrypoint.getUserOpHash(userOps);
        console.log("userOpsHash: ", userOpHash);

        p = await getProof(
            "PANTHER_MAHARAJ",
            import.meta.env.VITE_SYSTEM_ADDRESS, //how do I do this?
            0,
            BigInt(userOpHash)
        );
        console.log(p);

        const signature = ethers.utils.solidityPack(
            ["uint[8]", "uint", "uint"],
            [p?.proof, p?.expiration, p?.allhash]
        );
        userOps.signature = signature;

        await axios.post(
            import.meta.env.VITE_BACKEND_URL + "/wallet" + "/submitTx"
        );
    };

    useEffect(() => {
        if (!password) return;
        (async () => {
            if (isAuthenticated) {
                try {
                    const response = await axios.post(
                        import.meta.env.VITE_BACKEND_URL +
                            "/wallet" +
                            "/get-wallet",
                        {
                            Wallet_type: ZK_ELASTIC_WALLET,
                            Value: (await getProof(
                                password,
                                import.meta.env.VITE_SYSTEM_ADDRESS,
                                0,
                                0n
                            ))!.pwdhash,
                            chaindId: 11155111,
                        }
                    );
                    console.log(response.data);
                    setWallet(response.data);
                } catch (err) {
                    const response = await axios.post(
                        import.meta.env.VITE_BACKEND_URL +
                            "/wallet" +
                            "/create-wallet",
                        {
                            Wallet_type: ZK_ELASTIC_WALLET,
                            Value: (await getProof(
                                password,
                                import.meta.env.VITE_SYSTEM_ADDRESS,
                                0,
                                0n
                            ))!.pwdhash,
                            chaindId: 11155111,
                        }
                    );

                    setWallet(response.data);
                }
            }
        })();
    }, [isAuthenticated, password]);

    return (
        <ZkContext.Provider value={{ wallet, generateUserOps }}>
            {children}
        </ZkContext.Provider>
    );
};

async function getBaseFee(): Promise<number> {
    const latestBlockNumber = await ethers
        .getDefaultProvider()
        .getBlockNumber();
    const latestBlock = await ethers
        .getDefaultProvider()
        .getBlock(latestBlockNumber);
    const baseFee = latestBlock.baseFeePerGas;
    return Number(baseFee);
}

function stringToHex(str: string) {
    let hexStr = "";
    for (let i = 0; i < str.length; i++) {
        const compact = str.charCodeAt(i).toString(16);
        hexStr += compact;
    }
    return "0x" + hexStr;
}
