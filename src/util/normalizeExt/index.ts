const pattern = /^\.?(jpg|jpeg|jpe)$/u;

export const normalizeJPGExt = (ext: string): 'jpg' | string => {
	const normalized = 'jpg';

	return pattern.test(ext) ? normalized : ext;
};
