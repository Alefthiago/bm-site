import Globals from "@/components/globals";
import Style from './equipament.module.css'
import React from "react";

import Cardi from "@/components/card";

const pageEquipment = () => {
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