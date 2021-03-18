import { Skeleton, Table, Tbody, Td, Th, Tr } from "@chakra-ui/react";
import { VFC } from "react";
import { formatCurrency, formatDate } from "utils";

import { CoinDetail } from "../types";

interface CoinDetailProps {
	coinDetail: CoinDetail | undefined;
}

const skeletonItem = <Skeleton startColor="pink.500" endColor="orange.500" height="22px" />;

const CoinDetailTable: VFC<CoinDetailProps> = ({ coinDetail }) => {
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
					<Td>{coinDetail ? coinDetail.description["en"].substring(0, 50) : skeletonItem}</Td>
				</Tr>
				<Tr>
					<Th>Market cap in Euro</Th>
					<Td>{coinDetail ? coinDetail.market_cap_rank : skeletonItem}</Td>
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
