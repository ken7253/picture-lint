import glob from 'glob';

import { config, type Configuration } from '../../config';
import { pretreatment } from '../../pretreatment';
import { checker } from '../../checker';

export const lint = async (env: Configuration) => {
	const completedSettings = await config.loader();
	const globOption: glob.IOptions = { nodir: true, absolute: true };
	const filePathList = completedSettings.include.map((v) => glob.sync(v, globOption));
	const noDuplicates = Array.from(new Set(...filePathList));
	const middleData = await pretreatment.create(noDuplicates);
	// Manually construct the type definition from the original object.
	const checkerList = Object.keys(checker) as (keyof typeof checker)[];
	const inspectionResults = checkerList.map((checkerName) => {
		const isPassed = middleData.map((v) => checker[checkerName](v, completedSettings as Required<Configuration>));
		return isPassed;
	});
	/** @todo output stdout */
};
