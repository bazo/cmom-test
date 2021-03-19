import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import { CoinDetail } from "../../types";
import CoinDetailTable from "../coinDetailTable";
import { ethereumDetail } from "./mocks";

const currency = "EUR";
const locale = "en";
describe("Coin detail table", () => {
	test("render", () => {
		const { getByText } = render(
			<Router>
				<CoinDetailTable coinDetail={(ethereumDetail as unknown) as CoinDetail} currency={currency} locale={locale} />
			</Router>
		);
		const el = getByText("https://www.ethereum.org/");
		expect(el).toBeInTheDocument();
	});
});
