import { strictFormatCheck } from './strict-format-check';
import { fileNamingPattern } from './file-naming-pattern';
import { fileSizeLimit } from './file-size-limit';

type Checker = {
	[key: string]: () => boolean;
};

export const checker: Checker = {
	// strictFormatCheck,
	// fileNamingPattern,
	// fileSizeLimit,
};
