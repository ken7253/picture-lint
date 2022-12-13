import { lint } from '.';
import { config } from '../../config';
import { describe } from '@jest/globals';

describe('[actions: lint]', () => {
	test('Error check', async () => {
		const env = await config.loader();
		env.include = ['src/__test__/**/*'];
		expect(() => lint(env)).not.toThrow();
	});
});
