// Util //
import { Inter } from "next/font/google";
import "./globals.css";
// Util //

// Componentes //
import NavbarApp from "@/components/navbar";
import Footers from '../components/footer/footer';
import Libras from "@/components/vLibras";
// Componentes //

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BM Informática - Softwares de Gestão ERP em Nuvem e PDV para Varejo | Brasil",
  description: "A BM Informática oferece soluções em softwares de gestão ERP em nuvem e PDV para o varejo, além de equipamentos de automação comercial em todo o Brasil. Otimize a gestão do seu negócio e aumente sua eficiência agora!",
  keywords: [
    "BM", "Informática", "software", "informatica", "tecnologia",
    "sistemas", "nfc-e", "nfce", "nota fiscal consumidor", "nf-e", "nfe", "CTe", "CT-e", "Conhecimento de Transporte Eletrônico", "MDFe", "MDF-e", "Manifesto Eletrônico de Documentos Fiscais"
  ],
  metadataBase: new URL("https://www.bminformatica.com.br"),
  alternates: {
    canonical: "https://www.bminformatica.com.br",
  },
  openGraph: {
    type: "website",
    url: "https://www.bminformatica.com.br",
    siteName: "bminfo",
    title: "BM Informática - Softwares de Gestão ERP em Nuvem e PDV para Varejo | Brasil",
    description: "A BM Informática oferece soluções em softwares de gestão ERP em nuvem e PDV para o varejo, além de equipamentos de automação comercial em todo o Brasil. Otimize a gestão do seu negócio e aumente sua eficiência agora!",
    images: [
      {
        url: "./bm/banner.png",
        width: 2500,
        height: 1330,
        alt: "BM Informática Logo"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BM Informática - Softwares de Gestão ERP em Nuvem e PDV para Varejo | Brasil",
    description: "A BM Informática oferece soluções em softwares de gestão ERP em nuvem e PDV para o varejo, além de equipamentos de automação comercial em todo o Brasil. Otimize a gestão do seu negócio e aumente sua eficiência agora!",
    images: [
      "./bm/banner.png"
    ],
  },
  other: {
    "fb:admins": "bminformaticaoficial",
    "fb_admins_meta_tag": "bminformaticaoficial",
  },
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
