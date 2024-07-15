import Image from "next/image";
import Globals from "@/components/globals";

export default function Home() {
  return (
    <section className={`${Globals.default_style_page}`}>
      <div className="w-full lg:flex gap-x-3.5">
        <div className={`w-1/2`}>
          <h1 className={`text-6xl roboto-bold text-[#0E0E0E]`}>
            Encontre a
            melhor
            solução para o
            negócio aqui
          </h1>
          <p className={`raleway-medium text-[#316994] mt-4`}>
            Nossos profissionais,
            especialistas em várias áreas
            criam soluções que
            transformam seu dia a dia.
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

      <div className={`w-full h-[200px] text-center flex-col items-center mt-[100px]`}>
        <div className={`w-full h-4/6`}>
          <h3 className={`text-[#208DA5]`}>
            Sistemas ERP/PAF-ECF/NFC-E Automação Comercial <br />
            Desenvolvimento desktop, web e mobile.
          </h3>
        </div>

        <div className={`w-full`}>
          <h3 className={`text-[#316994]`}>
            Entre em contato conosco, solicite uma demonstração e faça um orçamento
          </h3>
        </div>
      </div>

      <div className={`w-full mt-[100px] flex items-center gap-5`}>
        <div className={`lg:h-[10px] h-[8px] w-[60%] bg-[#A55820] rounded-[7px]`}></div>
        <div className="w-[40%] text-center">
          <h1 className={`lg:text-3xl text-3xl roboto roboto-bold`}>Contatos</h1>
        </div>
        <div className={`lg:h-[10px] h-[8px] w-[60%] bg-[#A55820] rounded-[7px]`}></div>
      </div>

      <div className={'w-full mt-[30px] grid grid-cols-2 gap-4 place-content-center text-center text-[#316994] roboto-bold'}>
        <div>
          Pernambuco <br/>
          (81) 3126-2050
        </div>
        <div>
          Alagoas <br/>
          (82) 3142-0562
        </div>
        <div>
          Paraíba <br/>
          (83) 3142-0415
        </div>
        <div>
          São Paulo <br/>
          (11) 2626-1337
        </div>
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