import { Skeleton, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { VFC } from "react";

const skeletonItem = <Skeleton startColor="pink.500" endColor="orange.500" height="42px" />;

const CoinRowSkeleton: VFC = () => {
	return (
		<Tr>
			<Td>{skeletonItem}</Td>
			<Td>{skeletonItem}</Td>
			<Td>{skeletonItem}</Td>
			<Td>{skeletonItem}</Td>
			<Td>{skeletonItem}</Td>
			<Td>{skeletonItem}</Td>
		</Tr>
	);
};

interface CoinsTableSkeletonProps {
	rows?: number;
}

const CoinsTableSkeleton: VFC<CoinsTableSkeletonProps> = ({ rows = 10 }) => {
	const skeletonRows = [];

	for (let i = 0; i < rows; i++) {
		skeletonRows.push(<CoinRowSkeleton key={i} />);
	}

	return (
		<Table>
			<Thead>
				<Tr>
					<Th>Image</Th>
					<Th>Name</Th>
					<Th>Symbol</Th>
					<Th>Current Price</Th>
					<Th>High 24 hour Price</Th>
					<Th>Low 24 hour Price</Th>
				</Tr>
			</Thead>
			<Tbody>{skeletonRows}</Tbody>
		</Table>
	);
};

export default CoinsTableSkeleton;
