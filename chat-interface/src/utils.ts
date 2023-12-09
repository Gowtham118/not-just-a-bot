import axios from "axios";
import { METHODS } from "./constants";

export const basicAuthHeader = (userName: string, password: string) =>
    `Basic ${Buffer.from(`${userName}:${password}`).toString("base64")}`;

export const buildJSONRpcBody = (
    method: keyof typeof METHODS,
    params: {
        [key: string]: string | boolean | number;
    } = {}
) => {
    return {
        jsonrpc: "2.0",
        id: 1,
        method: method,
        params: params,
    };
};

export const getData = async (
    method: keyof typeof METHODS,
    url: string,
    userName: string,
    password: string
) => {
    try {
        const body = buildJSONRpcBody(method);
        const basicAuth = basicAuthHeader(userName, password);
        const response = await axios.post(url, body, {
            headers: {
                Authorization: basicAuth,
                "Content-Type": "application/json",
            },
        });
        const data = response.data;
        return data.result;
    } catch (error) {
        return {};
    }
};
