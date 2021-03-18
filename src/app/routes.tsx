import CoinDetailPage from "pages/coinDetail";
import CoinsPage from "pages/coins";
import { VFC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes: VFC = () => {
	return (
		<Router>
			<Switch>
				<Route path="/coins/:id">
					<CoinDetailPage />
				</Route>

				<Route path="/">
					<CoinsPage />
				</Route>
			</Switch>
		</Router>
	);
};

export default Routes;
