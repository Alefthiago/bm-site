// Util //
import { Inter } from "next/font/google";
import "./globals.css";
// Util //

// Componentes //
// import Head from "next/head";
import NavbarApp from "@/components/navbar";
import Footers from '../components/footer/footer';
// Componentes //

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BM Informatica",
  description: "BM Informatica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      {/* <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>

        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
      </Head> */}
      <body className={inter.className}>
        <NavbarApp />
        <main className={'mx-auto lg:w-4/5 h-full container'}>
          {children}
        </main>
        <Footers />
      </body>
    </html>
  );
}
