import { HttpClient } from "@bazo/fetch-client";

function createHttp(baseURL: string): HttpClient {
	const client = new HttpClient(baseURL);

	return client;
}

export const createApiClient = (): HttpClient => createHttp("https://api.coingecko.com/api/v3");
