export const supportedChains = {
  1: "eth-mainnet",
  10: "optimism-mainnet",
  56: "avalanche-mainnet",
  137: "matic-mainnet",
  42161: "arbitrum-mainnet",
  43114: "avalanche-mainnet",
};

export const networks = Object.keys(supportedChains).map((key) => Number(key));
