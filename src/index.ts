#!/usr/bin/env node
import cac from 'cac';
import { action } from './actions';

const cli = cac();

cli.command('init', 'Generate configuration file').action(() => {
	action.init();
});
cli.help();
cli.version('0.0.0');
