import { createApiClient } from "../libs/createHttp";
import { CoinDetail, CoinMarketData } from "../types";

const http = createApiClient();

export function getCoinsMarkets(currency = "EUR", limit = 10, order = "market_cap_desc"): Promise<CoinMarketData[]> {
	return http.get("/coins/markets", {
		vs_currency: currency,
		per_page: limit,
		order,
	});
}

export function getCoinDetail(id: string): Promise<CoinDetail> {
	return http.get(`/coins/${id}`, {
		localization: false,
		tickers: false,
		market_data: false,
		community_data: false,
		developer_data: false,
		sparkline: false,
	});
}
