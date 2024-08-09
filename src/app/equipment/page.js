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
            // link: "https://www.exemplo1.com",
            nome:"Mini Impressoras",
            hover: true,
            text: "Mini impressora de cupom fiscal, compacta e eficiente. Ideal para pequenos negócios, imprime recibos rapidamente via conexão Rede ou USB. Leve e fácil de transportar, perfeita para o dia a dia!"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_42c81e47b8064624bc1407bdcc39cfd8~mv2.webp",
            // link: "https://www.exemplo2.com",
            nome:"Smart PCs",
            hover: true,
            text: "Smart PCs"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_9ef9944dc52b4cb7ab5cb325051d1b4e~mv2.webp",
            // link: "https://www.exemplo2.com",
            nome:"TEF / Pin-Pads",
            hover: true,
            text: "TEF (Transferência Eletrônica de Fundos) / Pin-Pads"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_8f961a30ca144868af811f2014b50fa7~mv2.webp",
            // link: "https://www.exemplo2.com",
            nome:"Leitores de Código de Barras",
            hover: true,
            text: "Leitores de Código de Barras"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_b4cccac9b8c54e31b77c42d11116f46e~mv2.webp",
            // link: "https://www.exemplo2.com",
            nome:"Gavetas de Dinheiro",
            hover: true,
            text: "Gavetas de Dinheiro"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_661759b7fe76411c8045f17a26a61f4e~mv2.webp",
            // link: "https://www.exemplo2.com",
            nome:"Impressora de Etiquetas de Código de Barras",
            hover: true,
            text: "Impressora de Etiquetas de Código de Barras"
          
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_6011ee0c63b04398b6c9349e91b6484a~mv2.webp",
            // link: "https://www.exemplo2.com",
            nome:"CPUs de Varejo",
            hover: true,
            text: "CPUs de Varejo"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_34bcb7f538734f428ae61c20a96bb3dc~mv2.webp",
            // link: "https://www.exemplo2.com",
            nome:"Monitores",
            hover: true,
            text: "Monitores"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "./3500c1_5d7bf9e82a2644308a63d240dc2f316b~mv2.webp",
            // link: "https://www.exemplo2.com",
            nome:"Balanças Eletrônicas",
            hover: true,
            text: "Balanças Eletrônicas"
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