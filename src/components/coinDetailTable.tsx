import { Skeleton, Table, Tbody, Td, Th, Tr } from "@chakra-ui/react";
import { formatCurrency, formatDate } from "libs/formatters";
import { VFC } from "react";
import { Link } from "react-router-dom";

import { CoinDetail } from "../types";

interface CoinDetailProps {
	coinDetail: CoinDetail | undefined;
	currency: string;
	locale: string;
}

const skeletonItem = <Skeleton startColor="pink.500" endColor="orange.500" height="22px" />;

const CoinDetailTable: VFC<CoinDetailProps> = ({ coinDetail, currency, locale }) => {
	return (
		<Table>
			<Tbody>
				<Tr>
					<Th>Name</Th>
					<Td>{coinDetail ? coinDetail.name : skeletonItem}</Td>
				</Tr>
				<Tr>
					<Th>Symbol</Th>
					<Td>{coinDetail ? coinDetail.symbol : skeletonItem}</Td>
				</Tr>
				<Tr>
					<Th>Hashing algorithm</Th>
					<Td>{coinDetail ? coinDetail.hashing_algorithm : skeletonItem}</Td>
				</Tr>
				<Tr>
					<Th>Description</Th>
					<Td>
						{coinDetail ? coinDetail.description[locale].substring(0, 50) : skeletonItem}
						<br />
						<Link to={`/coins/${coinDetail?.id}`}>View more</Link>
					</Td>
				</Tr>
				<Tr>
					<Th>Market cap in Euro</Th>
					<Td>{coinDetail ? formatCurrency(coinDetail.market_data.market_cap[currency.toLowerCase()], currency, locale) : skeletonItem}</Td>
				</Tr>
				<Tr>
					<Th>Homepage</Th>
					<Td>{coinDetail ? coinDetail.links.homepage.join("") : skeletonItem}</Td>
				</Tr>
				<Tr>
					<Th>Genesis Date</Th>
					<Td>{coinDetail ? formatDate(coinDetail.genesis_date) : skeletonItem}</Td>
				</Tr>
			</Tbody>
		</Table>
	);
};

export default CoinDetailTable;
