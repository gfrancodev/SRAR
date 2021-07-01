module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/src/useCase/**/*.spec.ts'
  ]
}
