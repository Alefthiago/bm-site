import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest{
    return {
        name: 'Bm Informatica',
        short_name: 'BmInfo',
        description: 'A BM Informática oferece soluções em softwares de gestão ERP em nuvem e PDV para o varejo, além de equipamentos de automação comercial em todo o Brasil. Otimize a gestão do seu negócio e aumente sua eficiência agora!',
        start_url:'/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: '/favicon.ico',
                sizes: '64x64 32x32 24x24 16x16',
                type: 'image/x-icon',
            }
        ],
    };
};