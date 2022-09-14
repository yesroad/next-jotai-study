import { useAtom } from 'jotai';

import styles from '../styles/Home.module.css';
import { countAtom, readOnlyMultiplyAtom, writeOnlyAtom, writeOnlyCountAtom, writeOnlyMinusAtom, writeOnlyPlusAtom } from '../store';

export default function Recoil() {
	const [count] = useAtom(countAtom);
  const [writeOnlyCount] = useAtom(writeOnlyAtom);

  const [multiply] = useAtom(readOnlyMultiplyAtom);
  const [,plus] = useAtom(writeOnlyPlusAtom);
  const [,minus] = useAtom(writeOnlyMinusAtom);
  const [,writeOnly] = useAtom(writeOnlyCountAtom);

	return (
		<div className={styles.container}>
      <h2>Recoil</h2>
			<div>
				<h3>Count</h3>
        <p>예제 1</p>
        <button onClick={() => plus(1)}>+</button>
				<span>{count}</span>
        <button onClick={() => minus(1)}>-</button>

        <h3>예제 2</h3>
        <button onClick={() => writeOnly({type: 'MINUS', count: 2})}>-</button>
				<span>{writeOnlyCount}</span>
        <button onClick={() => writeOnly({type: 'PLUS', count: 2})}>+</button>

        <h3>예제 1에 대한 * 2 readOnly</h3>
        <span>Count : {multiply}</span>
			</div>
		</div>
	);
}
