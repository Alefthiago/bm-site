// UTIL //
import Image from "next/image";
import Globals from "@/components/globals";
import Contacts from "@/components/contacts";
// UTIL. //

export default function Home() {
  return (
    <section className={`${Globals.default_style_page}`}>
      
      <section className={`w-full gap-10`}> {/* xl:h-[70vh] */}
        <div className="w-full lg:flex gap-x-3.5">
          <div className={`lg:w-1/2 w-full`}>
            <h1 className={`lg:text-left text-center lg:text-6xl text-5xl roboto-bold text-[#0E0E0E]`}>
              Encontre a
              Melhor
              Solução Para o
              Negócio Aqui
            </h1>
            <p className={`lg:text-left text-center raleway-medium text-[#316994] text-2xl`}>
              Nossos profissionais,
              especialistas em várias áreas
              criam soluções que
              transformam seu dia a dia.
            </p>
          </div>

          <div className={`lg:w-1/2 w-full flex items-center justify-center`}>
            <div>
              <Image
                src={'/BM.png'}
                alt="Logo BMinformatica"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        <div className={`w-full h-[250px] text-center flex-col items-center raleway-medium text-2xl pt-20`}>
          <div className={`w-full h-4/6`}>
            <h3 className={`text-[#316994]`}>
              Sistemas ERP/PAF-ECF/NFC-E Automação Comercial <br />
              Desenvolvimento Desktop, Web e Mobile.
            </h3>
          </div>

          <div className={`w-full`}>
            <h3 className={`text-[#208DA5]`}>
              Entre em contato conosco, solicite uma demonstração e faça um orçamento
            </h3>
          </div>
        </div>
      </section>

      <section className={`w-full`}>
        <Contacts/>
        {/* <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
        /> */}
      </section>
    </section>
  )
};

