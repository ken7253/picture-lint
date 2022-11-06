import path from 'node:path';
import fs from 'node:fs/promises';
import { strictFormatCheck } from './';
import { type Configuration } from '../../config';
import { describe, test } from '@jest/globals';

const DUMMY_CONFIG = {
	include: ['.'],
	rules: {
		'file-naming-pattern': false,
		'file-size-limit': false,
		'strict-format-check': true,
	},
} as Required<Configuration>;
const testDataPath = path.join(process.cwd(), 'src', '__test__', 'format-tester');

describe('[checker: strict-format-check]', () => {
	test('jpg:jpg', async () => {
		const filePath = path.join(testDataPath, 'jpg.jpg');
		const file = await fs.readFile(filePath);
		const uint = new Uint8Array(file);
		const header = uint.slice(0, 16);
		const parsedPath = path.parse(filePath);
		const result = strictFormatCheck(
			{
				header,
				parsedPath,
				size: 100,
			},
			DUMMY_CONFIG,
		);
		console.log(header);
		expect(result).toBe(true);

		return result;
	});

	test('jpg:png', async () => {
		const filePath = path.join(testDataPath, 'incorrect', 'jpg', 'png-8.jpg');
		const file = await fs.readFile(filePath);
		const uint = new Uint8Array(file);
		const header = uint.slice(0, 16);
		const parsedPath = path.parse(filePath);
		const result = strictFormatCheck(
			{
				header,
				parsedPath,
				size: 100,
			},
			DUMMY_CONFIG,
		);
		expect(result).toBe(false);

		return result;
	});

	test('png:png', async () => {
		const filePath = path.join(testDataPath, 'png-8.png');
		const file = await fs.readFile(filePath);
		const uint = new Uint8Array(file);
		const header = uint.slice(0, 16);
		const parsedPath = path.parse(filePath);
		const result = strictFormatCheck(
			{
				header,
				parsedPath,
				size: 100,
			},
			DUMMY_CONFIG,
		);
		console.log(header);
		expect(result).toBe(true);

		return result;
	});

	test('png:jpg', async () => {
		const filePath = path.join(testDataPath, 'incorrect', 'png', 'jpg.png');
		const file = await fs.readFile(filePath);
		const uint = new Uint8Array(file);
		const header = uint.slice(0, 16);
		const parsedPath = path.parse(filePath);
		const result = strictFormatCheck(
			{
				header,
				parsedPath,
				size: 100,
			},
			DUMMY_CONFIG,
		);
		expect(result).toBe(false);

		return result;
	});
});
