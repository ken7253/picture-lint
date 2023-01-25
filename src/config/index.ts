import { loader } from './loader/';
import { defaultConfig, type Configuration } from './default/';
import { generate } from './generate/';
import { marge } from './marge/';

const FILE_NAME = 'picturelintrc.json';

export type { Configuration };

export const config = {
	FILE_NAME,
	defaultConfig,
	loader,
	marge,
	generate,
} as const;
