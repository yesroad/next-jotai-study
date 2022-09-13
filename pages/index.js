import { useAtom } from 'jotai';
import Head from 'next/head';
import { readOnlyMultiplyAtom, writeOnlyMinusAtom, writeOnlyPlusAtom } from '../store/actions/count';
import { countAtom } from '../store/atoms/count';
import styles from '../styles/Home.module.css';

export default function Home() {
	const [count] = useAtom(countAtom);
  const [multiply] = useAtom(readOnlyMultiplyAtom);
  const [,plus] = useAtom(writeOnlyPlusAtom);
  const [,minus] = useAtom(writeOnlyMinusAtom);

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div>
				<h3>Count</h3>
        <button onClick={() => plus(1)}>+</button>
				<span>{count}</span>
        <button onClick={() => minus(1)}>-</button>
        <h3>readOnly</h3>
        <span>Count * 2 : {multiply}</span>
			</div>
		</div>
	);
}
