import { Header } from "@/components/Header";
import "@/styles/globals.css";
import "@/styles/normalize.css";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-harbor",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${workSans.variable} font-sans`}>
      <Header></Header>
      <Component {...pageProps} />
    </div>
  );
}
