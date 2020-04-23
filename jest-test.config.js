module.exports = {
  displayName: 'jest:test',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  testMatch: [
    '<rootDir>/test/**/*.js'
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  modulePathIgnorePatterns: [
  ],
  globalSetup: '<rootDir>/jest-init.js'
};
