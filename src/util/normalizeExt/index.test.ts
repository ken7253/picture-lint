import { normalizeJPGExt } from './';
import { describe, test } from '@jest/globals';

describe('[util: normalizeJPGExt]', () => {
	test('name', () => {
		const extList = ['jpg', 'jpe', 'jpeg'];
		extList.forEach((v) => {
			expect(normalizeJPGExt(v)).toBe('jpg');
		});

		const incorrect = ['png', 'webp', 'gif'];
		incorrect.forEach((v) => {
			expect(normalizeJPGExt(v)).toBe(false);
		});
	});
});
