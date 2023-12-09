const one_inch_base_url = "https://api.1inch.dev";

export const ONE_INCH_API = {
  portfolio: `${one_inch_base_url}/v4.0`,
  balance: (chain: number, walletAddress: string) =>
    `${one_inch_base_url}/balance/v1.2/${chain}/balances/${walletAddress}`,
};
