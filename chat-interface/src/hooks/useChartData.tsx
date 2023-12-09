import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useChartData = () => {
  const [data, setData] = useState();
  const { address } = useParams();

  const fetchData = useCallback(async () => {
    const url = encodeURIComponent(
      `https://api.1inch.dev/portfolio/v3/portfolio/overview/total_value_chart?chainId=1&timerange=1year&addresses=${address}`
    );
    try {
      const response = await axios.get(`http://localhost:3000/?url=${url}`);
      const data = response.data;

      setData(data.data);
    } catch (error) {
      console.log("error :", error);
    }
  }, [address]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return data;
};
