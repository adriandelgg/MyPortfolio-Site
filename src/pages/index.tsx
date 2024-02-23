import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/header/Header";
import { Intro } from "@/components/intro/Intro";
import { Projects } from "@/components/projects/Projects";
import { Skills } from "@/components/skills/Skills";
import { Footer } from "@/components/footer/Footer";
// import { AboutMe } from '@/components/aboutMe/AboutMe';

export default function Home() {
  return (
    <>
      <Head>
        <title>Adrian Delgado&apos;s Website</title>
        <meta name="description" content="Adrian Delgado - Software Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <Header />
      <main id="main">
        <Intro />
        {/* <AboutMe /> */}
        <Skills />
        <Projects />
        <Analytics />
        <SpeedInsights />
      </main>
      <Footer />
    </>
  );
}
