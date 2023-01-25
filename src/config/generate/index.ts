import fs from 'node:fs/promises';
import path from 'node:path';
import { config } from '..';

export const generate = () => {
	const targetPath = path.join(process.cwd(), config.FILE_NAME);
	void fs.writeFile(targetPath, JSON.stringify(config.defaultConfig), {
		encoding: 'utf-8',
	});
};
