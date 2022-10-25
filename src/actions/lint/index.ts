import glob from 'glob';

import type { Configuration } from '../../config';
import { pretreatment } from '../../pretreatment';
import { checker } from '../../checker';

export const lint = (env: Configuration) => {
	const { include } = env;
	const r = include.map((pattern) => glob(pattern, (err, matches) => matches));
	console.log(r);
};
