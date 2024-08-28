// Util //
import { Inter } from "next/font/google";
import "./globals.css";
// Util //

// Componentes //
// import Head from "next/head";
import NavbarApp from "@/components/navbar";
import Footers from '../components/footer/footer';
import Libras from "@/components/vLibras";
// Componentes //

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BM Informatica",
  description: "BM Informatica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-[#F8F8F8]`}>
        <NavbarApp />
        <main className={'mx-auto h-full'}>
          <div className="skew-cc lg:block hidden"></div>
          {children}
        </main>
        <Libras />
        <Footers />
      </body>
    </html>
  );
}
