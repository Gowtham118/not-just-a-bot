import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { networks, supportedChains } from "../constants";

export const useTransactions = () => {
  const [transactions, setTransactions] = useState();
  const { address } = useParams();

  //   const fetchTransactions = useCallback(
  //     async (chain: number) => {
  //       const url = `https://api.1inch.dev/history/v2.0/history/${address}/events?address=${address}&limit=100&chainId=${chain}`;
  //       console.log("url :", url);
  //       try {
  //         const response = await axios.post(`http://localhost:3000/`, { url });
  //         const data = response.data;
  //         return data;
  //       } catch (error) {
  //         console.log("error :", error);
  //       }
  //     },
  //     [address]
  //   );

  //   const fetchAllTransactions = useCallback(async () => {
  //     const promises = [];
  //     for (let i = 0; i < networks.length; i++) {
  //       promises.push(fetchTransactions(networks[i]));
  //     }
  //     const data = await Promise.all(promises);
  //     console.log("data :", data);
  //   }, [fetchTransactions]);

  const getTransactions = useCallback(async (chain: string) => {
    try {
      const url = `https://api.covalenthq.com/v1/${chain}/address/${address}/transactions_v2/`;

      const resp = await axios.get(url, {
        headers: {
          Authorization: "Bearer cqt_rQDqgvRdPbCKjRQWKc7DC6CxMKG6",
        },
      });
      return {
        chain: resp.data.data.chain_name,
        transactions: resp.data.data.items,
      };
    } catch (error) {
      console.log("error :", error);
    }
  }, []);

  const getAllTransactions = useCallback(async () => {
    const txnsPromises = [];
    for (let i = 0; i < networks.length; i++) {
      const chain = supportedChains[`${networks[i]}`];
      txnsPromises.push(getTransactions(chain));
    }
    const resp = await Promise.all(txnsPromises);
    if (resp) setTransactions(resp);
  }, [getTransactions]);

  //   useEffect(() => {
  //     fetchAllTransactions();
  //   }, [fetchAllTransactions]);

  useEffect(() => {
    getAllTransactions();
  }, [getAllTransactions]);

  return transactions;
};
