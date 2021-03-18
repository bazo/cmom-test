import { ChakraProvider } from "@chakra-ui/react";
import { FC } from "react";

import Routes from "./routes";

const App: FC = () => {
	return (
		<ChakraProvider>
			<Routes />
		</ChakraProvider>
	);
};

export default App;
