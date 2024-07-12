// Util //
import { Inter } from "next/font/google";
import "./globals.css";
// Util //

// Componentes //
import Navbar from '../components/layout/navbar/';
import Footer from '../components/layout/footer';
import Head from "next/head";
// Componentes //

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BM Informatica",
  description: "BM Informatica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>

        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
      </Head>

      <body className={inter.className}>

        <Navbar />
        <main className={'mx-auto lg:w-3/5 h-full container'}>
          {children}
        </main>
        <Footer />

      </body>
    </html>
  );
}
