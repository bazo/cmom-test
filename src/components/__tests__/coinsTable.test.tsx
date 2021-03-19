import { fireEvent, render } from "@testing-library/react";
import CoinsTable from "components/coinsTable";
import { BrowserRouter as Router } from "react-router-dom";

import { marketResponse } from "./mocks";

const currency = "EUR";
const locale = "en";
describe("Coins market table", () => {
	test("render", async () => {
		const onRowClick = jest.fn();

		const { getByText } = render(
			<Router>
				<CoinsTable coins={marketResponse} onRowClick={onRowClick} currency={currency} locale={locale} />
			</Router>
		);
		const el = getByText("Uniswap");
		expect(el).toBeInTheDocument();

		fireEvent.click(el);
		expect(onRowClick).toHaveBeenCalledTimes(1);
	});
});
