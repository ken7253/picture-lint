import type { Config } from 'jest';
import path from 'node:path';

// eslint-disable-next-line @typescript-eslint/require-await
export default async (): Promise<Config> => {
	return {
		cacheDirectory: path.join(process.cwd(), '.cache', 'jest'),
		verbose: true,
		collectCoverage: true,
		roots: ['./src'],
		testMatch: ['**/?(*.)+(spec|test).+(ts|js)'],
		transform: {
			'^.+\\.(ts|tsx)$': 'ts-jest',
		},
	};
};
