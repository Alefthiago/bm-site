'use client';
// UTIL //
import Image from "next/image";
import Globals from "@/components/globals";
import { useEffect } from "react";
import { Banner } from "flowbite-react";
import { HiArrowRight, HiX } from "react-icons/hi";
import { Card } from "flowbite-react";
// UTIL. //

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('init-hidden-off');
        }
      });
    }, {
      threshold: [0]
    });

    Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
      observer.observe(element);
    });
    // if(typeof document !== 'undefined' && typeof window !== 'undefined') {   
    // }
  }, []);

  return (
    <section className={`${Globals.default_style_page}`}>
      <div className="container mx-auto">
        {/* <div className="init-hidden md:hidden flex items-center justify-center w-full md:mb-20 mb-10 lg:mt-0 lg:w-1/2 pr-1 pl-1">
          <Image
            src={'./BM.svg'}
            alt="Logo BMinformatica"
            width={800}
            height={800}
          />
        </div> */}
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="init-hidden text-4xl font-semibold font-sans text-[#0E0E0E]">
                Encontre a
                Melhor
                Solução <br className="hidden md:block"/>Para
                <span className="text-blue-500"> o Seu Negócio Aqui</span>
              </h1>

              <p className="init-hidden mt-3 text-gray-600 font-sans">
                Nossos profissionais,
                especialistas em várias áreas
                criam soluções que
                transformam seu dia a dia com sistemas ERP/PAF-ECF/NFC-E Automação Comercial
                Desenvolvimento Desktop, Web e Mobile.
              </p>
              <div className="pt-5 init-hidden">
                <button className={`button`}>
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <svg
                        className={"text-[#F8F8F8]"}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="30"
                        height="30"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className={`font-mono text-[#F8F8F8]`}>Contratar</span>
                </button>
              </div>
            </div>
          </div>

          <div className="init-hidden md:flex hidden items-center justify-center w-full mt-20 lg:mt-0 lg:w-1/2 pr-1 pl-1">
            <Image
              src={'./BM.svg'}
              alt="Logo BMinformatica"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full gap-5 init-hidden md:pt-40 pt-20">
        <div className={`lg:h-[5px] h-[3px] w-[100%] bg-[#A55820] rounded-[7px] mt-4`}></div>
        <div className="lg:w-[40%] w-[60%] text-center">
          <h1 className={`font-mono text-4xl font-semibold`}>Destaques</h1>
        </div>
        <div className={`lg:h-[5px] h-[3px] w-[100%] bg-[#A55820] rounded-[7px] mt-4`}></div>
      </div>
      <section className={`grid md:grid-cols-3 grid-cols-1 md:gap-20 gap-5 pt-20`}>
        {/* <Contacts /> */}
        <Card
          className="max-w-sm font-mono init-hidden"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="./cardInicio1.jpg"
        >
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-lg bg-[#D67229] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200"
          >
            Contratar
          </button>
        </Card>
        <Card
          className="max-w-sm font-mono init-hidden "
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="./cardInicio2.jpg"
        >
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-lg bg-[#D67229] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200"
          >
            Contratar
          </button>
        </Card>
        <Card
          className="max-w-sm font-mono init-hidden "
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="./cardInicio3.jpg"
        >
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-lg bg-[#D67229] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200"
          >
            Contratar
          </button>
        </Card>
      </section>
      <div className="flex flex-row pt-12 w-full gap-5 init-hidden pt-20">
        <div className={`lg:h-[5px] h-[3px] w-[100%] bg-[#A55820] rounded-[7px] mt-4`}></div>
        <div className="lg:w-[40%] w-[60%] text-center">
          <h1 className={`font-mono text-4xl font-semibold`}>Mensões</h1>
        </div>
        <div className={`lg:h-[5px] h-[3px] w-[100%] bg-[#A55820] rounded-[7px] mt-4`}></div>
      </div>
      <section className={`grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-5 pt-20`}>
        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <Image
            className="object-cover w-full h-64"
            src="./cardInicioM1.jpg"
            alt="avatar"
            // layout="responsive"
            width={500}
            height={224}
          />

          <div className="py-5 text-center">
            <a href="#" className="block text-xl font-bold text-gray-800 font-mono" role="link">10º Prêmio Mariores e Melhores Fornecedores</a>
            <span className="text-sm text-gray-700 font-sans">Categoria - Lançamentos do Ano Solução Completa para Padaria</span>
          </div>
        </div>
        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <Image
            className="object-cover w-full h-64"
            src="./cardInicioM2.jpg"
            alt="avatar"
            // layout="responsive"
            width={500}
            height={224}
          />

          <div className="py-5 text-center">
            <a href="#" className="block text-xl font-bold text-gray-800 font-mono" role="link">10º Prêmio Mariores e Melhores Fornecedores</a>
            <span className="text-sm text-gray-700 font-sans">Categoria - Soluções & Serviços</span>
          </div>
        </div>
      </section>
      <section> {/* xl:h-[70vh] */}
        <div className={`w-full md:text-center text-left md:text-2xl text-[18px] raleway-medium flex-col items-center md:pt-32 pt-20`}>
          <div className={`init-hidden w-full`}>
            <Banner>
              <div className="flex w-full justify-between">
                <div className="mx-auto flex items-center">
                  <p className="flex items-center md:text-xl text-[18px] font-normal raleway-medium">
                    <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full p-1">
                    </span>
                    <span className="[&_p]:inline">
                      <a
                        href="https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm"
                        target="_blank"
                        className="ml-0 flex items-center md:text-xl text-[18px] font-medium text-[#D67229] hover:underline md:ml-1 md:inline-flex font-sans"
                      >
                        Código de Defesa do Consumidor
                        <HiArrowRight className="ml-2" />
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </Banner>
          </div>
        </div>
      </section>
    </section>
  )
};