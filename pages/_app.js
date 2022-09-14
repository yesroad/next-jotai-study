import { useAtomsDevtools } from 'jotai/devtools';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	const AtomsDevtools = ({ children }) => {
		useAtomsDevtools();
		return children;
	};
	return (
		<AtomsDevtools>
			<Component {...pageProps} />
		</AtomsDevtools>
	);
}

export default MyApp;
