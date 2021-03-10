export default {
  bail: true,
  verbose: true,
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/useCase/**/*.spec.ts'],
  coverageReporters: [
    "text-summary",
    "lcov"
  ],
  preset: 'ts-jest',
  testEnvironment: "node",
  testMatch: [
    "**/src/useCase/**/*.spec.ts"
  ]
};
