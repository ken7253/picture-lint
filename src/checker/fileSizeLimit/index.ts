import fs from 'node:fs/promises';

export const fileSizeLimit = async (
	filePath: string,
	limit: number,
): Promise<boolean> => {
	const { size } = await fs.stat(filePath);
	const isSafeSize = size < limit;

	return isSafeSize;
};
