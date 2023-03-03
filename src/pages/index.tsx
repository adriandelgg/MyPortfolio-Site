import Head from 'next/head';
import { Header } from '@/components/header/Header';
import { Intro } from '@/components/intro/Intro';
// import { AboutMe } from '@/components/aboutMe/AboutMe';
import { Projects } from '@/components/projects/Projects';
import { Skills } from '@/components/skills/Skills';
import { Footer } from '@/components/footer/Footer';

export default function Home() {
	return (
		<>
			<Head>
				<title>Adrian Delgado&apos;s Website</title>
				<meta
					name="description"
					content="Adrian Delgado: Full-Stack Blockchain & Web Developer"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<Header />
			<main id="main">
				<Intro />
				{/* <AboutMe /> */}
				<Skills />
				<Projects />
			</main>
			<Footer />
		</>
	);
}
