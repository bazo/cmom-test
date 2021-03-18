import { useDisclosure } from "@chakra-ui/hooks";
import { getCoinsMarkets } from "api";
import CoinModal from "components/coinModal";
import CoinsTable from "components/coinsTable";
import CoinsTableSkeleton from "components/coinsTableSkeleton";
import Layout from "components/layout";
import { useSettings } from "contexts/settingsContext";
import { useEffect, useState, VFC } from "react";

import { CoinMarketData } from "../types";

const CoinsPage: VFC = () => {
	const { currency, locale } = useSettings();
	const [coins, setCoins] = useState<CoinMarketData[]>([]);
	const [selectedCoin, selectCoin] = useState<CoinMarketData>();

	const { isOpen, onOpen: openCoinModal, onClose: closeCoinModal } = useDisclosure();

	useEffect(() => {
		getCoinsMarkets(currency).then(setCoins);
	}, []);

	const onCoinClick = (coin: CoinMarketData): void => {
		selectCoin(coin);
		openCoinModal();
	};

	return (
		<Layout>
			{coins.length === 0 ? <CoinsTableSkeleton /> : <CoinsTable coins={coins} onRowClick={onCoinClick} currency={currency} locale={locale} />}
			{selectedCoin && <CoinModal coin={selectedCoin} isOpen={isOpen} onClose={closeCoinModal} currency={currency} locale={locale} />}
		</Layout>
	);
};

export default CoinsPage;
