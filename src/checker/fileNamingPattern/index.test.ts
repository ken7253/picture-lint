import { fileNamingPattern } from '../fileNamingPattern/';
import { describe, expect, test } from '@jest/globals';

describe('[checker: file-name-pattern]', () => {
	// Rules allowing only "kebab-cases".
	test('kebab-case', () => {
		const kebabCase = 'root/foo/check-this-image.jpg';
		const notKebabCase = 'root/foo/checkThisImage.jpg';
		expect(fileNamingPattern(kebabCase, '^[a-z,0-9,-]+$')).toBe(true);
		expect(fileNamingPattern(notKebabCase, '^[a-z,0-9,-]+$')).toBe(false);
	});

	// Rules requiring prefixing.
	test('prefix', () => {
		const prefix = 'root/foo/prefix-check-image.jpg';
		const illegalPrefix = 'root/foo/check-image.jpg';
		expect(fileNamingPattern(prefix, '^[prefix].*')).toBe(true);
		expect(fileNamingPattern(illegalPrefix, '^[prefix].*')).toBe(false);
	});

	// Rules not including numbers.
	test('ban number', () => {
		const excludeNumber = 'root/foo/check-image.jpg';
		const includeNumber = 'root/foo/check-image-01.jpg';
		expect(fileNamingPattern(excludeNumber, '^(?!.*[0-9]).*$')).toBe(true);
		expect(fileNamingPattern(includeNumber, '^(?!.*[0-9]).*$')).toBe(false);
	});
});
