import path from 'node:path';
import fs from 'node:fs/promises';
import { Pretreatment, PretreatmentItem } from '..';

/**
 * Create pretreatment object.
 *
 * @param targetImagePathList Full path of the file to be checked.
 *
 * @returns
 */
export const create = async (targetImagePathList: string[]): Promise<Pretreatment> => {
	const getFileOverview = async (targetImagePath: string): Promise<PretreatmentItem> => {
		const parsedPath = path.parse(targetImagePath);
		const { size } = await fs.stat(targetImagePath);
		const binary = await fs.readFile(targetImagePath);
		const header = new Uint8Array(binary).slice(0, 16);

		return {
			parsedPath,
			size,
			header,
		};
	};
	const maybePretreatment = targetImagePathList.map((v) => getFileOverview(v));
	const pretreatment = Promise.all(maybePretreatment);

	return pretreatment;
};
