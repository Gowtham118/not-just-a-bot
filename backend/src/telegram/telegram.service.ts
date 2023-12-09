/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Bot } from 'grammy';
import 'dotenv/config';
import axios from 'axios';
import { Intent, ModelResponse, chainToId } from './types';
import { SwapService } from 'src/swap/swap.service';
import { UserService } from 'src/user/user.service';
import { WalletType } from 'src/user/dto';
import { ethers } from 'ethers';
import { RPC } from 'src/user/dto/contants';

@Injectable()
export class TelegramService {
    constructor(
        private userService: UserService,
        private swapService: SwapService,
    ) {
        const bot = new Bot(process.env.TOKEN);

        bot.on('message', async (ctx) => {
            console.log('hi');
            const text = ctx.msg.text as string;
            const modelResponse = await axios.post<ModelResponse>(
                process.env.MODEL_URL + '/predict',
                {
                    Text: text,
                },
            );

            console.log(modelResponse.data);
            const tokenFilter = Object.values(chainToId);
            const optionalChainTypes = 'EVM';
            const results = await axios.get('https://li.quest/v1/tokens', {
                params: {
                    chains: tokenFilter.join(','),
                    chainTypes: optionalChainTypes,
                },
            });

            console.log(results.data);

            switch (modelResponse.data.intent) {
                case Intent.CROSS_CHAIN_TRADE: {
                    const { fromchain, tochain, fromamount, fromasset, toAsset } =
                        modelResponse.data.slots;

                    this.swapService.getRoutes({
                        fromAmount: fromamount,
                        fromChainId: chainToId[fromchain],
                        fromTokenAddress: results.data[chainToId[fromasset]].address,
                        toChainId: chainToId[tochain],
                        toTokenAddress: results.data[chainToId[toAsset]].address,
                        fromAddress: (
                            await this.userService.getWallet({
                                Wallet_type: WalletType.custodial,
                                Value: 'random', //change this later
                                chaindId: chainToId[fromchain],
                            })
                        ).address,
                    });
                    break;
                }
                case Intent.TRANSFER: {
                    const { chain, toAccount, sendAmount, sendAsset } =
                        modelResponse.data.slots;

                    const contract = new ethers.Contract(
                        results.data[chainToId[sendAsset]].address,
                        results.data[chainToId[sendAsset]].abi,
                        null,
                    );

                    const wallet = new ethers.Wallet(
                        process.env.SERVER_ACCOUNT_PRIV,
                        new ethers.providers.JsonRpcProvider(RPC[chainToId[chain]]),
                    );

                    const tx = await wallet.sendTransaction({
                        to: toAccount,
                        data: contract.interface.encodeFunctionData('transfer', [
                            results.data[chainToId[sendAsset]].address,
                            sendAmount,
                        ]),
                    });

                    tx.wait();
                    break;
                }

                case Intent.DEX_TRADE: {
                    const { chain, fromAmount, fromAsset, toAsset } =
                        modelResponse.data.slots;

                    this.swapService.getRoutes({
                        fromAmount,
                        fromChainId: chainToId[chain],
                        fromTokenAddress: results.data[chainToId[fromAsset]].address,
                        toChainId: chainToId[chain],
                        toTokenAddress: results.data[chainToId[toAsset]].address,
                        fromAddress: (
                            await this.userService.getWallet({
                                Wallet_type: WalletType.custodial,
                                Value: 'random', //change this later
                                chaindId: chainToId[chain],
                            })
                        ).address,
                    });
                }
            }
        });

        bot.start();

        bot.catch((err) => {
            console.log(err);
        });
    }
}