import { useCallback, useEffect, useState } from "react";

import { AnkrProvider, Balance } from "@ankr.com/ankr.js";
import { useParams } from "react-router-dom";
const provider = new AnkrProvider(
  `https://rpc.ankr.com/multichain/${import.meta.env.VITE_ANKR_API_KEY}`
);

export const useBalances = () => {
  const [balances, setBalances] = useState<Balance[]>();
  const { address } = useParams();
  const fetchBalances = useCallback(async () => {
    try {
      const assets = await provider.getAccountBalance({
        blockchain: [
          "eth",
          "arbitrum",
          "avalanche",
          "polygon",
          "optimism",
          "bsc",
        ],
        walletAddress: address ?? "",
      });
      setBalances(assets.assets);
    } catch (error) {
      console.log("error :", error);
    }
  }, [address]);

  useEffect(() => {
    fetchBalances();
  }, [fetchBalances]);

  return balances;
};
