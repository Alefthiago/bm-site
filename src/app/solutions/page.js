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
            imgSrc: "./teste3,.jpg",
            nome: "Supermercados e Hortifrutis.",
            titulo: "Otimize a gestão do seu supermercado com nosso ERP especializado! Controle estoque, acompanhe vendas em tempo real e automatize operações diárias. Relatórios precisos ajudam na tomada de decisões estratégicas, aumentando a eficiência e os lucros. Transforme seu supermercado com nosso ERP!",
            // link: "https://www.exemplo1.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_5b03940ce4a64ea2868bf7eaf154f095~mv2.webp",
            nome: "Padarias",
            titulo: "Modernize a gestão da sua padaria ou delicatessen com nosso ERP exclusivo! Gerencie o estoque de ingredientes, acompanhe vendas e automatize tarefas diárias. Relatórios detalhados garantem decisões mais assertivas, aumentando a eficiência e os lucros. Eleve sua padaria com nosso ERP especializado!",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./restaurante.jpeg",
            nome: "Restaurantes e Lanchonetes",
            titulo : "Simplifique a gestão do seu restaurante, lanchonete, cafeteria ou food service com nosso ERP especializado! Controle estoque, pedidos e vendas de forma integrada. Com relatórios precisos, você toma decisões estratégicas, aumentando a eficiência e maximizando seus lucros. Eleve seu negócio com nosso ERP!",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./meterial.jpeg",
            nome: "Lojas de Materiais de Construção e Madeireiras",
            titulo : "Transforme a gestão da sua loja de materiais de construção com nossa solução completa! Controle seu estoque, acompanhe as vendas e automatize processos diários. Com ferramentas precisas, você otimiza a operação e toma decisões estratégicas para impulsionar o crescimento da sua loja. Eleve seu negócio ao próximo nível!",

            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_6c5c975b9dcf41268c9696a3c861611f~mv2_d_2800_2227_s_2.webp",
            nome: "Livrarias e Papelarias",
            titulo : "Organize e impulsione sua livraria ou papelaria com nossa solução de gestão completa! Controle o estoque de livros e materiais, acompanhe as vendas e facilite o dia a dia com processos automatizados. Tome decisões estratégicas com base em relatórios detalhados e leve sua loja a novos patamares de sucesso!",

            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./tecno.jpeg",
            nome: "Informática, Telefonia e Eletrônicos",
            titulo: "Potencialize sua loja de informática, telefonia ou eletrônicos com nossa solução de gestão eficiente! Controle o estoque, gerencie vendas e automatize operações diárias. Com ferramentas avançadas e relatórios detalhados, você toma decisões estratégicas e maximiza o crescimento do seu negócio. Aumente suas vendas e conquiste novos clientes!",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_9e3e6e87c51c4c5c84a4916d6b6ebb56~mv2_d_2800_1866_s_2.webp",
            nome: "Auto Peças e Oficinas",
            titulo : "Melhore a gestão da sua loja de autopeças ou oficina com nossa solução completa! Controle o estoque de peças, acompanhe serviços e automatize processos diários. Com relatórios precisos, você toma decisões estratégicas que aumentam a eficiência e impulsionam o crescimento do seu negócio. Mantenha sua oficina sempre à frente!",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./c25a6748f1ca44d9bc09c6705e5e6ed5.webp",
            nome: "Lojas de Roupas e Calçados",
            titulo : "Revitalize a gestão da sua loja de roupas e calçados com nossa solução completa! Gerencie seu estoque, acompanhe as vendas e automatize tarefas diárias. Com relatórios detalhados, você toma decisões estratégicas para otimizar suas operações e aumentar as vendas. Eleve sua loja ao próximo nível de sucesso!",
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
            titulo: "Transforme a gestão do seu pet shop com nossa solução especializada! Controle o estoque de produtos, acompanhe as vendas e automatize processos diários. Relatórios detalhados ajudam você a tomar decisões estratégicas, garantindo eficiência e crescimento para o seu negócio. Dê um salto de qualidade na gestão do seu pet shop!",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_af492fbd990547e182cfddcad49fc643~mv2_d_2800_1822_s_2.webp",
            nome: "Atacados, Distribuidoras e Atacarejos",
            titulo : "Otimize a operação com nossa solução completa! Controle o estoque, gerencie pedidos em grande escala e automatize processos. Relatórios precisos facilitam decisões estratégicas, impulsionando eficiência e lucratividade. Eleve o desempenho do seu negócio e amplie sua capacidade de atendimento!",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./varejo.jpeg",
            nome: "Varejo em Geral",
            titulo :"Simplifique a gestão do seu negócio no varejo com nossa solução completa! Controle o estoque, gerencie vendas e automatize processos diários. Com relatórios detalhados, você toma decisões estratégicas que otimizam operações e aumentam seus lucros. Transforme a eficiência da sua loja e eleve o sucesso do seu varejo!",
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
