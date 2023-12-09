type AssetConfig = {
  Oracle: string;
  TokenAddress: string;
  Decimals: number;
  StartBlock: number;
};

type RPCConfig = {
  blockstream: string;
  mempool: string;
  ethrpc?: string; // Optional for Ethereum
};

export type NetworkConfig = {
  Assets: Record<string, AssetConfig> | null;
  RPC: RPCConfig;
  IWRPC: string;
  Expiry: number;
  EventWindow: number;
};

export enum tab {
  accounts = "accounts",
  networks = "networks",
  strategy = "strategy",
}
