import path from 'node:path';
import { fileNamingPattern } from '../fileNamingPattern/';
import { describe, expect, test } from '@jest/globals';
import { type Configuration } from '../../config';
import { type PretreatmentItem } from '../../pretreatment';

const DUMMY_CONFIG: Required<Configuration> = {
	include: ['.'],
	rules: {
		'file-naming-pattern': false,
		'file-size-limit': 5000,
		'strict-format-check': false,
	},
};

const DUMMY_TARGET: PretreatmentItem = {
	header: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
	parsedPath: path.parse(process.cwd()),
	size: 5000,
};

describe('[checker: file-name-pattern]', () => {
	// Rules allowing only "kebab-cases".
	test('kebab-case', () => {
		const kebabCase = 'check-this-image.jpg';
		const notKebabCase = 'checkThisImage.jpg';
		const pattern = '^[a-z,0-9,-]+$';

		expect(
			fileNamingPattern(
				{
					...DUMMY_TARGET,
					parsedPath: path.parse(path.join(process.cwd(), kebabCase)),
				},
				{
					...DUMMY_CONFIG,
					rules: {
						'file-naming-pattern': pattern,
					},
				},
			),
		).toBe(true);
		expect(
			fileNamingPattern(
				{
					...DUMMY_TARGET,
					parsedPath: path.parse(path.join(process.cwd(), notKebabCase)),
				},
				{
					...DUMMY_CONFIG,
					rules: {
						'file-naming-pattern': pattern,
					},
				},
			),
		).toBe(false);
	});

	// Rules requiring prefixing.
	test('prefix', () => {
		const prefix = 'prefix-check-image.jpg';
		const illegalPrefix = 'check-image.jpg';
		const pattern = '^[prefix].*';

		expect(
			fileNamingPattern(
				{
					...DUMMY_TARGET,
					parsedPath: path.parse(path.join(process.cwd(), prefix)),
				},
				{
					...DUMMY_CONFIG,
					rules: { 'file-naming-pattern': pattern },
				},
			),
		).toBe(true);
		expect(
			fileNamingPattern(
				{ ...DUMMY_TARGET, parsedPath: path.parse(path.join(process.cwd(), illegalPrefix)) },
				{ ...DUMMY_CONFIG, rules: { 'file-naming-pattern': pattern } },
			),
		).toBe(false);
	});

	// Rules not including numbers.
	test('ban number', () => {
		const excludeNumber = 'check-image.jpg';
		const includeNumber = 'check-image-01.jpg';
		const pattern = '^(?!.*[0-9]).*$';

		expect(
			fileNamingPattern(
				{ ...DUMMY_TARGET, parsedPath: path.parse(path.join(process.cwd(), excludeNumber)) },
				{ ...DUMMY_CONFIG, rules: { 'file-naming-pattern': pattern } },
			),
		).toBe(true);
		expect(
			fileNamingPattern(
				{ ...DUMMY_TARGET, parsedPath: path.parse(path.join(process.cwd(), includeNumber)) },
				{ ...DUMMY_CONFIG, rules: { 'file-naming-pattern': pattern } },
			),
		).toBe(false);
	});
});
