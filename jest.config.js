const tsconfig = require("./tsconfig.json");
const moduleNameMapper = require("tsconfig-paths-jest")(tsconfig);

module.exports = {
	preset: "ts-jest",
	silent: false,
	testMatch: ["**/__tests__/**/*.test.(ts|tsx)"],
	transform: {
		"^.+\\.js$": "ts-jest",
	},
	transformIgnorePatterns: ["node_modules/(?!(@bazo/fetch-client|@bazo/event-emitter))"],
	setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
	moduleNameMapper: {
		...moduleNameMapper,
	},
};
