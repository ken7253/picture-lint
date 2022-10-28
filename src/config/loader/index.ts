import fs from 'node:fs/promises';
import path from 'node:path';
import { config, type Configuration } from '..';

/**
 * Configuration loader
 *
 * Merging configuration files and default configurations to create an object.
 *
 * If no configuration file is found, only the initial values are returned.
 *
 * @returns Configuration object.
 */
export const loader = async (): Promise<Configuration> => {
	const configFilePath = path.join(process.cwd(), config.FILE_NAME);
	/** @todo Notify the user if the configuration file cannot be found. */
	const userRawConfig = await fs.readFile(configFilePath, { encoding: 'utf-8' }).catch(() => null);
	const userConfig = userRawConfig ? (JSON.parse(userRawConfig) as unknown) : null;
	const mixedConfig = config.marge(config.defaultConfig, userConfig);

	return mixedConfig;
};
