'use client';
// Util //
import Globals from "@/components/globals";
import Style from './solution.module.css'
import { useState, useEffect } from "react";

import Cardi from "@/components/card";
// Util. //

const PageSoluctions = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setInterval(() => setIsLoading(false), 500);
    }, []);

    useEffect(() => {
        Globals.observer(setIsLoading);
    }, [isLoading]);

    const cardsData = [
        {
            alt: "Descrição da imagem 1",
            imgSrc: "./solucoes/3500c1_701cdabe9a0a4e6ba433b6d12e60d5c7~mv2_d_2800_1867_s_2.webp",
            nome: "Supermercados, Mercadinhos, Frigoríficos, Açougues, Peixarias e Hortifrutis.",
            titulo: "Otimize a gestão do seu supermercado com nosso ERP especializado! Controle estoque, acompanhe vendas em tempo real e automatize operações diárias. Relatórios precisos ajudam na tomada de decisões estratégicas, aumentando a eficiência e os lucros. Transforme seu supermercado com nosso ERP!",
            // link: "https://www.exemplo1.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./solucoes/3500c1_5b03940ce4a64ea2868bf7eaf154f095~mv2.webp",
            nome: "Padarias,Delicatessens e Lojas de Conveniência",
            titulo: "Modernize a gestão da sua padaria ou delicatessen com nosso ERP exclusivo! Gerencie o estoque de ingredientes, acompanhe vendas e automatize tarefas diárias. Relatórios detalhados garantem decisões mais assertivas, aumentando a eficiência e os lucros. Eleve sua padaria com nosso ERP especializado!",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./solucoes/326dfa52134949cfa9538648b9482b5c.webp",
            nome: "Restaurantes, Lanchonetes, Cafeterias e Food Services",
            titulo: "Simplifique a gestão do seu restaurante, lanchonete, cafeteria ou food service com nosso ERP especializado! Controle estoque, pedidos e vendas de forma integrada. Com relatórios precisos, você toma decisões estratégicas, aumentando a eficiência e maximizando seus lucros. Eleve seu negócio com nosso ERP!",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./solucoes/3500c1_daaef41f54654b30bac2cc6136d00a05~mv2_d_2800_2100_s_2.webp",
            nome: "Lojas de Materiais de Construção e Madeireiras",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./solucoes/3500c1_6c5c975b9dcf41268c9696a3c861611f~mv2_d_2800_2227_s_2.webp",
            nome: "Livrarias e Papelarias",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./solucoes/3526a453af0045a4a608537103c26973.webp",
            nome: "Informática, Telefonia e Eletrônicos",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./solucoes/3500c1_9e3e6e87c51c4c5c84a4916d6b6ebb56~mv2_d_2800_1866_s_2.webp",
            nome: "Auto Peças e Oficinas",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./solucoes/c25a6748f1ca44d9bc09c6705e5e6ed5.webp",
            nome: "Lojas de Roupas e Calçados",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./solucoes/8fcb84cc20914397a05f6fe26636716b.webp",
            nome: "Lojas de Brinquedos",
            titulo: "Simplifique a gestão da sua loja de brinquedos com nosso ERP especializado! Tenha controle total de estoque, acompanhe as vendas em tempo real e automatize tarefas diárias. Com relatórios precisos, você toma decisões estratégicas para aumentar suas vendas e eficiência. Transforme sua loja com nosso ERP!",
            link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./solucoes/143c530d12befe41941c124489f9acc2.webp",
            nome: "Pet Shops",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./solucoes/3500c1_af492fbd990547e182cfddcad49fc643~mv2_d_2800_1822_s_2.webp",
            nome: "Atacados, Distribuidoras e Atacarejos",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./solucoes/3500c1_5e82a68c5eb042c5b7c60eef71ea0430~mv2_d_2800_1869_s_2.webp",
            nome: "Varejo em Geral",
            // link: "https://www.exemplo2.com",
            text: "Ver mais"
        }

    ];
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
                            <h1 className={`text-5xl font-bold text-center ${Style.h1_shadow}`}>Soluções para a sua Empresa</h1>
                        </div>
                        <div className="flex justify-center">
                            <p className="w-full sm:w-3/4 lg:w-2/3 text-center">
                                Com quase 20 anos no mercado, a BM Informática desenvolve softwares para os mais diversos segmentos. Clique no seu segmento e verifique o que a BM Informática tem a oferecer:
                            </p>
                        </div>
                    </section>
                    <Cardi cardsData={cardsData} />
                </>
            )}
        </section>
    );
}

export default PageSoluctions;
