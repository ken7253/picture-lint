import type { ParsedPath } from 'path';
import { create } from './create';

export interface PretreatmentItem {
	path: ParsedPath;
	header: Uint8Array;
	size: number;
}

export type Pretreatment = PretreatmentItem[];

export const pretreatment = {
	create,
};
