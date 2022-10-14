type ExtType = 'jpg' | 'png';

export const strictFormatCheck = (meta: Uint8Array, is: ExtType) => {
	if (meta.length < 16) {
		throw new Error(
			'Insufficient data size.\n Array length must be at least 16.',
		);
	}

	const isPNG = () => {
		const header = meta.slice(0, 8);
		const correct = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
		const testUint = Uint8Array.of(...correct);
		const result = header.join() === testUint.join();
		console.log(header, testUint);

		return result;
	};

	const isJPG = () => {
		const SOI = meta.slice(0, 2);
		const correct = [0xff, 0xd8];
		const testUint = Uint8Array.of(...correct);
		const result = SOI.join() === testUint.join();

		console.log(SOI, testUint);

		return result;
	};

	switch (is) {
		case 'jpg':
			return isJPG();
		case 'png':
			return isPNG();
		default:
			throw new TypeError('Illegal argument.');
	}
};
