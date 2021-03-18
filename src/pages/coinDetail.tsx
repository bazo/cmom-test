import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center, Flex, Heading, SkeletonText, Text } from "@chakra-ui/react";
import { getCoinDetail } from "api";
import Layout from "components/layout";
import { useEffect, useState, VFC } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { formatDate } from "utils";

import { CoinDetail } from "../types";

const CoinDetailPage: VFC = () => {
	const { id } = useParams<{ id: string }>();
	const [coinDetail, setCoinDetail] = useState<CoinDetail>();

	useEffect(() => {
		getCoinDetail(id).then(setCoinDetail);
	}, []);

	const homepage = coinDetail?.links.homepage.join("");

	return (
		<Layout>
			<Breadcrumb>
				<BreadcrumbItem>
					<BreadcrumbLink as="span">
						<Link to={"/"}>Coins</Link>
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem isCurrentPage>
					<BreadcrumbLink href="#">{id}</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
			<SkeletonText startColor="pink.500" endColor="orange.500" noOfLines={50} isLoaded={coinDetail !== undefined}>
				<Heading>
					{coinDetail?.name} ({coinDetail?.symbol}){" "}
					{homepage && (
						<a href={homepage}>
							<ExternalLinkIcon />
						</a>
					)}
				</Heading>
				<Flex justifyContent="space-evenly">
					<Center>
						<Text>
							<strong>Hashing algorithm:</strong>&nbsp;{coinDetail?.hashing_algorithm}
						</Text>
					</Center>
					<Center>
						<Text>
							<strong>Genesis Date:</strong>&nbsp;
							{formatDate(coinDetail?.genesis_date || "")}
						</Text>
					</Center>
					<Center>
						<Text>
							<strong>Market cap in Euro:</strong>&nbsp;
							{coinDetail?.market_cap_rank}
						</Text>
					</Center>
				</Flex>
				<strong>Description</strong>
				<br />
				<div dangerouslySetInnerHTML={{ __html: coinDetail?.description["en"] || "" }}></div>
			</SkeletonText>
		</Layout>
	);
};

export default CoinDetailPage;
