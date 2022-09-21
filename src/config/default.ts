interface Rules {
	'strict-format-check': boolean;
	'file-naming-pattern': string | false;
	'file-size-limit': number | false;
}

export interface Configuration {
	include: string[];
	rules?: Partial<Rules>;
}

export const defaultConfig: Required<Configuration> = {
	include: ['.'],
	rules: {
		'strict-format-check': false,
		'file-naming-pattern': false,
		'file-size-limit': false,
	},
};
