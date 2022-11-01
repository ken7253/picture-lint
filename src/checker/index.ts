import { strictFormatCheck } from './strictFormatCheck';
import { fileNamingPattern } from './fileNamingPattern/';
import { fileSizeLimit } from './fileSizeLimit/';

import { PretreatmentItem } from '../pretreatment/';
import { Configuration } from '../config/';

export type Checker = (target: PretreatmentItem, config: Required<Configuration>) => boolean;

export const checker: { [key: string]: Checker } = {
	strictFormatCheck,
	fileNamingPattern,
	fileSizeLimit,
};
