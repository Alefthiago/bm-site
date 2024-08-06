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
            text: "Supermercados, Mercadinhos, Frigoríficos, Açougues, Peixarias e Hortifrutis."
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "/caminho/para/sua/imagem2.jpg",
            link: "https://www.exemplo2.com",
            text: "Padarias,Delicatessens e Lojas de Conveniência"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "/caminho/para/sua/imagem2.jpg",
            link: "https://www.exemplo2.com",
            text: "Restaurantes, Lanchonetes, Cafeterias e Food Services"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "/caminho/para/sua/imagem2.jpg",
            link: "https://www.exemplo2.com",
            text: "Lojas de Materiais de Construção e Madeireiras"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "/caminho/para/sua/imagem2.jpg",
            link: "https://www.exemplo2.com",
            text: "Livrarias e Papelarias"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "/caminho/para/sua/imagem2.jpg",
            link: "https://www.exemplo2.com",
            text: "Informática, Telefonia e Eletrônicos"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "/caminho/para/sua/imagem2.jpg",
            link: "https://www.exemplo2.com",
            text: "Auto Peças e Oficinas"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "/caminho/para/sua/imagem2.jpg",
            link: "https://www.exemplo2.com",
            text: "Lojas de Roupas e Calçados"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "/caminho/para/sua/imagem2.jpg",
            link: "https://www.exemplo2.com",
            text: "Lojas de Brinquedos"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "/caminho/para/sua/imagem2.jpg",
            link: "https://www.exemplo2.com",
            text: "Pet Shops"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "/caminho/para/sua/imagem2.jpg",
            link: "https://www.exemplo2.com",
            text: "Atacados, Distribuidoras e Atacarejos"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "/caminho/para/sua/imagem2.jpg",
            link: "https://www.exemplo2.com",
            text: "Varejo em Geral"
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
