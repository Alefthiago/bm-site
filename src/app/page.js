import Image from "next/image";
import Globals from "@/components/globals";

export default function Home() {
  return (
    <section className={`${Globals.default_style_page}`}>
      <div className="w-full lg:flex gap-x-3.5">
        <div className={`w-1/2`}>
          <h1 className={`text-6xl roboto-bold text-[#0E0E0E]`}>
            Encontre a melhor solução para o seu negócio aqui
          </h1>
          <p className={`raleway-medium text-[#316994]`}>
            Nossos profissionais, especialistas em várias áreas, criam soluções que transformam seu dia a dia.
          </p>
        </div>

        <div className={`w-1/2`}>
          <Image
            src={'/BM.png'}
            alt="Logo BMinformatica"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className={`bg-slate-500 w-full h-[40vh] text-center flex-col items-center`}>
        <div className={`w-full h-1/2`}>
          <h3 className={`text-[#208DA5]`}>
            Sistemas ERP/PAF-ECF/NFC-E Automação Comercial Desenvolvimento desktop, web e mobile.
          </h3>
        </div>
    
        <div className={`w-full h-1/2`}>
          <h3 className={`text-[#316994]`}>
            Entre em contato conosco, solicite uma demonstração e faça um orçamento
          </h3>
        </div>
      </div>

      <div>

      </div>
      {/* <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      /> */}
    </section>
  );
}