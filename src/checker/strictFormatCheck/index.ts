import { normalizeJPGExt } from '../../util/normalizeExt';
import { type Checker } from '..';

/**
 * strict format check
 *
 * Check the consistency between the extension and the file content.
 *
 * @param target pretreatment object
 *
 * @param config configuration object
 *
 * @returns check result
 */
export const strictFormatCheck: Checker = (target, config) => {
	const { rules } = config;
	const { parsedPath, header } = target;
	const normalizedExt = normalizeJPGExt(parsedPath.ext);
	const PNG_INDICATOR = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
	const JPG_INDICATOR = [0xff, 0xd8];
	const chosenIndicator = normalizedExt === 'jpg' ? JPG_INDICATOR : PNG_INDICATOR;
	const markerPoint = normalizedExt === 'jpg' ? [0, 2] : [0, 8];
	const markerArea = header.slice(...markerPoint);
	const test = chosenIndicator.join() === markerArea.join();
	const result = rules['strict-format-check'] ? test : false;

	return result;
};
