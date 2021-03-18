export interface CoinMarketData {
	id: string;
	symbol: string;
	name: string;
	image: string;
	current_price: number;
	market_cap: number;
	market_cap_rank: number;
	fully_diluted_valuation: number | null;
	total_volume: number;
	high_24h: number;
	low_24h: number;
	price_change_24h: number;
	price_change_percentage_24h: number;
	market_cap_change_24h: number;
	market_cap_change_percentage_24h: number;
	circulating_supply: number;
	total_supply: number | null;
	max_supply: number | null;
	ath: number;
	ath_change_percentage: number;
	ath_date: string;
	atl: number;
	atl_change_percentage: number;
	atl_date: string;
	roi: Roi | null;
	last_updated: string;
}

export interface Roi {
	times: number;
	currency: string;
	percentage: number;
}

export interface CoinDetail {
	id: string;
	symbol: string;
	name: string;
	asset_platform_id: null;
	platforms: Platforms;
	block_time_in_minutes: number;
	hashing_algorithm: string;
	categories: string[];
	public_notice: string;
	additional_notices: unknown[];
	description: Description;
	links: CoinDetailLinks;
	image: Image;
	country_origin: string;
	genesis_date: string;
	sentiment_votes_up_percentage: number;
	sentiment_votes_down_percentage: number;
	ico_data: IcoData;
	market_cap_rank: number;
	coingecko_rank: number;
	coingecko_score: number;
	developer_score: number;
	community_score: number;
	liquidity_score: number;
	public_interest_score: number;
	public_interest_stats: PublicInterestStats;
	status_updates: unknown[];
	last_updated: string;
}

export interface Description {
	en: string;
}

export interface IcoData {
	ico_start_date: string;
	ico_end_date: string;
	short_desc: string;
	description: null;
	links: IcoDataLinks;
	softcap_currency: string;
	hardcap_currency: string;
	total_raised_currency: string;
	softcap_amount: null;
	hardcap_amount: null;
	total_raised: null;
	quote_pre_sale_currency: string;
	base_pre_sale_amount: null;
	quote_pre_sale_amount: null;
	quote_public_sale_currency: string;
	base_public_sale_amount: number;
	quote_public_sale_amount: number;
	accepting_currencies: string;
	country_origin: string;
	pre_sale_start_date: null;
	pre_sale_end_date: null;
	whitelist_url: string;
	whitelist_start_date: null;
	whitelist_end_date: null;
	bounty_detail_url: string;
	amount_for_sale: null;
	kyc_required: boolean;
	whitelist_available: null;
	pre_sale_available: null;
	pre_sale_ended: boolean;
}

export type IcoDataLinks = Record<string, string>;

export interface Image {
	thumb: string;
	small: string;
	large: string;
}

export interface CoinDetailLinks {
	homepage: string[];
	blockchain_site: string[];
	official_forum_url: string[];
	chat_url: string[];
	announcement_url: string[];
	twitter_screen_name: string;
	facebook_username: string;
	bitcointalk_thread_identifier: number;
	telegram_channel_identifier: string;
	subreddit_url: string;
	repos_url: ReposURL;
}

export interface ReposURL {
	github: string[];
	bitbucket: unknown[];
}

export interface Platforms {
	"": string;
	"binance-smart-chain": string;
	"huobi-token": string;
}

export interface PublicInterestStats {
	alexa_rank: number;
	bing_matches: null;
}
