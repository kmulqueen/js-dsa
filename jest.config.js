module.exports = {
  rootDir: ".",
  testEnvironment: "node",
  roots: ["<rootDir>/Exercises", "<rootDir>/Solutions"],
  testMatch: ["**/__tests__/**/*.js", "**/*.test.js"],
  verbose: true,
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
};
