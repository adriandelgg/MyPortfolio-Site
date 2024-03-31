import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { JetBrains_Mono, Lato } from "next/font/google";
import "@/styles/globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-jetbrains-mono"
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato"
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${jetbrainsMono.variable} ${lato.variable}`}>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
