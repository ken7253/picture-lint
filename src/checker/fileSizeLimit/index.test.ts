import path from 'node:path';
import process from 'node:process';
import { fileSizeLimit } from './';
import { type PretreatmentItem } from '../../pretreatment';
import { type Configuration } from '../../config';
import { describe } from '@jest/globals';

const DUMMY_CONFIG = {
	include: ['.'],
	rules: {
		'file-naming-pattern': false,
		'file-size-limit': 5000,
		'strict-format-check': false,
	},
} as Required<Configuration>;

const DUMMY_TARGET: PretreatmentItem = {
	header: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
	parsedPath: path.parse(process.cwd()),
	size: 5000,
};

describe('[checker: file-size-limit]', () => {
	test('over size', () => {
		const result = fileSizeLimit(
			{
				...DUMMY_TARGET,
				size: 5001,
			},
			DUMMY_CONFIG,
		);
		expect(result).toBe(false);
	});

	test('safe size', () => {
		const result = fileSizeLimit(
			{
				...DUMMY_TARGET,
				size: 4999,
			},
			DUMMY_CONFIG,
		);
		expect(result).toBe(true);
	});

	test('equal size', () => {
		const result = fileSizeLimit(
			{
				...DUMMY_TARGET,
				size: 5000,
			},
			DUMMY_CONFIG,
		);
		expect(result).toBe(false);
	});
});
