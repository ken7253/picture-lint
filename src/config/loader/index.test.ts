import { loader } from '.';
import { describe, test, expect } from '@jest/globals';

describe('[config: loader]', () => {
	test('Error check', async () => {
		const env = await loader();
		expect(loader()).not.toThrow();

		return env;
	});
});
