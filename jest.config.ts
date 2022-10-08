import type { Config } from 'jest';

const config: Config = {
	roots: ['./src'],
	testMatch: ['**/?(*.)+(spec|test).+(ts|js)'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
};

export default config;
