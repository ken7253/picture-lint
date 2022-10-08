import { strictFormatCheck } from './strictFormatCheck';
import { fileNamingPattern } from './fileNamingPattern';
import { fileSizeLimit } from './fileSizeLimit';

type Checker = {
	[key: string]: () => boolean;
};

export const checker: Checker = {
	// strictFormatCheck,
	// fileNamingPattern,
	// fileSizeLimit,
};
