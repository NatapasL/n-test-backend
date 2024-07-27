import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  clearMocks: true,
  coverageProvider: "v8",
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  }
};

export default config;
