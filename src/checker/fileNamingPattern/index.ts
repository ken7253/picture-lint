import { type Checker } from '..';

/**
 * Check image file naming conventions using RegExp
 *
 * @param target pretreatment object
 *
 * @param config configuration object
 *
 * @returns check result
 */
export const fileNamingPattern: Checker = (target, config) => {
	const { parsedPath } = target;
	const { rules } = config;
	const rawPattern = typeof rules['file-naming-pattern'] === 'string' ? rules['file-naming-pattern'] : '.*';
	const allowPattern = new RegExp(rawPattern);
	const result = allowPattern.test(parsedPath.name);

	return result;
};
