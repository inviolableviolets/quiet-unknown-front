/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  // roots: ["<rootDir>/src"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["dist", ".d.ts", ".js"],
  resolver: "jest-ts-webcompat-resolver",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/assetsMock.js",
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/main.tsx",
    "<rootDir>/src/components/app/app.tsx",
    "<rootDir>/src/store/store.ts",
    "<rootDir>/src/vite-env.d.ts",
    "<rootDir>/src/config.ts",
    "<rootDir>/src/components/arecibo",
    "<rootDir>/src/components/pages/modify.page/",
    "<rootDir>/src/components/gallery",
    "<rootDir>/src/utils/reveal",
  ],
};
