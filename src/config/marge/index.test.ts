import { marge } from '.';
import { describe, test, expect } from '@jest/globals';
import { Configuration } from '..';

describe('[config: marge]', () => {
	const mainConfig: Configuration = {
		include: ['./src/**/*'],
		rules: {
			'file-naming-pattern': false,
			'file-size-limit': false,
			'strict-format-check': false,
		},
	};

	test('null marge', () => {
		const nullMarge = marge(mainConfig, null);

		expect(nullMarge).toEqual(mainConfig);
	});
	test('correct', () => {
		const subConfig: Configuration = {
			include: ['./assets/**/*'],
			rules: {
				'file-naming-pattern': '.*',
				'file-size-limit': 50000,
				'strict-format-check': true,
			},
		};

		const result = marge(mainConfig, subConfig);
		const correct: Configuration = {
			include: ['./src/**/*', './assets/**/*'],
			rules: {
				'file-naming-pattern': '.*',
				'file-size-limit': 50000,
				'strict-format-check': true,
			},
		};
		expect(result).toEqual(correct);
	});
});
