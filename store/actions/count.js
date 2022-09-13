import { atom } from 'jotai';
import { countAtom } from '../atoms/count';

export const readOnlyMultiplyAtom = atom((get) => get(countAtom) * 2);

export const writeOnlyPlusAtom = atom(null, (get, set, action) =>
	set(countAtom, get(countAtom) + action),
);

export const writeOnlyMinusAtom = atom(null, (get, set, action) =>
	set(countAtom, get(countAtom) - action),
);
