/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { GetStatusRequest, LiFi, Route, RouteOptions, StatusResponse } from '@lifi/sdk'
import { Signer } from 'ethers';
import { OrderType, Side, Spot } from "@binance/connector-typescript";

const lifi = new LiFi({
    integrator: 'Dime',
    // apiUrl: 'https://staging.li.quest/v1/' //just to test
});

const API_KEY = process.env.BINANCE_API_KEY;
const API_SECRET = process.env.BINANCE_API_SECRET;
const BASE_URL = 'https://api.binance.com';

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

@Injectable()
export class SwapService {

    //Returns array of available routes
    async getRoutes(routesRequest: GetRouteParams): Promise<{ val: Route, error: string }> {
        try {
            const result = await lifi.getRoutes(routesRequest)
            return { val: result.routes.filter((a) => a.tags.includes("RECOMMENDED"))[0], error: "" }
        } catch (e) {
            return { val: null, error: e.message };
        }
    };

    // Returns executed route
    async executeSwap(
        signer: Signer,
        route: Route,
    ): Promise<{ val: Route, error: string }> {
        try {
            const execTrade = await lifi.executeRoute(signer, route);
            return { val: execTrade, error: "" };
        } catch (e) {
            console.log('e: ', e);
            return { val: null, error: e.message };
        }
    }

    //Get status of a code 
    async getStatus(request: GetStatusRequest): Promise<{ val: StatusResponse, error: string }> {
        try {
            const status = await lifi.getStatus(request)
            return { val: status, error: "" };
        } catch (e) {
            return { val: null, error: e.message }
        }
    }

    //Resumes a route
    async resumeSwap(
        signer: Signer,
        route: Route,
    ): Promise<{ val: Route, error: string }> {
        try {
            const resumedTrade = await lifi.resumeRoute(signer, route);
            return { val: resumedTrade, error: "" };
        } catch (e) {
            return { val: null, error: e.message };
        }
    }

    //Convert fiat to crypto and withdraw
    async fiatToCrypto(amount: number, token: string, toAddress: string, toChainId: number) {
        try {
            let withdrawCrypto: {
                id: string;
            };

            const tokenBalance = await binanceClient.userAsset({ asset: token });
            const binanceToken = tokenBalance.find((asset) => asset.asset === token);


            if (+binanceToken.free < amount) {
                //If not enough amount do swap and withdraw
                await binanceClient.newOrder(token, Side.BUY, OrderType.MARKET, { quantity: amount });
                withdrawCrypto = await binanceClient.withdraw(token, toAddress, amount, { network: toChainId.toString() });
                return { val: withdrawCrypto.id, error: "" }
            } else {
                withdrawCrypto = await binanceClient.withdraw(token, toAddress, amount, { network: toChainId.toString() });
                return { val: withdrawCrypto.id, error: "" }
            }
        } catch (e) {
            return { val: null, error: e.message };
        }
    }

}
