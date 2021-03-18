import { createContext, useContext } from "react";

import { Settings } from "../types";

export const defaultSettings: Settings = {
	currency: "EUR",
	locale: "en",
};

const SettingsContext = createContext(defaultSettings);

export default SettingsContext;

export const useSettings = (): Settings => {
	return useContext(SettingsContext);
};
