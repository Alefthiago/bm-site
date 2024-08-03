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


import { Carousel } from "flowbite-react";

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
      threshold: [0] // Trigger when any part of the element appears
    });

    // Select all elements with the class 'init-hidden' and observe them
    Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
      observer.observe(element);
    });
    // obeserver.observe(document.querySelector('.init-hidden'));


    // if(typeof document !== 'undefined' && typeof window !== 'undefined') {   
    // }
  }, []);
  return (
    <section className={`${Globals.default_style_page}`}>
      <div className="container mx-auto">
        <div className="init-hidden md:hidden flex items-center justify-center w-full mb-20 lg:mt-0 lg:w-1/2 pr-1 pl-1">
          <Image
            src={'./BM.svg'}
            alt="Logo BMinformatica"
            width={800}
            height={800}
          />
          {/* <img className="w-full h-full lg:max-w-3xl" src="https://merakiui.com/images/components/Catalogue-pana.svg" alt="Catalogue-pana.svg"> */}
        </div>
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="init-hidden md:text-4xl text-4xl font-semibold text-gray-800 dark:text-white">
                Encontre a
                Melhor
                Solução <br />Para
                <span className="text-blue-500 "> o Seu Negócio Aqui</span>
              </h1>

              <p className="init-hidden mt-3 text-gray-600 dark:text-gray-400">
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

              {/* <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Shop Now</button> */}
            </div>
          </div>

          <div className="init-hidden md:flex hidden items-center justify-center w-full mt-20 lg:mt-0 lg:w-1/2 pr-1 pl-1">
            <Image
              src={'./BM.svg'}
              alt="Logo BMinformatica"
              width={800}
              height={800}
            />
            {/* <img className="w-full h-full lg:max-w-3xl" src="https://merakiui.com/images/components/Catalogue-pana.svg" alt="Catalogue-pana.svg"> */}
          </div>
        </div>
      </div>
      <section className={`pt-40 grid md:grid-cols-3 grid-cols-1 md:gap-20 gap-5`}>
        {/* <Contacts /> */}
        <Card
          className="max-w-sm init-hidden"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="./cardInicio1.jpg"
        >
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-lg bg-[#206BA5] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
          >
            Contratar
          </button>
        </Card>
        <Card
          className="max-w-sm init-hidden "
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="./cardInicio2.jpg"
        >
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-lg bg-[#206BA5] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
          >
            Contratar
          </button>
        </Card>
        <Card
          className="max-w-sm init-hidden "
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="./cardInicio3.jpg"
        >
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-lg bg-[#206BA5] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
          >
            Contratar
          </button>
        </Card>
        <Card
          className="max-w-sm init-hidden md:col-start-2 col-start-1"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="./cardInicio4.jpg"
        >
          <button
            type="button"
            className="bg-[#206BA5] inline-flex w-full justify-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
          >
            Contratar
          </button>
          {/* <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p> */}
        </Card>

        {/* <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
        /> */}
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
                        className="ml-0 flex items-center md:text-xl text-[18px] font-medium text-[#D67229] hover:underline md:ml-1 md:inline-flex"
                      >
                        Código de Defesa do Consumidor
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
      </section >
    </section >
  )
};

