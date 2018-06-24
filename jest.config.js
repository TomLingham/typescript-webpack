module.exports = {
  testMatch: ["**/__tests__/**/*.test.ts?(x)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest"
  },
  collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx}", "!**/__tests__/**"]
};
