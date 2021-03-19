import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center, Flex, Heading, SkeletonText, Text } from "@chakra-ui/react";
import { getCoinDetail } from "api";
import Layout from "components/layout";
import { useSettings } from "contexts/settingsContext";
import { formatCurrency, formatDate } from "libs/formatters";
import { useEffect, useState, VFC } from "react";
import { useErrorHandler } from "react-error-boundary";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { CoinDetail } from "../types";

const CoinDetailPage: VFC = () => {
	const { currency, locale } = useSettings();

	const { id } = useParams<{ id: string }>();

	const [coinDetail, setCoinDetail] = useState<CoinDetail>();

	const handleError = useErrorHandler();

	useEffect(() => {
		getCoinDetail(id).then(setCoinDetail).catch(handleError);
	}, []);

	const homepage = coinDetail?.links.homepage.join("");

	return (
		<Layout>
			<Flex alignItems="flex-start" width="100%">
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
			</Flex>
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
							{coinDetail ? formatCurrency(coinDetail.market_data.market_cap[currency.toLowerCase()], currency, locale) : ""}
						</Text>
					</Center>
				</Flex>
				<Box mt="4">
					<strong>Description</strong>
					<br />
					<div dangerouslySetInnerHTML={{ __html: coinDetail?.description[locale] || "" }}></div>
				</Box>
			</SkeletonText>
		</Layout>
	);
};

export default CoinDetailPage;
