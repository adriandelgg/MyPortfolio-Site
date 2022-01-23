import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "src/components/footer/Footer";
import { Header } from "src/components/header/Header";
import { Intro } from "src/components/intro/Intro";
import { Projects } from "src/components/projects/Projects";
import { Skills } from "src/components/skills/Skills";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
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
};

export default Home;
