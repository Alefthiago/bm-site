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
 
            imgSrc: "./3500c1_701cdabe9a0a4e6ba433b6d12e60d5c7~mv2_d_2800_1867_s_2.webp",
            // link: "https://www.exemplo1.com",

            text: "Supermercados, Mercadinhos, Frigoríficos, Açougues, Peixarias e Hortifrutis."
        },
        {
            imgAlt: "Descrição da imagem 2",

            imgSrc: "/caminho/para/sua/imagem2.jpg",

            imgSrc: "./3500c1_5b03940ce4a64ea2868bf7eaf154f095~mv2.webp",
            // link: "https://www.exemplo2.com",

            text: "Padarias,Delicatessens e Lojas de Conveniência"
        },
        {
            imgAlt: "Descrição da imagem 2",

            imgSrc: "/caminho/para/sua/imagem2.jpg",

            imgSrc: "./326dfa52134949cfa9538648b9482b5c.webp",
            // link: "https://www.exemplo2.com",

            text: "Restaurantes, Lanchonetes, Cafeterias e Food Services"
        },
        {
            imgAlt: "Descrição da imagem 2",

            imgSrc: "/caminho/para/sua/imagem2.jpg",
            link: "https://www.exemplo2.com",

            imgSrc: "./3500c1_daaef41f54654b30bac2cc6136d00a05~mv2_d_2800_2100_s_2.webp",
            // link: "https://www.exemplo2.com",

            text: "Lojas de Materiais de Construção e Madeireiras"
        },
        {
            imgAlt: "Descrição da imagem 2",

            imgSrc: "/caminho/para/sua/imagem2.jpg",

            imgSrc: "./3500c1_6c5c975b9dcf41268c9696a3c861611f~mv2_d_2800_2227_s_2.webp",
            // link: "https://www.exemplo2.com",

            text: "Livrarias e Papelarias"
        },
        {
            imgAlt: "Descrição da imagem 2",

            imgSrc: "/caminho/para/sua/imagem2.jpg",
  

            imgSrc: "./3526a453af0045a4a608537103c26973.webp",
            // link: "https://www.exemplo2.com",

            text: "Informática, Telefonia e Eletrônicos"
        },
        {
            imgAlt: "Descrição da imagem 2",

            imgSrc: "/caminho/para/sua/imagem2.jpg",

            imgSrc: "./3500c1_9e3e6e87c51c4c5c84a4916d6b6ebb56~mv2_d_2800_1866_s_2.webp",
            // link: "https://www.exemplo2.com",

            text: "Auto Peças e Oficinas"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./c25a6748f1ca44d9bc09c6705e5e6ed5.webp",
            // link: "https://www.exemplo2.com",
            text: "Lojas de Roupas e Calçados"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./8fcb84cc20914397a05f6fe26636716b.webp",
            // link: "https://www.exemplo2.com",
            text: "Lojas de Brinquedos"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./143c530d12befe41941c124489f9acc2.webp",
            // link: "https://www.exemplo2.com",
            text: "Pet Shops"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_af492fbd990547e182cfddcad49fc643~mv2_d_2800_1822_s_2.webp",
            // link: "https://www.exemplo2.com",
            text: "Atacados, Distribuidoras e Atacarejos"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_5e82a68c5eb042c5b7c60eef71ea0430~mv2_d_2800_1869_s_2.webp",
            // link: "https://www.exemplo2.com",
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
