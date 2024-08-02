'use client';
// UTIL //
import Image from "next/image";
import Globals from "@/components/globals";
import Contacts from "@/components/contacts";
import { useEffect } from "react";
import { Button } from "flowbite-react";

import { Banner } from "flowbite-react";
import { HiArrowRight, HiX } from "react-icons/hi";
import { MdPercent } from "react-icons/md";
// UTIL. //

export default function Home() {
  useEffect(() => {
    const obeserver = new IntersectionObserver((e) => {
      // console.log(e)
      Array.from(e).forEach((elemento) => {
        if (elemento.intersectionRatio >= 1) {
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
<header className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Best place to choose <br> your <span className="text-blue-500 ">clothes</span></h1>
                    
                    <p className="mt-3 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                    
                    <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Shop Now</button>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img className="w-full h-full lg:max-w-3xl" src="https://merakiui.com/images/components/Catalogue-pana.svg" alt="Catalogue-pana.svg">
            </div>
        </div>
    </div>
</header>
  
      <section> {/* xl:h-[70vh] */}
        <div className={`init-hidden`}>
          <div>
            <h1 className={`md:text-center text-left md:text-6xl text-4xl roboto-bold text-[#0E0E0E]`}>
              Encontre a
              Melhor
              Solução Para o
              Negócio Aqui
            </h1>
            
            <div className={`md:pl-10 md:pr-10`}>
              <p className={`md:text-center text-left md:text-2xl text-[18px] raleway-medium text-[#316994] pt-5`}>
                Nossos profissionais,
                especialistas em várias áreas
                criam soluções que
                transformam seu dia a dia.
              </p>
            </div>

            <div className={`init-hidden w-full`}>
              <h3 className={`md:text-center text-left md:text-2xl text-[18px] raleway-medium text-[#316994] pt-5`}>
                Sistemas ERP/PAF-ECF/NFC-E Automação Comercial
                Desenvolvimento Desktop, Web e Mobile.
              </h3>
            </div>

            <div className={`w-full flex justify-center pt-8`}>
              <div>
                <button className={`button`}>
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <svg
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
                  <span className={`roboto-medium`}>Contratar</span>
                </button>
              </div>
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

        <div className={`w-full h-[250px] md:text-center text-left md:text-2xl text-[18px] raleway-medium flex-col items-center md:pt-32 pt-20`}>
          <div className={`init-hidden w-full`}>
            <Banner>
              <div className="flex w-full justify-between">
                <div className="mx-auto flex items-center">
                  <p className="flex items-center md:text-xl text-[18px] font-normal raleway-medium">
                    <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full p-1">
                    </span>
                    <span className="[&_p]:inline">
                      Entre em contato conosco,&nbsp;
                      <a
                        href="https://wa.me/558131262050"
                        target="_blank"
                        className="ml-0 flex items-center md:text-xl text-[18px] font-medium text-[#D67229] hover:underline md:ml-1 md:inline-flex"
                      >
                        solicite uma demonstração e faça um orçamento
                        <HiArrowRight className="ml-2" />
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </Banner>
            {/* <h3 className={`text-[#208DA5]`}>
              Entre em contato conosco, solicite uma demonstração e faça um orçamento
            </h3> */}
          </div>
        </div>
      </section>

      <section className={`init-hidden w-full md:pt-30 pt-20`}>
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

