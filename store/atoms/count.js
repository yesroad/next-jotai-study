import { atom } from 'jotai';


export const countAtom = atom(1);
countAtom.debugLabel = 'countAtom'

export const writeOnlyAtom = atom(0);
writeOnlyAtom.debugLabel = 'writeOnlyAtom'