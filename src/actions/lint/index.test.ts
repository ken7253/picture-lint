import { lint } from '.';
import { config } from '../../config';
import { describe } from '@jest/globals';

describe('[actions: lint]', () => {
	test('Error check', async () => {
		const env = await config.loader();
		expect(() => lint(env)).not.toThrow();
	});
});
