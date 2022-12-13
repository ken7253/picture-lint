import type { Configuration } from '..';

/**
 * Function for merging configuration files.
 *
 * Use this function instead of shallow merging because each configuration item has different integration rules.
 *
 * @param main Dominant setting
 * @param sub Weak setting
 * @returns merged configuration
 */
export const marge = (main: Configuration, sub: unknown | Configuration): Configuration => {
	if (sub === null || sub === undefined) return main;
	const subInclude = Object.hasOwn(sub, 'include') ? (sub as { include: Configuration['include'] }).include : main.include;
	const include = [...new Set([...main.include, ...subInclude])];
	const subRules = Object.hasOwn(sub, 'rules') ? (sub as { rules: Configuration['rules'] }).rules : main.rules;
	const result: Configuration = {
		include,
		rules: {
			...main.rules,
			...subRules,
		},
	};

	return result;
};
