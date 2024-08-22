'use client';
// UTIL //
import Image from "next/image";
import { useEffect } from "react";
import { Banner } from "flowbite-react";
import { HiArrowRight } from "react-icons/hi";
// import { Card } from "flowbite-react";
import Globals from "@/components/globals";

import CardDestaques from '@/components/cardDestaques';
// import CardInicio from "@/components/cardHome"; 
// UTIL. //

const card_destaques = [
  {
    imgSrc: './destaques/cardInicio1.jpg'
  },
  {
    imgSrc: './destaques/cardInicio2.jpg'
  },
  {
    imgSrc: './destaques/cardInicio3.jpg'
  },
  {
    imgSrc: './destaques/cardInicio4.jpg'
  }
];

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
  }, []);

  return (
    <section className={`${Globals.default_style_page}`}>

      <section>
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-blue-500">BM Informática</h1>

            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Nossos profissionais,
              especialistas em várias áreas
              criam soluções que
              transformam seu dia a dia com sistemas ERP/PAF-ECF/NFC-E Automação Comercial
              Desenvolvimento Desktop, Web e Mobile.
            </p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Get started
              <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Speak to Sales
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex flex-col justify-center items-center">
            <Image
              src={'./bm/bmAL.svg'}
              alt="Logo BMinformatica"
              width={300}
              height={300}
            />

            <h1 className="msg pt-2 text-4xl font-semibold font-sans text-[#0E0E0E]">
              A Melhor Solução Para o Seu Negócio Aqui
            </h1>
          </div>
        </div>
      </section>

      {/* <div className="container mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full">
            <div className="lg:max-w-lg">
              <h1 className="init-hidden text-6xl font-semibold font-sans text-blue-500">
                BM Informática
              </h1>

              <h1 className="init-hidden text-4xl font-semibold font-sans text-[#0E0E0E]">
                Encontre a
                Melhor
                Solução Para o Seu Negócio Aqui.<br className="hidden md:block" />
              </h1>

              <p className="init-hidden mt-3 text-gray-600 font-sans">
                Nossos profissionais,
                especialistas em várias áreas
                criam soluções que
                transformam seu dia a dia com sistemas ERP/PAF-ECF/NFC-E Automação Comercial
                Desenvolvimento Desktop, Web e Mobile.
              </p>
              <div className="pt-5 init-hidden">
                <a href="https://wa.me/5581988049715" target="_blank">
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
                </a>
              </div>
            </div>
          </div>

          <div className="init-hidden md:flex hidden items-center justify-center w-full mt-20 lg:mt-0 lg:w-1/2 pr-1 pl-1">
            <Image
              src={'./bm/BM.svg'}
              alt="Logo BMinformatica"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div> */}

      <section>
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
    </section >
  )
};