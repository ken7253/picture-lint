import glob from 'glob';

import type { Configuration } from '../../config';
import { pretreatment } from '../../pretreatment';
import { checker } from '../../checker';

export const lint = async (env: Configuration) => {
	// lint
	const globOption: glob.IOptions = { nodir: true, absolute: true };
	const filePathList = env.include.map((v) => glob.sync(v, globOption));
	const noDuplicates = Array.from(new Set(...filePathList));
	/** @todo [WIP]: Pass to checker */
	const pre = await pretreatment.create(noDuplicates);
	const r = checker;
};
