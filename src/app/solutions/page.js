// Util //
import Globals from "@/components/globals";
import Style from './solution.module.css'
import React from "react";

import Cardi from "@/components/card";
// Util. //

const pageSoluctions = () => {

    const cardsData = [
        {
            alt: "Descrição da imagem 1",
            imgSrc: "/caminho/para/sua/imagem1.jpg",
            link: "https://www.exemplo1.com",
            text: "Seu texto aqui 1"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "/caminho/para/sua/imagem2.jpg",
            link: "https://www.exemplo2.com",
            text: "Seu texto aqui 2"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "/caminho/para/sua/imagem2.jpg",
            link: "https://www.exemplo2.com",
            text: "Seu texto aqui 2"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "/caminho/para/sua/imagem2.jpg",
            link: "https://www.exemplo2.com",
            text: "Seu texto aqui 2"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "/caminho/para/sua/imagem2.jpg",
            link: "https://www.exemplo2.com",
            text: "Seu texto aqui 2"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "/caminho/para/sua/imagem2.jpg",
            link: "https://www.exemplo2.com",
            text: "Seu texto aqui 2"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "/caminho/para/sua/imagem2.jpg",
            link: "https://www.exemplo2.com",
            text: "Seu texto aqui 2"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "/caminho/para/sua/imagem2.jpg",
            link: "https://www.exemplo2.com",
            text: "Seu texto aqui 2"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "/caminho/para/sua/imagem2.jpg",
            link: "https://www.exemplo2.com",
            text: "Seu texto aqui 2"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "/caminho/para/sua/imagem2.jpg",
            link: "https://www.exemplo2.com",
            text: "Seu texto aqui 2"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "/caminho/para/sua/imagem2.jpg",
            link: "https://www.exemplo2.com",
            text: "Seu texto aqui 2"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "/caminho/para/sua/imagem2.jpg",
            link: "https://www.exemplo2.com",
            text: "Seu texto aqui 2"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "/caminho/para/sua/imagem2.jpg",
            link: "https://www.exemplo2.com",
            text: "Seu texto aqui 2"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "/caminho/para/sua/imagem2.jpg",
            link: "https://www.exemplo2.com",
            text: "Seu texto aqui 2"
        },
        {
            imgAlt: "Descrição da imagem 3",
            imgSrc: "/caminho/para/sua/imagem3.jpg",
            link: "https://www.exemplo3.com",
            text: "Seu texto aqui 3"
        }
        
    ];
    return (
        <section className="flex min-h-screen flex-col items-center pt-12 px-4 gap-4">
            <section className="flex flex-col justify-center gap-10 w-full max-w-7xl px-4">
                <div className="flex justify-center">
                    <h1 className={`text-5xl font-bold text-center ${Style.h1_shadow}`}>Soluções para a sua Empresa</h1>
                </div>
                <div className="flex justify-center">
                    <p className="w-full sm:w-3/4 lg:w-2/3 text-center">
                        Com quase 20 anos no mercado, a BM Informática desenvolve softwares para os mais diversos segmentos. Clique no seu segmento e verifique o que a BM Informática tem a oferecer:
                    </p>
                </div>
            </section>
            <Cardi cardsData={cardsData} />
        </section>
    );
}

export default pageSoluctions;
