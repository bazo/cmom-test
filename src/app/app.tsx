import { ChakraProvider } from "@chakra-ui/react";
import SettingsContext, { defaultSettings } from "contexts/settingsContext";
import { FC } from "react";

import Routes from "./routes";
import theme from "./theme";

const App: FC = () => {
	return (
		<ChakraProvider theme={theme}>
			<SettingsContext.Provider value={defaultSettings}>
				<Routes />
			</SettingsContext.Provider>
		</ChakraProvider>
	);
};

export default App;
