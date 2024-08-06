import Globals from "@/components/globals";
import Style from './equipament.module.css'
import React from "react";

import Cardi from "@/components/card";

const pageEquipment = () => {
    const cardsData = [
        {
            alt: "Mini Impressoras",
            imgSrc: "../../imgEq/R.jpeg",
            link: "https://www.exemplo1.com",
            text: "Mini Impressoras"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "../../imgEq/R.jpeg",
            link: "https://www.exemplo2.com",
            text: "Smart PCs"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "../../imgEq/R.jpeg",
            link: "https://www.exemplo2.com",
            text: "TEF (Transferência Eletrônica de Fundos) / Pin-Pads"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "../../imgEq/R.jpeg",
            link: "https://www.exemplo2.com",
            text: "Leitores de Código de Barras"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "../../imgEq/R.jpeg",
            link: "https://www.exemplo2.com",
            text: "Gavetas de Dinheiro"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "../../imgEq/R.jpeg",
            link: "https://www.exemplo2.com",
            text: "Impressora de Etiquetas de Código de Barras"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "../../imgEq/R.jpeg",
            link: "https://www.exemplo2.com",
            text: "CPUs de Varejo"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "../../imgEq/R.jpeg",
            link: "https://www.exemplo2.com",
            text: "Monitores"
        },
        {
            imgAlt: "Descrição da imagem 2",
            imgSrc: "../../imgEq/R.jpeg",
            link: "https://www.exemplo2.com",
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