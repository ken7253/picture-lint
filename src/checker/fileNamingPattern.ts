import path from 'node:path';

/**
 * Check image file naming conventions using RegExp
 *
 * @param filePath
 *
 * Target file path.
 *
 * ex) `root/foo/check-image.jpg`
 *
 * @param pattern
 *
 * check pattern.
 *
 * Enabled flags `'u'`
 *
 * @returns if failed test return `false`
 */
export const fileNamingPattern = (filePath: string, pattern: string) => {
	const testPattern = new RegExp(pattern, 'u');
	const { name } = path.parse(filePath);
	const result = testPattern.test(name);

	console.log(name, testPattern, result);

	return result;
};
