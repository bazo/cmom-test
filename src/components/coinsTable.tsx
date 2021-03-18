import { ExternalLinkIcon, InfoIcon } from "@chakra-ui/icons";
import { Center, HStack, Image, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { VFC } from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "utils";

import { CoinMarketData } from "../types";

interface CoinRowProps {
	coin: CoinMarketData;
	onInfoClick: () => void;
}

const CoinRow: VFC<CoinRowProps> = ({ coin, onInfoClick }) => {
	return (
		<Tr>
			<Td>
				<Image boxSize="42px" objectFit="cover" src={coin.image} alt={coin.id} />
			</Td>
			<Td>{coin.name}</Td>
			<Td>{coin.symbol}</Td>
			<Td>{formatCurrency(coin.current_price)}</Td>
			<Td>{formatCurrency(coin.high_24h)}</Td>
			<Td>{formatCurrency(coin.low_24h)}</Td>
			<Td>
				<HStack>
					<Center w="20px" h="20px">
						<InfoIcon onClick={onInfoClick} />
					</Center>
					<Center w="20px" h="20px">
						<Link to={`/coins/${coin.id}`}>
							<ExternalLinkIcon />
						</Link>
					</Center>
				</HStack>
			</Td>
		</Tr>
	);
};

interface CoinsTableProps {
	coins: CoinMarketData[];
	onRowClick: (coin: CoinMarketData) => void;
}

const CoinsTable: VFC<CoinsTableProps> = ({ coins, onRowClick }) => {
	return (
		<Table size="sm">
			<Thead>
				<Tr>
					<Th>Image</Th>
					<Th>Name</Th>
					<Th>Symbol</Th>
					<Th>Current Price</Th>
					<Th>High 24 hour Price</Th>
					<Th>Low 24 hour Price</Th>
					<Th>Actions</Th>
				</Tr>
			</Thead>
			<Tbody>
				{coins.map((coin) => {
					return <CoinRow coin={coin} key={coin.id} onInfoClick={onRowClick.bind(null, coin)} />;
				})}
			</Tbody>
		</Table>
	);
};

export default CoinsTable;
