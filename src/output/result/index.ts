type LogLevel = 'pass' | 'warn' | 'error';

type Counter = {
	[K in LogLevel]: number;
};

export interface LintResult {
	path: string;
	detail: {
		level: LogLevel;
		rule: string;
		description: string;
	}[];
}

export const resultItem = (lint: LintResult): Counter => {
	const message = lint.detail.map((detail) => {
		const { level, rule, description } = detail;
		return `${level}  ${description}  ${rule}`;
	});
	const template = `
${lint.path}
	${message.join('  \n')};
	`;
	const hasError = lint.detail.some((v) => v.level === 'error');
	if (hasError) {
		console.error(template);
	} else {
		console.log(template);
	}
	const counter: Counter = {
		pass: 0,
		warn: 0,
		error: 0,
	};
	lint.detail.forEach((v) => counter[v.level]++);

	return counter;
};
