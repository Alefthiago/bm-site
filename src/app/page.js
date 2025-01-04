'use client';
// UTIL //
import Image from "next/image";
import { useState, useEffect } from "react";
import Globals from "@/components/globals";
import { HiArrowRight } from "react-icons/hi";

import { Carousel } from "flowbite-react";
import CardDestaques from "@/components/cards/cardDestaques";
import CardEmissorFiscal from "@/components/cards/cardEmissorFiscal";
import CardServicos from "@/components/cards/cardServicos";

import { BsCart4 } from "react-icons/bs";
import { PiBreadBold } from "react-icons/pi";
import { FaBarcode } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaTools } from "react-icons/fa";


import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";
// UTIL. //

export default function Inicio() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInterval(() => setIsLoading(false), 500);
  }, []);

  useEffect(() => {
    Globals.observer(setIsLoading);
  }, [isLoading]);

  return (
    <section className={`${Globals.default_style_page}`}>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen absolute">
          <svg width="100" height="100" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-jump animate-infinite animate-duration-1000 animate-delay-500">
            <path d="M157.176 4.55984C79.5307 22.1808 19.2564 84.9109 3.38029 161.347C-0.993846 182.415 -1.14817 221.375 3.06502 241.245C10.7793 277.628 27.6144 309.953 52.6179 336.391C92.9905 379.074 141.732 400.039 200.507 400C230.903 399.98 246.769 397.032 275.348 386.1C333.654 363.791 380.065 310.283 396.073 246.916C401.81 224.199 401.153 174.169 394.81 151.049C384.018 111.697 358.185 72.0998 327.141 47.3241C308.941 32.7981 273.659 12.5151 252.318 6.6706C223.777 -1.14538 179.683 -2.40663 157.176 4.55984ZM243.744 62.4187C263.899 72.2638 279.713 94.441 279.828 113.02C279.874 120.746 280.108 120.958 289.998 122.301C311.701 125.254 331.31 139.137 342.051 159.161C346.225 166.937 347.087 171.922 347.085 188.233C347.078 217.637 345.746 219.507 274.993 289.396C220.561 343.165 213.945 349.001 207.41 349.001C196.947 349.001 187.279 338.919 187.279 328.009C187.279 320.196 190.119 316.976 247.053 260.248C304.483 203.026 306.864 200.32 307.804 191.181C309.049 179.053 302.79 168.503 291.597 163.864C274.801 156.902 273.313 157.941 208.094 222.314C149.468 280.174 148.28 281.194 139.393 281.194C132 281.194 129.306 279.965 124.641 274.463C112.674 260.353 112.809 260.152 177.111 195.983C209.108 164.05 236.391 135.775 237.74 133.148C243.223 122.463 238.829 105.732 228.69 98.6866C223 94.7297 206.817 94.172 199.811 97.6914C197.163 99.0212 168.995 125.794 137.217 157.186C83.2787 210.467 78.9156 214.262 71.5674 214.262C60.7665 214.262 51.9102 205.476 51.9102 194.76C51.9102 187.456 55.8368 183.043 112.429 126.743C145.716 93.6317 176.655 64.6236 181.181 62.2853C201.352 51.8693 222.235 51.9131 243.744 62.4187Z" fill="#206BA5" />
          </svg>
        </div>
      ) : (
        <>
          {/*     EMPRESA.     */}
          <section className="container lg:w-3/5 pt-5">
            <div className="flex flex-col lg:flex-row items-center invisible show-bottom">
              <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg px-2">
                  <h1 className="text-3xl inter-bold lg:text-4xl text-gray-800">
                    A Melhor Solução para o Seu Negocio aqui
                    <br />
                    <span className="text-blue-500">
                      BM INFORMÁTICA
                    </span>
                  </h1>
                  <p className="mt-3 text-gray-600 raleway-regular">
                    Soluções em softwares de gestão
                    <abbr title={`Enterprise Resource Planning - Planejamento dos Recursos da Empresa`}>
                      &nbsp;ERP&nbsp;
                    </abbr>
                    em nuvem e
                    <abbr title={`Ponto de Venda`}>
                      &nbsp;PDV&nbsp;
                    </abbr>
                    para o varejo, além de equipamentos de automação comercial em todo o Brasil, otimize a gestão do seu negócio e aumente sua eficiência!
                  </p>
                  <a href="https://wa.me/558131262050" target="_blank">
                    <button className="inter-regular w-full px-5 py-2 mt-6 text-sm tracking-wider text-[#F8F8F8] uppercase bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none transition-transform duration-500 ease-in-out transform hover:scale-105">
                      Contratar
                    </button>
                  </a>
                </div>
              </div>
              <div className="lg:flex hidden items-center justify-center w-full lg:w-1/2 mt-6 lg:mt-0 hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer">
                <div className="w-full h-full max-w-[200px]">
                  <Image
                    src="./bm/LogoAzul.svg"
                    alt="Logo BM Informática Ltda"
                    layout="responsive"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6 w-full">
              <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full rounded-none">
                <Carousel slideInterval={5000} className="rounded-none">
                  <img src="./destaques/bm1.webp" alt="..." />
                  <img src="./destaques/bm2.webp" alt="..." />
                </Carousel>
              </div>
            </div>

            <CardServicos />

            <section class="pt-5">
              <div class="container py-10 mx-auto">
                <h1 class="text-3xl inter-bold lg:text-4xl font-semibold text-gray-800 capitalize">
                  Sistemas para Automatizar Sua Empresa
                </h1>

                <p class="mt-4 text-gray-500 xl:mt-1 dark:text-gray-300">
                  Atendemos os mais diversos segmentos do mercado, com soluções personalizadas para cada tipo de negócio, conheça nossos produtos e serviços e veja como podemos ajudar a sua empresa a crescer.
                </p>

                {/* <div class="mt-8 xl:mt-12 2xl:flex lg:items-center">
                  <div class="grid w-full grid-cols-1 gap-8 2xl:w-1/2 xl:gap-16 md:grid-cols-2">
                    <div class="space-y-3">
                      <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </span>

                      <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">New Components</h1>

                      <p class="text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                      </p>
                    </div>

                    <div class="space-y-3">
                      <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                        </svg>
                      </span>

                      <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">elegant Dark Mode</h1>

                      <p class="text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                      </p>
                    </div>

                    <div class="space-y-3">
                      <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                        </svg>
                      </span>

                      <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Easy to customiztions</h1>

                      <p class="text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                      </p>
                    </div>

                    <div class="space-y-3">
                      <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </span>

                      <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Simple & clean designs</h1>

                      <p class="text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                      </p>
                    </div>
                  </div>

                  <div class="hidden 2xl:flex 2xl:w-1/2 lg:justify-center">
                    <img class="w-80 h-80 flex-shrink-0 object-cover rounded-full" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                  </div>
                </div> */}

                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                  <div class="space-y-3">
                    <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg> */}
                      <BsCart4 />
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Supermercados</h1>

                    <p class="text-gray-500 dark:text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                    </p>

                    <a href="#" class="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                      <span class="mx-1">read more</span>
                      <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </div>

                  <div class="space-y-3">
                    <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg> */}
                      <PiBreadBold />
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Padarias</h1>

                    <p class="text-gray-500 dark:text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                    </p>

                    <a href="#" class="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                      <span class="mx-1">read more</span>
                      <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </div>

                  <div class="space-y-3">
                    <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg> */}
                      <FaBarcode />
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Varejo e Atacado</h1>

                    <p class="text-gray-500 dark:text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                    </p>

                    <a href="#" class="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                      <span class="mx-1">read more</span>
                      <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </div>

                  <div class="space-y-3">
                    <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                      </svg> */}
                      <MdOutlinePets />
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Pet Shops</h1>

                    <p class="text-gray-500 dark:text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                    </p>

                    <a href="#" class="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                      <span class="mx-1">read more</span>
                      <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </div>

                  <div class="space-y-3">
                    <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                      </svg> */}
                      <IoFastFoodOutline />
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Restaurantes e Lanchonetes</h1>

                    <p class="text-gray-500 dark:text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                    </p>

                    <a href="#" class="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                      <span class="mx-1">read more</span>
                      <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </div>

                  <div class="space-y-3">
                    <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg> */}
                      <FaTools />
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Oficinas</h1>

                    <p class="text-gray-500 dark:text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                    </p>

                    <a href="#" class="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                      <span class="mx-1">read more</span>
                      <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            {/* <CardServicos /> */}
          </section>
          {/*    /EMPRESA.     */}

          {/*   DIVIDER.    */}
          <div className="skew-c"></div>
          {/*  /DIVIDER.    */}

          {/*     DESTAQUES.     */}
          <section className="w-full bg-[#206BA5]">
            <section className="container lg:w-3/5 px-6 mx-auto">
              <h1 class="text-3xl inter-bold lg:text-4xl text-center font-semibold text-[#F8F8F8] capitalize">
                Integrações com as Principais Plataformas e Ferramentas
              </h1>

              <p class="mt-4 text-[#F8F8F8] xl:mt-1 text-center">
                Tenha seu sistema de gestão integrado com aplicativos de delivery e otimize seus processos com as melhores ferramentas do mercado.
              </p>

              <h1 class="pt-10 text-2xl font-semibold text-center text-[#F8F8F8] capitalize lg:text-3xl">
                Principais Integrações
              </h1>

              <div class="grid grid-cols-1 gap-8 mt-3 xl:gap-16 md:grid-cols-2 xl:grid-cols-2 mb-10">
                <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                  <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg> */}
                    <img src="./destaques/ifood.svg" alt="E-commerce" class="w-8 h-8" />
                  </span>

                  <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Ifood</h1>

                  <p class="text-gray-500 dark:text-gray-300">
                    Realiza a integração do seu sistema de gestão com o aplicativo de delivery mais popular do Brasil
                  </p>

                  <a href="#" class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <span class="mx-1">read more</span>
                    <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>

                <div class="flex flex-col items-center ju p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                  <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg> */}
                    <img src="./destaques/Ze_Delivery.svg" alt="E-commerce" class="w-8 h-8" />
                  </span>

                  <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Zé Delivery</h1>

                  <p class="text-gray-500 dark:text-gray-300">
                    Controle suas vendas e estoque de bebidas com o Zé Delivery
                  </p>

                  <a href="#" class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <span class="mx-1">read more</span>
                    <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
              <Timeline>
                <Timeline.Item>
                  <Timeline.Point />
                  <Timeline.Content>
                    <Timeline.Time>February 2022</Timeline.Time>
                    <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
                    <Timeline.Body>
                      Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
                      E-commerce & Marketing pages.
                    </Timeline.Body>
                    <Button color="gray">
                      Learn More
                      <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                  <Timeline.Point />
                  <Timeline.Content>
                    <Timeline.Time>March 2022</Timeline.Time>
                    <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
                    <Timeline.Body>
                      All of the pages and components are first designed in Figma and we keep a parity between the two versions
                      even as we update the project.
                    </Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                  <Timeline.Point />
                  <Timeline.Content>
                    <Timeline.Time>April 2022</Timeline.Time>
                    <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
                    <Timeline.Body>
                      Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                    </Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
              </Timeline>

              {/* <div className="container px-6 py-10 mx-auto">
                <div className="invisible show-bottom">
                  <h1 className="text-2xl text-center inter-bold text-[#F8F8F8] capitalize lg:text-4xl">
                    Faça a Gestão do Seu Negócio com A BM Informática
                  </h1>

                  <div className="flex justify-center mx-auto mt-6">
                    <span className="inline-block w-40 h-1 bg-[#D67229] rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-[#D67229] rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-[#D67229] rounded-full"></span>
                  </div>
                </div>

                <CardDestaques />
              </div> */}

            </section>
          </section>
          {/*    /DESTAQUES.     */}

          {/*   DIVIDER   */}
          <div className="skew-cc"></div>
          {/*  /DIVIDER   */}

          {/*     SERVIÇOS.     */}
          <section className="w-full bg-[#F8F8F8]">
            <section className="container lg:w-3/5 px-6 mx-auto">
              <div className="container px-6 py-10 mx-auto">
                <div className="invisible show-bottom">
                  <h1 className="text-2xl text-center inter-bold text-gray-800 capitalize lg:text-4xl">
                    Emissão Facilitada e Segura de
                    <br />
                    Documentos Fiscais Eletrônicos
                  </h1>

                  <div className="flex justify-center mx-auto mt-6">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                  </div>
                </div>

                <CardEmissorFiscal />
              </div>
            </section>
          </section>
          {/*     SERVIÇOS.     */}

          <section className="container lg:w-3/5 px-6 mx-auto text-center bg-transparent invisible show-top">
            <a
              href="https://www.planalto.gov.br/ccivil_03/Leis/L8078compilado.htm"
              className="ml-0 flex items-center inter-bold text-xl font-medium text-[#206BA5] hover:underline md:inline-flex hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer"
              target="_blank"
            >
              Código de defesa do consumidor
              <HiArrowRight className="ml-2" />
            </a>
          </section>
        </>
      )}
    </section>
  )
};