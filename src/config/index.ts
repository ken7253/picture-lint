import { loader } from './loader/';
import { defaultConfig, type Configuration } from './default/';
import { generate } from './generate/';

export type { Configuration };

export const config = {
	defaultConfig,
	loader,
	generate,
} as const;
