'use client';
// UTIL //

import { List } from "flowbite-react";
import { HiCheckCircle } from "react-icons/hi";
import Image from "next/image";
import { useEffect } from "react";
import { Banner } from "flowbite-react";
import { HiArrowRight } from "react-icons/hi";
import Globals from "@/components/globals";
import { Carousel } from "flowbite-react";
// import { Card } from "flowbite-react";
// import CardDestaques from '@/components/cardDestaques';
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
      <svg className="absolute top-0 -z-10" viewBox="0 0 2560 1156" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H2560V724L0 1156V0Z" fill="#206BA5" />
      </svg>
      <section>
        <div className="max-w-screen-xl px-4 mx-auto md:flex gap-10">
          <div className="mr-auto place-self-center max-w-screen pb-10">
            <div className="flex mb-2 gap-2">
              <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-blue-500">BM Informática</h1>
            </div>

            <p className="max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              Nossos profissionais,
              especialistas em várias áreas
              criam soluções que
              transformam seu dia a dia com sistemas ERP/PAF-ECF/NFC-E Automação Comercial
              Desenvolvimento Desktop, Web e Mobile.
            </p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 md:mt-2 mt-5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
              Contratar
            </a>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center items-center">
            <svg width="100%" height="402" viewBox="0 0 401 422" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M113.943 124.195C109.746 151.238 82.5379 169.467 53.1719 164.909C70.9506 102.981 3.40226 134.734 7.59919 107.691C11.7961 80.6479 43.0768 43.9967 68.3703 66.9769C60.5424 127.942 118.14 97.1517 113.943 124.195Z" fill="#D67229" />
              <path d="M393.726 285.844C390.097 309.229 362.033 324.288 331.043 319.478C332.432 292.5 278.432 303 279.932 268C281.432 233 316.944 214.089 344.186 234.794C355.432 279 397.356 262.459 393.726 285.844Z" fill="#D67229" />

              <g className="hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer">
                <rect x="55.9317" width="300" height="100" rx="20" fill="#D9D9D9" />
                <text
                  x="205.9317" // Coordenada X centralizada no retângulo (55.9317 + 150)
                  y="50" // Coordenada Y centralizada no retângulo (altura 100 / 2)
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fill="#000"
                  fontSize="16"
                  fontFamily="Arial, sans-serif"
                >
                  Sistemas ERP/PAF-ECF/NFC-E
                </text>
              </g>

              <g className="hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer">
                <path d="M55.9317 167C55.9317 155.954 64.886 147 75.9317 147H335.932C346.977 147 355.932 155.954 355.932 167V227C355.932 238.046 346.977 247 335.932 247H75.9317C64.886 247 55.9317 238.046 55.9317 227V167Z" fill="#D9D9D9" />
                <text
                  x="205.9317" // Coordenada X centralizada no caminho (75.9317 + 150)
                  y="197" // Coordenada Y centralizada no caminho (147 + 50)
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fill="#000"
                  fontSize="16"
                  fontFamily="Arial, sans-serif"
                >
                  Desktop, Web e Mobile
                </text>
              </g>

              <g className="hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer">
                <rect x="55.9317" y="294" width="300" height="100" rx="20" fill="#D9D9D9" />
                <text
                  x="205.9317" // Coordenada X centralizada no retângulo (55.9317 + 150)
                  y="344" // Coordenada Y centralizada no retângulo (294 + 50)
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fill="#000"
                  fontSize="16"
                  fontFamily="Arial, sans-serif"
                >
                  Automação Comercial
                </text>
              </g>

              <defs>
                <filter id="filter0_d_417_272" x="51.9317" y="0" width="308" height="108" filterUnits="userSpaceOnUse">
                  <feFlood result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_417_272" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_417_272" result="shape" />
                </filter>
                <filter id="filter1_d_417_272" x="51.9317" y="294" width="308" height="108" filterUnits="userSpaceOnUse">
                  <feFlood result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_417_272" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_417_272" result="shape" />
                </filter>
                <filter id="filter2_d_417_272" x="51.9317" y="147" width="308" height="108" filterUnits="userSpaceOnUse">
                  <feFlood result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_417_272" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_417_272" result="shape" />
                </filter>
              </defs>
            </svg>

          </div>
        </div>
      </section>

      <div className="h-[400px] w-full pt-5">
        <Carousel slideInterval={3000}>
          <img src="./MacBook Pro 16 inch Right View Mockup (1).png" alt="..." />
          <img src="./MacBook Pro 16 inch Right View Mockup (1).png" alt="..." />
          <img src="./MacBook Pro 16 inch Right View Mockup (1).png" alt="..." />
          <img src="./MacBook Pro 16 inch Right View Mockup (1).png" alt="..." />
          <img src="./MacBook Pro 16 inch Right View Mockup (1).png" alt="..." />
        </Carousel>
      </div>

      <section className="md:block hidden hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer pb-16">
        <div className="max-w-6xl px-6">
          <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full bg-[#206BA5] -z-10 md:h-96 rounded-2xl"></div>
            <div className="w-full p-6 bg-[#206BA5] md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
              <img className="md:block hidden h-34 w-24 md:mx-6 rounded-full shadow-md md:h-[30rem] md:w-80 md:rounded-2xl" src="./bm/bmvdo.gif" alt="client photo" />

              <div className="mt-2 md:mx-6">
                <List className="text-blue-200">
                  <List.Item icon={HiCheckCircle}>Controle de Estoque</List.Item>
                  <List.Item icon={HiCheckCircle}>Totens de Autoatendimento</List.Item>
                  <List.Item icon={HiCheckCircle}>Produção</List.Item>
                  <List.Item icon={HiCheckCircle}>Financeiro</List.Item>
                  <List.Item icon={HiCheckCircle}>Fidelização</List.Item>
                  <List.Item icon={HiCheckCircle}>PDV Móvel</List.Item>
                  <List.Item icon={HiCheckCircle}>Gestão de Comissões</List.Item>
                  <List.Item icon={HiCheckCircle}>Dashboard Intuitivo</List.Item>
                </List>
              </div>
            </div>
          </main>
        </div>
      </section>

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