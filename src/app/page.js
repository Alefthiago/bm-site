'use client';
// UTIL //
import Image from "next/image";
import { useEffect } from "react";
import { HiArrowRight } from "react-icons/hi";
import Globals from "@/components/globals";
// UTIL. //

const cardSN = [
  {
    imgSrc: './destaques/nf/nfe.svg',
    texto: 'NFe - Nota Fiscal Eletrônica',
    desc: 'Emissão rápida e fácil de notas fiscais eletrônicas, simplificando seu processo de faturamento.',
  },
  {
    imgSrc: './destaques/nf/nfce.svg',
    texto: 'NFCe - Nota Fiscal do Consumidor Eletrônica',
    desc: 'Emitir notas fiscais para consumidores de forma eletrônica, com simplicidade e agilidade.',
  },
  {
    imgSrc: './destaques/nf/cte.svg',
    texto: 'CTe - Conhecimento de Transporte Eletrônico',
    desc: 'Gerencie o transporte de mercadorias com facilidade através da emissão eletrônica de conhecimentos de transporte.',
  },
  {
    imgSrc: './destaques/nf/mdfe.svg',
    texto: 'MDFe - Manifesto Eletrônico de Documentos Fiscais',
    desc: 'Facilite a gestão de documentos fiscais com a emissão eletrônica do manifesto de documentos fiscais.',
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
      <section className="container lg:w-3/5 px-6 mx-auto pb-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full md:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
                A Melhor Solução para o Seu Negocio aqui<br />
                <span className="text-blue-500">BM INFORMATICA</span>
              </h1>
              <p className="mt-3 text-gray-600">
                Nossos profissionais, especialistas em várias áreas criam soluções que transformam seu dia a dia.
              </p>
              <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none transition-transform duration-500 ease-in-out transform hover:scale-105">
                Contratar
              </button>
            </div>
          </div>
          <div className="lg:flex hidden items-center justify-center w-full lg:w-1/2 mt-6 lg:mt-0 hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer">
            <img className="w-full h-full max-w-[200px]" src="./bm/LogoAzul.svg" alt="Logo Bm Informatica" />
          </div>
        </div>
      </section>

      <div className="divider-top w-full bg-[#206BA5]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>

      <section className="w-full bg-[#206BA5]">
        <section className="container lg:w-3/5 px-6 mx-auto">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-semibold text-center text-gray-100 capitalize lg:text-4xl">Automatize <br /><span className="underline decoration-gray-100">Seu Negocio</span></h1>

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-2">
              {cardSN.map((card, index) => (
                <div key={index} className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer">
                  <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg> */}
                    <img src={card.imgSrc} className="w-12 h-12" />
                  </span>

                  <h1 className="text-xl font-semibold text-gray-700 capitalize">{card.texto}</h1>

                  <p className="text-gray-500">{card.desc}</p>

                  {/* <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <span className="mx-1">read more</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a> */}
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      <div className="divider-bottom bg-[#206BA5]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>

      <section className="container lg:w-3/5 px-6 mx-auto text-center">
        <a
          href="https://www.planalto.gov.br/ccivil_03/Leis/L8078compilado.htm"
          className="ml-0 flex items-center text-2xl font-medium text-cyan-600 hover:underline md:inline-flex hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer"
          target="_blank"
        >
          Código de defesa do consumidor
          <HiArrowRight className="ml-2" />
        </a>
      </section>
    </section>

  )
};