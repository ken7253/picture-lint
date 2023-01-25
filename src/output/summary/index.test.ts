import { summary } from '.';
import { describe, test, expect } from '@jest/globals';

describe('[output: summary]', () => {
	test('If all are displayed', () => {
		summary({
			length: 10,
			categoryCounts: {
				error: 1,
				warn: 3,
				passed: 6,
			},
		});

		expect(console.log).toBeCalled();
	});
});
