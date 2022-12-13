#!/usr/bin/env node
import cac from 'cac';
import { actions } from './actions';
import { config } from './config';

const cli = cac();
const env = await config.loader();

cli.command('init', 'Generate configuration file').action(() => {
	actions.init(env);
});
cli.help();
cli.version('0.0.0');
