import { Provider } from 'jotai';
import { useAtomsDebugValue, useAtomsDevtools } from 'jotai/devtools';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

	const AtomsDevtools = ({ children }) => {
		useAtomsDevtools('jotai');
		return children;
	};

	const DebugAtoms = () => {
		useAtomsDebugValue();
		return null;
	};

	return (
		<Provider>
			<AtomsDevtools>
				<DebugAtoms />
				<Component {...pageProps} />
			</AtomsDevtools>
		</Provider>
	);
}

export default MyApp;
