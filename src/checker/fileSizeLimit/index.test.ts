import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileSizeLimit } from './';
import { describe } from '@jest/globals';

const referenceImage = path.join(process.cwd(), 'src', '__test__', 'format-tester', 'jpg.jpg');

describe('[checker: file-size-limit]', () => {
	test('over size', async (): Promise<boolean> => {
		const { size } = await fs.stat(referenceImage);
		const result = await fileSizeLimit(referenceImage, size - 1);
		expect(result).toBe(false);

		return result;
	});

	test('safe size', async (): Promise<boolean> => {
		const { size } = await fs.stat(referenceImage);
		const result = await fileSizeLimit(referenceImage, size + 1);
		expect(result).toBe(true);

		return result;
	});

	test('equal size', async (): Promise<boolean> => {
		const { size } = await fs.stat(referenceImage);
		const result = await fileSizeLimit(referenceImage, size);
		expect(result).toBe(false);

		return result;
	});
});
