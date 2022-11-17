import { type PretreatmentItem } from '../../pretreatment';
import { type Configuration } from '../../config';

/**
 * Check image file naming conventions using RegExp
 *
 * @param target pretreatment object
 *
 * @param config configuration object
 *
 * @returns check result
 */
export const fileNamingPattern = (target: PretreatmentItem, config: Required<Configuration>) => {
	const { parsedPath } = target;
	const { rules } = config;
	const rawPattern = typeof rules['file-naming-pattern'] === 'string' ? rules['file-naming-pattern'] : '.*';
	const allowPattern = new RegExp(rawPattern);
	const result = allowPattern.test(parsedPath.name);

	return result;
};
