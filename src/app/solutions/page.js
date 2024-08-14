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
            imgSrc: "./3500c1_701cdabe9a0a4e6ba433b6d12e60d5c7~mv2_d_2800_1867_s_2.webp",
            nome: "Supermercados, Mercadinhos, Frigoríficos, Açougues, Peixarias e Hortifrutis.",
            titulo: "Otimize a gestão do seu supermercado com nosso ERP especializado! Controle estoque, acompanhe vendas em tempo real e automatize operações diárias. Relatórios precisos ajudam na tomada de decisões estratégicas, aumentando a eficiência e os lucros. Transforme seu supermercado com nosso ERP!",
            // link: "https://www.exemplo1.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_5b03940ce4a64ea2868bf7eaf154f095~mv2.webp",
            nome: "Padarias,Delicatessens e Lojas de Conveniência",
            titulo: "Modernize a gestão da sua padaria ou delicatessen com nosso ERP exclusivo! Gerencie o estoque de ingredientes, acompanhe vendas e automatize tarefas diárias. Relatórios detalhados garantem decisões mais assertivas, aumentando a eficiência e os lucros. Eleve sua padaria com nosso ERP especializado!",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./326dfa52134949cfa9538648b9482b5c.webp",
            nome: "Restaurantes, Lanchonetes, Cafeterias e Food Services",
            titulo : "Simplifique a gestão do seu restaurante, lanchonete, cafeteria ou food service com nosso ERP especializado! Controle estoque, pedidos e vendas de forma integrada. Com relatórios precisos, você toma decisões estratégicas, aumentando a eficiência e maximizando seus lucros. Eleve seu negócio com nosso ERP!",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_daaef41f54654b30bac2cc6136d00a05~mv2_d_2800_2100_s_2.webp",
            nome: "Lojas de Materiais de Construção e Madeireiras",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_6c5c975b9dcf41268c9696a3c861611f~mv2_d_2800_2227_s_2.webp",
            nome: "Livrarias e Papelarias",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3526a453af0045a4a608537103c26973.webp",
            nome: "Informática, Telefonia e Eletrônicos",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_9e3e6e87c51c4c5c84a4916d6b6ebb56~mv2_d_2800_1866_s_2.webp",
            nome: "Auto Peças e Oficinas",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./c25a6748f1ca44d9bc09c6705e5e6ed5.webp",
            nome: "Lojas de Roupas e Calçados",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./8fcb84cc20914397a05f6fe26636716b.webp",
            nome: "Lojas de Brinquedos",
            titulo: "Simplifique a gestão da sua loja de brinquedos com nosso ERP especializado! Tenha controle total de estoque, acompanhe as vendas em tempo real e automatize tarefas diárias. Com relatórios precisos, você toma decisões estratégicas para aumentar suas vendas e eficiência. Transforme sua loja com nosso ERP!",
            link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./143c530d12befe41941c124489f9acc2.webp",
            nome: "Pet Shops",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_af492fbd990547e182cfddcad49fc643~mv2_d_2800_1822_s_2.webp",
            nome: "Atacados, Distribuidoras e Atacarejos",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_5e82a68c5eb042c5b7c60eef71ea0430~mv2_d_2800_1869_s_2.webp",
            nome: "Varejo em Geral",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
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
