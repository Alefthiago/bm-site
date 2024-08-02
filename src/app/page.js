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
<header class="bg-white dark:bg-gray-900">
    <nav x-data="{ isOpen: false }" class="relative bg-white dark:bg-gray-900">
        <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div class="flex items-center justify-between">
                <a href="#">
                    <img class="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="">
                </a>
    
                <!-- Mobile menu button -->
                <div class="flex md:hidden">
                    <button x-cloak @click="isOpen = !isOpen" type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                        </svg>

                        <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
    
            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <div x-cloak :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']" class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                <div class="flex flex-col md:flex-row md:mx-6">
                    <a class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Home</a>
                    <a class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Shop</a>
                    <a class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Contact</a>
                    <a class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">About</a>
                </div>
    
                <div class="flex justify-center md:block">
                    <a class="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
    
                        <span class="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
                <div class="lg:max-w-lg">
                    <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Best place to choose <br> your <span class="text-blue-500 ">clothes</span></h1>
                    
                    <p class="mt-3 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                    
                    <button class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Shop Now</button>
                </div>
            </div>

            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img class="w-full h-full lg:max-w-3xl" src="https://merakiui.com/images/components/Catalogue-pana.svg" alt="Catalogue-pana.svg">
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

