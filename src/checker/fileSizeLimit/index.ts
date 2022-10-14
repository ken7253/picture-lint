import fs from 'node:fs/promises';

/**
 * Rules to check if the size of the image does not exceed the maximum size.
 *
 * @param filePath Path of the image to be checked.
 *
 * @param limit Maximum size [byte]
 *
 * @returns if "over-size" return `false`.
 */
export const fileSizeLimit = async (
	filePath: string,
	limit: number,
): Promise<boolean> => {
	const { size } = await fs.stat(filePath);
	const isSafeSize = size < limit;

	return isSafeSize;
};
