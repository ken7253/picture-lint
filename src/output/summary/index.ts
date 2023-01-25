import { green, yellow, red } from 'colorette';

export interface LintsSummary {
	length: number;
	categoryCounts: {
		passed: number;
		warn: number;
		error: number;
	};
}

/**
 * summary
 *
 * This function is used to output inspection results to the console.
 *
 * @param data Lint result data
 */
export const summary = (data: LintsSummary): void => {
	const responseMessage = green('Verification complete!');

	const passed = data.categoryCounts.passed <= 0 ? null : green(`PASSED ${data.categoryCounts.passed}`);
	const warn = data.categoryCounts.warn <= 0 ? null : yellow(`WARING ${data.categoryCounts.warn}`);
	const error = data.categoryCounts.error <= 0 ? null : red(`ERROR ${data.categoryCounts.error}`);

	const counter = [error, warn, passed].filter((v) => v !== null).join('  ');
	const countMessage = `${counter} / ${data.length}`;

	console.log([responseMessage, countMessage].join('\n'));
};
