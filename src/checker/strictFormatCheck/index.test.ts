import path from 'node:path';
import fs from 'node:fs/promises';
import { strictFormatCheck } from './';
import { describe, test } from '@jest/globals';

const testDataPath = path.join(
	process.cwd(),
	'src',
	'__test__',
	'format-tester',
);

describe('[checker: strict-format-check]', () => {
	test('jpg:jpg', async () => {
		const file = await fs.readFile(path.join(testDataPath, 'jpg.jpg'));
		const uint = new Uint8Array(file);
		const meta = uint.slice(0, 16);
		const result = strictFormatCheck(meta, 'jpg');

		expect(result).toBe(true);

		return result;
	});

	test('jpg:png', async () => {
		const file = await fs.readFile(
			path.join(testDataPath, 'incorrect', 'jpg', 'png-8.jpg'),
		);
		const uint = new Uint8Array(file);
		const meta = uint.slice(0, 16);
		const result = strictFormatCheck(meta, 'jpg');

		expect(result).toBe(false);

		return result;
	});

	test('png:png', async () => {
		const file = await fs.readFile(path.join(testDataPath, 'png-8.png'));
		const uint = new Uint8Array(file);
		const meta = uint.slice(0, 16);
		const result = strictFormatCheck(meta, 'png');

		expect(result).toBe(true);

		return result;
	});

	test('png:jpg', async () => {
		const file = await fs.readFile(
			path.join(testDataPath, 'incorrect', 'png', 'jpg.png'),
		);
		const uint = new Uint8Array(file);
		const meta = uint.slice(0, 16);
		const result = strictFormatCheck(meta, 'png');

		expect(result).toBe(false);

		return result;
	});
});
