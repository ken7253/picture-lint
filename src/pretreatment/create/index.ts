import path from 'node:path';
import fs from 'node:fs/promises';
import { Pretreatment, PretreatmentItem } from '..';

export const create = async (
	targetImagePathList: string[],
): Promise<Pretreatment> => {
	// pretreatment.create
	const getPretreatment = async (
		targetImagePath: string,
	): Promise<PretreatmentItem> => {
		const parsedPath = path.parse(targetImagePath);
		const { size } = await fs.stat(targetImagePath);
		const fileBinary = await fs.readFile(targetImagePath);
		const header = new Uint8Array(fileBinary).slice(0, 16);

		return {
			path: parsedPath,
			size,
			header,
		};
	};

	const result = Promise.all(
		targetImagePathList.map((v) => getPretreatment(v)),
	);
	return result;
};
