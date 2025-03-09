import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^next/(.*)$": "<rootDir>/__mocks__/next/$1",
    "^next/image$": "<rootDir>/__mocks__/next/image.ts",
    "^next/link$": "<rootDir>/__mocks__/next/link.ts",
  },
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "text", "clover", "html"],
};

export default config;
