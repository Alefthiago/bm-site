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
        <meta
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        ></meta>


        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossorigin="anonymous"
        ></script>
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
