module.exports = {
  displayName: 'lint:eslint',
  runner: 'jest-runner-eslint',
  testMatch: [
    '<rootDir>/src/**/*.js',
    '<rootDir>/test/**/*.js',
  ],
  testPathIgnorePatterns: [
  ],
  modulePathIgnorePatterns: [
  ]
}
