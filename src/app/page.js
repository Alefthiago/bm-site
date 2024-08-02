'use client';
// UTIL //
import Image from "next/image";
import Globals from "@/components/globals";
import Contacts from "@/components/contacts";
import { useEffect } from "react";
// UTIL. //

export default function Home() {
  useEffect(() => {
    const obeserver = new IntersectionObserver((e) => {
      // console.log(e)
      Array.from(e).forEach((elemento) => {
        if(elemento.intersectionRatio >= 1) {
          elemento.target.classList.add('init-hidden-off');
        }
      });
    }, {
      threshold: 1
    });

    // Array.from(document.querySelectorAll('fade-in'));
    Array.from(document.querySelectorAll('.init-hidden')).forEach(elemento => {
      obeserver.observe(elemento);
    });
    // obeserver.observe(document.querySelector('.init-hidden'));


    // if(typeof document !== 'undefined' && typeof window !== 'undefined') {   
    // }
  }, []);
  return (
    <section className={`${Globals.default_style_page}`}>
      <section> {/* xl:h-[70vh] */}
        <div className={`init-hidden`}>
          <div>
            <h1 className={`text-center md:text-6xl text-4xl roboto-bold text-[#0E0E0E]`}>
              Encontre a
              Melhor
              Solução Para o
              Negócio Aqui
            </h1>
            <div className={`pl-10 pr-10`}>
              <p className={`text-center md:text-2xl text-[18px] raleway-medium text-[#316994] pt-5`}>
                Nossos profissionais,
                especialistas em várias áreas
                criam soluções que
                transformam seu dia a dia.
              </p>
            </div>
          </div>

          <div className={`md:m-w-[500px] md:m-h-[300px] w-full flex items-center justify-center md:pt-24 pt-10 pr-2 pl-2`}>
            <div>
              <Image
                src={'./BM.svg'}
                alt="Logo BMinformatica"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>

        <div className={`w-full h-[250px] text-center md:text-2xl text-[18px] raleway-medium flex-col items-center md:pt-32 pt-20`}>
          <div className={`init-hidden w-full`}>
            <h3 className={`text-[#316994]`}>
              Sistemas ERP/PAF-ECF/NFC-E Automação Comercial <br />
              Desenvolvimento Desktop, Web e Mobile.
            </h3>
          </div>

          <div className={`init-hidden w-full pt-5`}>
            <h3 className={`text-[#208DA5]`}>
              Entre em contato conosco, solicite uma demonstração e faça um orçamento
            </h3>
          </div>
        </div>
      </section>

      <section className={`init-hidden w-full md:pt-32 pt-20`}>
        <Contacts />
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

