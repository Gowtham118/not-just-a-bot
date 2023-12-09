import {
  GetStatusRequest,
  LiFi,
  Route,
  RouteOptions,
  StatusResponse,
} from "@lifi/sdk";
import { Signer } from "ethers";
import { OrderType, Side, Spot } from "@binance/connector-typescript";
import axios from "axios";

const lifi = new LiFi({
  integrator: "NATTY",
});

const API_KEY = process.env.BINANCE_API_KEY;
const API_SECRET = process.env.BINANCE_API_SECRET;
const BASE_URL = "https://api.binance.com";
const LIFI_ADVANCED_TX_REQUEST = "https://li.quest/v1/advanced/stepTransaction";

const binanceClient = new Spot(API_KEY, API_SECRET, { baseURL: BASE_URL });

export interface GetRouteParams {
  fromChainId: number;
  fromAmount: string;
  fromTokenAddress: string;
  fromAddress?: string;
  toChainId: number;
  toTokenAddress: string;
  toAddress?: string;
  options?: RouteOptions;
}

export class SwapService {
  //Returns array of available routes
  async getRoutes(
    routesRequest: GetRouteParams
  ): Promise<{ val: Route[] | null; error: string }> {
    try {
      const result = await lifi.getRoutes(routesRequest);
      return { val: result.routes, error: "" };
    } catch (e) {
      return { val: null, error: e.message };
    }
  }

  // Executes a swap
  async executeSwap(
    signer: Signer,
    route: Route
  ): Promise<{ val: Route | null; error: string }> {
    try {
      const execTrade = await lifi.executeRoute(signer, route);
      return { val: execTrade, error: "" };
    } catch (e) {
      console.log("e: ", e);
      return { val: null, error: e.message };
    }
  }

  // Generates call data
  async generateCallData(
    route: Route
  ): Promise<{ val: any | null; error: string }> {
    try {
      const callData = [];
      for (let i = 0; i < route.steps.length; i++) {
        const execTrade = await axios.post(LIFI_ADVANCED_TX_REQUEST, {
          id: route.id,
          type: 'swap',
          tool: route.steps[i].tool,
          action: {
            fromChainId: route.fromChainId,
            toChainId: route.toChainId,
            fromAmount: route.fromAmount,
            fromToken: route.fromToken,
            toToken: route.toToken,
          }
        });
        callData.push(execTrade.data.transactionRequest);
      }
      // send execTrade.transactionRequest to the server.
      return { val: callData, error: "" };
    } catch (e) {
      console.log("e: ", e);
      return { val: null, error: e.message };
    }
  }

  //Get status of a code
  async getStatus(
    request: GetStatusRequest
  ): Promise<{ val: StatusResponse | null; error: string }> {
    try {
      const status = await lifi.getStatus(request);
      return { val: status, error: "" };
    } catch (e) {
      return { val: null, error: e.message };
    }
  }

  //Resumes a route
  async resumeSwap(
    signer: Signer,
    route: Route
  ): Promise<{ val: Route; error: string }> {
    try {
      const resumedTrade = await lifi.resumeRoute(signer, route);
      return { val: resumedTrade, error: "" };
    } catch (e) {
      return { val: null, error: e.message };
    }
  }

  //Convert fiat to crypto and withdraw
  async fiatToCrypto(
    amount: number,
    token: string,
    toAddress: string,
    toChainId: number
  ) {
    try {
      let withdrawCrypto: {
        id: string;
      };

      const tokenBalance = await binanceClient.userAsset({ asset: token });
      const binanceToken = tokenBalance.find((asset) => asset.asset === token);

      if (binanceToken  && +binanceToken.free < amount) {
        //If not enough amount do swap and withdraw
        await binanceClient.newOrder(token, Side.BUY, OrderType.MARKET, {
          quantity: amount,
        });
        withdrawCrypto = await binanceClient.withdraw(
          token,
          toAddress,
          amount,
          { network: toChainId.toString() }
        );
        return { val: withdrawCrypto.id, error: "" };
      } else {
        withdrawCrypto = await binanceClient.withdraw(
          token,
          toAddress,
          amount,
          { network: toChainId.toString() }
        );
        return { val: withdrawCrypto.id, error: "" };
      }
    } catch (e) {
      return { val: null, error: e.message };
    }
  }
}
