import { atom } from 'jotai';
import { countAtom, writeOnlyAtom } from '../atoms/count';

// readOnly
export const readOnlyMultiplyAtom = atom((get) => get(countAtom) * 2);
readOnlyMultiplyAtom.debugLabel = 'readOnlyMultiplyAtom'

// writeOnly 카운트 action 만큼 더하기
export const writeOnlyPlusAtom = atom(null, (get, set, action) =>
	set(countAtom, get(countAtom) + action),
);

// writeOnly 카운트 action 만큼 빼기
export const writeOnlyMinusAtom = atom(null, (get, set, action) =>
	set(countAtom, get(countAtom) - action),
);

// 또는 action 하나에 사용
export const writeOnlyCountAtom = atom(null, (get, set, action) => {
	switch (action.type) {
		case 'MINUS':
			return set(writeOnlyAtom, get(writeOnlyAtom) - action.count);
		case 'PLUS':
			return set(writeOnlyAtom, get(writeOnlyAtom) + action.count);
    default :
      throw Error('type 을 확인하세요')
	}
});
