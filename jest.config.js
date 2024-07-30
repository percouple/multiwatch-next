const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const jestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': 'babel-jest',
  },
  collectCoverage: true,
  coverageReporters: ['html', 'text'],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
};

module.exports = createJestConfig(jestConfig);
