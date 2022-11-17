import { type PretreatmentItem } from '../../pretreatment';
import { type Configuration } from '../../config';

/**
 * Rules to check if the size of the image does not exceed the maximum size.
 *
 * @param target pretreatment object
 *
 * @param config configuration object
 *
 * @returns check result
 */
export const fileSizeLimit = (target: PretreatmentItem, config: Required<Configuration>): boolean => {
	const { size } = target;
	const { rules } = config;
	const limit = typeof rules['file-size-limit'] === 'number' ? rules['file-size-limit'] : Infinity;
	const result = size < limit;

	return result;
};
