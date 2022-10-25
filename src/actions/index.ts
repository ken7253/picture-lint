import type { Configuration } from '../config';
import { init } from './init/';
import { lint } from './lint';

type Action = (config: Configuration) => void;
type Actions = { [key: string]: Action };

export const action: Actions = {
	init,
	lint,
};
