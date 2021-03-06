import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ModalProps } from "@chakra-ui/react";
import { getCoinDetail } from "api";
import { useEffect, useState, VFC } from "react";

import { CoinDetail, CoinMarketData } from "../types";
import CoinDetailTable from "./coinDetailTable";

interface CoinModalProps extends Pick<ModalProps, "isOpen" | "onClose"> {
	coin: CoinMarketData;
	currency: string;
	locale: string;
}

const CoinModal: VFC<CoinModalProps> = ({ coin, isOpen, onClose, currency, locale }) => {
	const [coinDetail, setCoinDetail] = useState<CoinDetail>();

	useEffect(() => {
		getCoinDetail(coin.id).then(setCoinDetail);
	}, [coin]);

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{coin.name}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<CoinDetailTable coinDetail={coinDetail} currency={currency} locale={locale} />
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={onClose}>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default CoinModal;
