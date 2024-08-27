'use client';
// import Globals from "@/components/globals";
//      UTIL.       //
import Style from './equipament.module.css'
import React from "react";
import Cardi from "@/components/card";
import "@/components/card";
import { useState, useEffect } from "react";
import Globals from "@/components/globals";

//     /UTIL.       //

const PageEquipment = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setInterval(() => setIsLoading(false), 500);
    }, []);

    useEffect(() => {
        Globals.observer(setIsLoading);
    }, [isLoading]);

    //      INFO CARDS.     //
    const cardsData = [
        {
            alt: "Mini Impressoras",
            imgSrc: "./equipamentos/09e0add64a2c83e9bafd0d39f8707652.png",
            titulo: "Mini impressora de cupom fiscal, compacta e eficiente. Ideal para pequenos negócios, imprime recibos rapidamente via conexão Rede ou USB. Leve e fácil de transportar, perfeita para o dia a dia!"
            ,
            // link: "https://www.exemplo1.com",
            nome: "Mini Impressoras",
            hover: true,
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./equipamentos/3500c1_42c81e47b8064624bc1407bdcc39cfd8~mv2.webp",
            titulo: "Smart PC compacto e versátil, combina desempenho e portabilidade. Ideal para trabalho e entretenimento, com conectividade avançada e design moderno. Perfeito para produtividade em qualquer lugar!"
            ,
            // link: "https://www.exemplo2.com",
            nome: "Smart PCs",
            hover: true,
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./equipamentos/3500c1_9ef9944dc52b4cb7ab5cb325051d1b4e~mv2.webp",
            titulo: "Pin-Pad TEF (Transferência Eletrônica de Fundos) confiável e fácil de usar, oferece transações rápidas e seguras. Compatível com diversos sistemas de pagamento, é a escolha ideal para aprimorar o atendimento no seu negócio!",
            // link: "https://www.exemplo2.com",
            nome: "TEF / Pin-Pads",
            hover: true,
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./equipamentos/3500c1_8f961a30ca144868af811f2014b50fa7~mv2.webp",
            titulo: "Leitor de Código de Barras rápido e preciso, ideal para otimizar o atendimento e controle de estoque. Fácil de usar, compatível com diversos sistemas, garantindo eficiência em cada leitura!"
            ,
            // link: "https://www.exemplo2.com",
            nome: "Leitores de Código de Barras",
            hover: true,
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./equipamentos/3500c1_b4cccac9b8c54e31b77c42d11116f46e~mv2.webp",
            titulo: "Gaveta de Dinheiro robusta e segura, perfeita para armazenar e organizar seu caixa. Fácil de usar, com abertura rápida e compatível com diversos sistemas de ponto de venda. Ideal para seu negócio!"
            ,
            // link: "https://www.exemplo2.com",
            nome: "Gavetas de Dinheiro",
            hover: true
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./equipamentos/3500c1_661759b7fe76411c8045f17a26a61f4e~mv2.webp",
            titulo: "Impressora de Etiquetas de Código de Barras eficiente e precisa, ideal para identificar produtos e organizar estoques. Fácil de operar, compatível com diversos formatos de etiquetas. Perfeita para otimizar a sua gestão.",
            // link: "https://www.exemplo2.com",
            nome: "Impressora de Etiquetas de Código de Barras",
            hover: true,

        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./equipamentos/3500c1_6011ee0c63b04398b6c9349e91b6484a~mv2.webp",
            // link: "https://www.exemplo2.com",
            titulo: "CPU de Varejo potente e confiável, projetada para suportar as demandas do seu negócio. Oferece desempenho robusto, conectividade avançada e alta durabilidade. Ideal para maximizar a eficiência no ponto de venda!",

            nome: "CPUs de Varejo",
            hover: true
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./equipamentos/3500c1_34bcb7f538734f428ae61c20a96bb3dc~mv2.webp",
            titulo: "Monitores nítidos e responsivos, ideais para melhorar a experiência de atendimento. Com alta resolução e design moderno, garante visualização clara e suporte a longas jornadas de trabalho. Perfeito para o varejo!",

            // link: "https://www.exemplo2.com",
            nome: "Monitores",
            hover: true,

        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./equipamentos/3500c1_5d7bf9e82a2644308a63d240dc2f316b~mv2.webp",
            titulo: "Balanças Eletrônicas precisas e duráveis, ideal para pesagens rápidas e confiáveis no varejo. Fácil de usar, com display claro e alta capacidade de carga. Perfeita para melhorar a eficiência no atendimento!",
            // link: "https://www.exemplo2.com",
            nome: "Balanças Eletrônicas",
            hover: true,
        }
    ];
    //     /INFO CARDS.     //

    return (
        <section className="flex min-h-screen flex-col items-center pt-12 px-4 gap-4">
            {isLoading ? (
                <div className="flex justify-center items-center min-h-screen absolute">
                    <svg width="100" height="100" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-jump animate-infinite animate-duration-1000 animate-delay-500">
                        <path d="M157.176 4.55984C79.5307 22.1808 19.2564 84.9109 3.38029 161.347C-0.993846 182.415 -1.14817 221.375 3.06502 241.245C10.7793 277.628 27.6144 309.953 52.6179 336.391C92.9905 379.074 141.732 400.039 200.507 400C230.903 399.98 246.769 397.032 275.348 386.1C333.654 363.791 380.065 310.283 396.073 246.916C401.81 224.199 401.153 174.169 394.81 151.049C384.018 111.697 358.185 72.0998 327.141 47.3241C308.941 32.7981 273.659 12.5151 252.318 6.6706C223.777 -1.14538 179.683 -2.40663 157.176 4.55984ZM243.744 62.4187C263.899 72.2638 279.713 94.441 279.828 113.02C279.874 120.746 280.108 120.958 289.998 122.301C311.701 125.254 331.31 139.137 342.051 159.161C346.225 166.937 347.087 171.922 347.085 188.233C347.078 217.637 345.746 219.507 274.993 289.396C220.561 343.165 213.945 349.001 207.41 349.001C196.947 349.001 187.279 338.919 187.279 328.009C187.279 320.196 190.119 316.976 247.053 260.248C304.483 203.026 306.864 200.32 307.804 191.181C309.049 179.053 302.79 168.503 291.597 163.864C274.801 156.902 273.313 157.941 208.094 222.314C149.468 280.174 148.28 281.194 139.393 281.194C132 281.194 129.306 279.965 124.641 274.463C112.674 260.353 112.809 260.152 177.111 195.983C209.108 164.05 236.391 135.775 237.74 133.148C243.223 122.463 238.829 105.732 228.69 98.6866C223 94.7297 206.817 94.172 199.811 97.6914C197.163 99.0212 168.995 125.794 137.217 157.186C83.2787 210.467 78.9156 214.262 71.5674 214.262C60.7665 214.262 51.9102 205.476 51.9102 194.76C51.9102 187.456 55.8368 183.043 112.429 126.743C145.716 93.6317 176.655 64.6236 181.181 62.2853C201.352 51.8693 222.235 51.9131 243.744 62.4187Z" fill="#206BA5" />
                    </svg>

                </div>
            ) : (
                <>
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
                </>
            )}
        </section>
    );
}

export default PageEquipment;