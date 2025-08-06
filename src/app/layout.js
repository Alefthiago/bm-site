// Util //
import { Inter } from "next/font/google";
import "./globals.css";
// Util. //

// Componentes //
import NavbarApp from "@/components/navbar";
import Footers from '../components/footer/footer';
import Libras from "@/components/vLibras";
import ScrollTop from "@/components/btn/ScrollTop"
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
        url: "https://static.wixstatic.com/media/3500c1_e3450d38a0f04dc8a3dfc63852f83b45%7Emv2.png/v1/fit/w_2500,h_1330,al_c/3500c1_e3450d38a0f04dc8a3dfc63852f83b45%7Emv2.png",
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
      "https://static.wixstatic.com/media/3500c1_e3450d38a0f04dc8a3dfc63852f83b45%7Emv2.png/v1/fit/w_2500,h_1330,al_c/3500c1_e3450d38a0f04dc8a3dfc63852f83b45%7Emv2.png"
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
        <ScrollTop />
        <Libras />
        <Footers />
      </body>
    </html>
  );
}
