export default function manifest() {
  return {
    name: 'Bm Informatica',
    short_name: 'BmInfo',
    description: 'A BM Informática oferece soluções em softwares de gestão ERP em nuvem e PDV para o varejo, além de equipamentos de automação comercial em todo o Brasil. Otimize a gestão do seu negócio e aumente sua eficiência agora!',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
};