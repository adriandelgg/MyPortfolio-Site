import type { AppProps } from 'next/app';
import '@styles/globals.css';
import '@styles/about.css';
import '@styles/footer.css';
import '@styles/header.css';
import '@styles/intro.css';
import '@styles/projects.css';
import '@styles/skills.css';
// import 'animate.css';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
export default MyApp;
