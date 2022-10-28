import fs from 'node:fs/promises';
import path from 'node:path';
import { config, type Configuration } from '..';

export const loader = async (): Promise<Configuration> => {
	const configFilePath = path.join(process.cwd(), config.FILE_NAME);
	const userRawConfig = await fs.readFile(configFilePath, { encoding: 'utf-8' }).catch(() => null);
	const userConfig = userRawConfig ? (JSON.parse(userRawConfig) as unknown) : null;
	const mixedConfig = config.marge(config.defaultConfig, userConfig);

	return mixedConfig;
};
