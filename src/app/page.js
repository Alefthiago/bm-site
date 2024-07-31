// UTIL //
import Image from "next/image";
import Globals from "@/components/globals";
import Contacts from "@/components/contacts";
// UTIL. //

export default function Home() {
  return (
    <section className={`${Globals.default_style_page}`}>
      <section className={`w-full`}> {/* xl:h-[70vh] */}

        <div className={`w-full lg:flex gap-2`}>
          <div className={`l:w-1/2 w-full`}>
            <h1 className={`lg:text-left text-center lg:text-6xl text-4xl roboto-bold text-[#0E0E0E]`}>
              Encontre a
              Melhor
              Solução Para o
              Negócio Aqui
            </h1>
            <p className={`lg:text-left text-center lg:text-2xl text:xl raleway-medium text-[#316994] pt-5`}>
              Nossos profissionais,
              especialistas em várias áreas
              criam soluções que
              transformam seu dia a dia.
            </p>
          </div>

          <div className={`lg:w-1/2 w-full flex items-center justify-center pt-5`}>
            <div>
              <Image
                src={'./BM.png'}
                alt="Logo BMinformatica"
                width={300}
                height={300}
                className="lg:w-[500px] lg:h-[500px]"
              />
            </div>
          </div>
        </div>

        <div className={`w-full h-[250px] text-center lg:text-2xl text-xl raleway-medium flex-col items-center pt-10`}>

          <div className={`w-full`}>
            <h3 className={`text-[#316994]`}>
              Sistemas ERP/PAF-ECF/NFC-E Automação Comercial <br />
              Desenvolvimento Desktop, Web e Mobile.
            </h3>
          </div>

          <div className={`w-full pt-5`}>
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

