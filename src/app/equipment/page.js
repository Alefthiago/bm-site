import Globals from "@/components/globals";
import Style from './equipament.module.css'
import React from "react";

import Cardi from "@/components/card";
import "@/components/card";

const pageEquipment = () => {
    const cardsData = [
        {
            alt: "Mini Impressoras",
            imgSrc: "./09e0add64a2c83e9bafd0d39f8707652.png",
            titulo: "Mini impressora de cupom fiscal, compacta e eficiente. Ideal para pequenos negócios, imprime recibos rapidamente via conexão Rede ou USB. Leve e fácil de transportar, perfeita para o dia a dia!"
,
            // link: "https://www.exemplo1.com",
            nome: "Mini Impressoras",
            hover: true,
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_42c81e47b8064624bc1407bdcc39cfd8~mv2.webp",
            titulo: "Smart PC compacto e versátil, combina desempenho e portabilidade. Ideal para trabalho e entretenimento, com conectividade avançada e design moderno. Perfeito para produtividade em qualquer lugar!"
            ,
            // link: "https://www.exemplo2.com",
            nome: "Smart PCs",
            hover: true,
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_9ef9944dc52b4cb7ab5cb325051d1b4e~mv2.webp",
            titulo: "Pin-Pad TEF (Transferência Eletrônica de Fundos) confiável e fácil de usar, oferece transações rápidas e seguras. Compatível com diversos sistemas de pagamento, é a escolha ideal para aprimorar o atendimento no seu negócio!",
            // link: "https://www.exemplo2.com",
            nome: "TEF / Pin-Pads",
            hover: true,
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_8f961a30ca144868af811f2014b50fa7~mv2.webp",
            titulo: "Leitor de Código de Barras rápido e preciso, ideal para otimizar o atendimento e controle de estoque. Fácil de usar, compatível com diversos sistemas, garantindo eficiência em cada leitura!"
            ,
            // link: "https://www.exemplo2.com",
            nome: "Leitores de Código de Barras",
            hover: true,
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_b4cccac9b8c54e31b77c42d11116f46e~mv2.webp",
            titulo: "Gaveta de Dinheiro robusta e segura, perfeita para armazenar e organizar seu caixa. Fácil de usar, com abertura rápida e compatível com diversos sistemas de ponto de venda. Ideal para seu negócio!"
            ,
            // link: "https://www.exemplo2.com",
            nome: "Gavetas de Dinheiro",
            hover: true
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_661759b7fe76411c8045f17a26a61f4e~mv2.webp",
            titulo: "Impressora de Etiquetas de Código de Barras eficiente e precisa, ideal para identificar produtos e organizar estoques. Fácil de operar, compatível com diversos formatos de etiquetas. Perfeita para otimizar a sua gestão.",
            // link: "https://www.exemplo2.com",
            nome: "Impressora de Etiquetas de Código de Barras",
            hover: true,

        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_6011ee0c63b04398b6c9349e91b6484a~mv2.webp",
            // link: "https://www.exemplo2.com",
            titulo: "CPU de Varejo potente e confiável, projetada para suportar as demandas do seu negócio. Oferece desempenho robusto, conectividade avançada e alta durabilidade. Ideal para maximizar a eficiência no ponto de venda!",

            nome: "CPUs de Varejo",
            hover: true
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_34bcb7f538734f428ae61c20a96bb3dc~mv2.webp",
            titulo: "Monitores nítidos e responsivos, ideais para melhorar a experiência de atendimento. Com alta resolução e design moderno, garante visualização clara e suporte a longas jornadas de trabalho. Perfeito para o varejo!",

            // link: "https://www.exemplo2.com",
            nome: "Monitores",
            hover: true,

        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_5d7bf9e82a2644308a63d240dc2f316b~mv2.webp",
            titulo: "Balanças Eletrônicas precisas e duráveis, ideal para pesagens rápidas e confiáveis no varejo. Fácil de usar, com display claro e alta capacidade de carga. Perfeita para melhorar a eficiência no atendimento!",
            // link: "https://www.exemplo2.com",
            nome: "Balanças Eletrônicas",
            hover: true,
        }

    ];
    return (
        <section className="flex min-h-screen flex-col items-center pt-12 px-4 gap-4">
            <section className="flex flex-col justify-center gap-10 w-full max-w-7xl px-4">
                <div className="flex justify-center">
                    <h1 className={`text-5xl font-bold text-center ${Style.h1_shadow}`}>Equipamentos para Automação Comercial</h1>
                </div>
                <div className="flex justify-center">
                    <p className="w-full sm:w-3/4 lg:w-2/3 text-center">
                        Equipamentos para Automatizar e Tornar Sua Empresa Mais Moderna e Eficiente.
                    </p>
                </div>
            </section>
            <Cardi cardsData={cardsData} />

        </section>
    );
}

export default pageEquipment;