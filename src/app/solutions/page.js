// Util //
import Globals from "@/components/globals";
import Style from './solution.module.css'
import React from "react";

import Card from "@/components/card";
// Util. //

const pageSoluctions = () => {
    return (
        <section className="flex min-h-screen flex-col items-center pt-12 px-4">
            <section className=" flex flex-col justify-center gap-10">
                <div className="flex  justify-center">
                    <h1 className={`text-5xl font-bold text-center ${Style.h1_shadow}`}>Soluções para a sua Empresa</h1>

                </div>
                <div className="  flex  justify-center">
                    <p className=" w-[60%] text-center">Com quase 20 anos no mercado, a BM Informática desenvolve softwares para os mais diversos segmentos. Clique no seu segmento e verifique o que a BM Informática tem a oferecer :</p>
                </div>
            </section>
            {/* <Card/> */}
        </section>
    );
}

export default pageSoluctions;
