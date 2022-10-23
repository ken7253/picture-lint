import fs from 'node:fs/promises';
import path from 'node:path';
import { defaultConfig } from '../default';

export const generate = async () => {
	const fileName = 'picturelintrc.json';
	const targetPath = path.join(process.cwd(), fileName);
	const config = JSON.stringify(defaultConfig);

	await fs.writeFile(targetPath, config, {
		encoding: 'utf-8',
	});
};
