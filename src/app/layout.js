// Util //
import { Inter } from "next/font/google";
import "./globals.css";
// Util //

// Componentes //
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
// Componentes //

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BM Informatica",
  description: "BM Informatica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
