# not-just-a-bot

Natty is the new-age chat bot for web3 that can also act as your wallet. We don't compromise on security, autonomy while also not affecting UX.

There has been a compromise in UX and security in the web3 space for so long, one comes with the cost of the other. Telegram bots have been making enough noise now for making UX simple for the masses. However they never cared to solve security or autonomity. However, here comes Natty, an alternative chatbot without compromising security, autonomity or UX. Users now don't need to remember their mnemonic or worry about someone pulling their funds or loose their funds if they loose their access to Telegram. In Natty, a user can choose his password and use it anywhere on any device. 

Under the hood, Natty uses an AI intent model to figure out what trade a user wants to make while also using zero knowledge proofs, thereby never revealing your private keys to anyone. Be it cross chain swaps or very simple transfers, Natty's role is to simplify your user experience so that you don't feel a change in the complexity of the task you want to perform. 

## Elastic signatures 
Elastic Signatures introduce a new method of signing transactions on the Ethereum blockchain using a password-based mechanism. This approach is designed to be more user-friendly, especially for non-technical users, and to provide an alternative to traditional private key-based signatures.

![image](https://github.com/Gowtham118/not-just-a-bot/assets/87437291/7bc26821-7f61-47d3-bd8b-d20bfe256480)

This also provides a specification for the verification process, which involves three parties: the Verifier, the Requester, and the Prover. The Verifier computes the fullhash from a datahash, derives the pwdhash for a given address, and verifies the proof with the derived pwdhash, the computed fullhash, and a allhash. The Requester generates the datahash and decides an expiration, and requests a verification from the Verifier. The Prover generates the proof and allhash from the datahash and expiration

## Find our account abstraction factories and zk implementations of smart wallets across these 10 different chains.

zkEllasticWallet deployed to: 0x103a11789aB73dE00AEa89f70052be044e281613 
ImplFactory deployed to: 0xaC747c422e76269699Ab2b122d102BeaAa5fFE01
chain supported : [scroll sepolia, ]

zkEllasticWallet deployed to: 0xB3c6c5e46F91bEcE2F2a8b46E2069393799b9b35 
ImplFactory deployed to: 0x672f8C4cfC20F81b313a776cb2a2c9B4F2Ed27d0
-- sepolia --

zkEllasticWallet deployed to: 0x103a11789aB73dE00AEa89f70052be044e281613 
ImplFactory deployed to: 0xaC747c422e76269699Ab2b122d102BeaAa5fFE01
-- polygon zkevm -- https://rpc.public.zkevm-test.net/

zkEllasticWallet deployed to: 0x103a11789aB73dE00AEa89f70052be044e281613 
ImplFactory deployed to: 0xaC747c422e76269699Ab2b122d102BeaAa5fFE01
-- filecoin -- https://api.calibration.node.glif.io/rpc/v1

zkEllasticWallet deployed to: 0x103a11789aB73dE00AEa89f70052be044e281613 
ImplFactory deployed to: 0xaC747c422e76269699Ab2b122d102BeaAa5fFE01
-- xdc -- https://apothem.xdcrpc.com/

zkEllasticWallet deployed to: 0x103a11789aB73dE00AEa89f70052be044e281613 
ImplFactory deployed to: 0xaC747c422e76269699Ab2b122d102BeaAa5fFE01
-- celo -- https://alfajores-forno.celo-testnet.org/

zkEllasticWallet deployed to: 0x103a11789aB73dE00AEa89f70052be044e281613 
ImplFactory deployed to: 0xaC747c422e76269699Ab2b122d102BeaAa5fFE01
-- zeta -- https://rpc.ankr.com/zetachain_evm_athens_testnet

zkEllasticWallet deployed to: 0x103a11789aB73dE00AEa89f70052be044e281613 
ImplFactory deployed to: 0xaC747c422e76269699Ab2b122d102BeaAa5fFE01
-- x1 chain -- https://x1testrpc.okx.com/

zkEllasticWallet deployed to: 0x103a11789aB73dE00AEa89f70052be044e281613 
ImplFactory deployed to: 0xaC747c422e76269699Ab2b122d102BeaAa5fFE01
-- arb-sepolia chain -- https://sepolia-rollup.arbitrum.io/rpc

zkEllasticWallet deployed to: 0xe30F23cEbaEE2aA52C5d1ed9cE06d2e96f7140F4 
ImplFactory deployed to: 0x103a11789aB73dE00AEa89f70052be044e281613
-- base sepolia -- https://sepolia.base.org/

