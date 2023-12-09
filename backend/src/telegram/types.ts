/* eslint-disable prettier/prettier */
export enum Intent {
    CROSS_CHAIN_TRADE = 'CrossChainTrade',
    TRANSFER = 'Transfer',
    DEX_TRADE = 'DexTrade',
}

export type IntentSlotMapper = {
    [Intent.CROSS_CHAIN_TRADE]: {
        fromchain: string;
        tochain: string;
        fromamount: string;
        fromasset: string;
        toAsset: string;
    };
    [Intent.TRANSFER]: {
        chain: string;
        toAccount: string;
        sendAmount: string;
        sendAsset: string;
    };
    [Intent.DEX_TRADE]: {
        chain: string;
        fromAmount: string;
        fromAsset: string;
        toAsset: string;
    };
};

export type CrossChainResponse = {
    text: string;
    intent: Intent.CROSS_CHAIN_TRADE;
    slots: IntentSlotMapper[Intent.CROSS_CHAIN_TRADE];
};

export type TransferResponse = {
    text: string;
    intent: Intent.TRANSFER;
    slots: IntentSlotMapper[Intent.TRANSFER];
};

export type TradeResponse = {
    text: string;
    intent: Intent.DEX_TRADE;
    slots: IntentSlotMapper[Intent.DEX_TRADE];
};

export type ModelResponse =
    | CrossChainResponse
    | TransferResponse
    | TradeResponse;

export const chainToId = {
    ethereum: 1,
    polygon: 137,
    arbitrum: 42161,
    optimism: 10,
    binanceSmartChain: 56,
    polygonZkEVM: 1101,
    zkSyncEra: 324,
    avalanche: 43114,
    fantom: 250,
    moonriver: 1285,
    aurora: 1313161554,
    moonbeam: 1284,
};