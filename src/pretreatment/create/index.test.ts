import path from 'node:path';
import { create } from '.';
import { describe } from '@jest/globals';

describe('[pretreatment: create]', () => {
	test('Correct path', () => {
		const testFile = (name: string) => path.join(process.cwd(), 'src', '__test__', 'format-tester', name);
		const list = [testFile('jpg.jpg'), testFile('png-8.png'), testFile('png-24.png'), testFile('webp-lossless.webp'), testFile('webp-lossy.webp')];
		const pretreatment = create(list);

		console.log(pretreatment);

		return pretreatment;
	});
});
