import { strictFormatCheck } from './strictFormatCheck';
import { fileNamingPattern } from './fileNamingPattern/';
import { fileSizeLimit } from './fileSizeLimit/';

import { Pretreatment } from '../pretreatment/';
import { Configuration } from '../config/';

type Checker = {
	[key: string]: (target: Pretreatment, config: Configuration) => boolean;
};

export const checker: Checker = {
	strictFormatCheck,
	fileNamingPattern,
	fileSizeLimit,
};
