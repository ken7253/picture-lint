const pattern = /^\.?(jpg|jpeg|jpe)$/u;

export const normalizeJPGExt = (ext: string): 'jpg' | false => {
	const normalized = 'jpg';

	return pattern.test(ext) ? normalized : false;
};
