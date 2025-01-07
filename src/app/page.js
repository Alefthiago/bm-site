'use client';
// UTIL //
import Image from "next/image";
import { useState, useEffect } from "react";
import Globals from "@/components/globals";
import { HiArrowRight } from "react-icons/hi";

import CardEmissorFiscal from "@/components/cards/cardEmissorFiscal";
import Carousel from "@/components/carousel";

import { List, ListItem } from "flowbite-react";
import { HiCheckCircle } from "react-icons/hi";
import CardSolucoes from "@/components/cards/cardSegmentos";
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
          {/*     INICIAL.     */}
          <section className="container lg:w-3/5 p-5">
            <div className="container mx-auto md:text-center invisible show-bottom">
              <div className="mx-auto ">
                <h1 className="text-4xl font-extrabold lg:text-5xl 2xl:text-6xl">
                  <span className="text-transparent bg-gradient-to-br bg-clip-text from-[#206BA5] via-[#3A8CC1] to-[#67AEE6]">
                    Sistemas para Automatizar Sua Empresa
                  </span>
                </h1>

                <p className="mt-4 text-gray-500 xl:mt-1 text-xl">
                  Atendemos os mais diversos segmentos do mercado, conheça nossos produtos e serviços e veja como podemos ajudar a sua empresa a crescer
                </p>

                <a href="https://wa.me/558131262050?text=Olá%2C%20gostaria%20de%20solicitar%20uma%20demonstração.%20Poderia%20me%20ajudar%3F" target="_blank">
                  <button className="hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                    Solicite uma Demonstração
                  </button>
                </a>

                <p className="mt-3 text-sm text-gray-400 ">
                  Sem custo
                </p>
              </div>
            </div>
          </section>
          <Carousel />
          {/*     INICIAL.     */}

          <div className="skew-c"></div>

          {/*   SEGMENTOS.    */}
          <section className="w-full bg-[#206BA5]">
            <div className="flex flex-col items-center">
              <div className="container lg:w-3/5 p-5 invisible show-bottom">
                <div className="md:text-center ">
                  <h1 className="text-4xl font-extrabold lg:text-5xl 2xl:text-6xl">
                    <span className="text-transparent bg-gradient-to-br bg-clip-text from-[#F8F8F8] via-[#ebebeb] to-[#F8F8F8]">
                      Principais Segmentos
                    </span>
                  </h1>

                  <p className="mt-3 text-zinc-200 text-xl">
                    Nossos sistemas são desenvolvidos para atender as necessidades de diversos segmentos do mercado
                  </p>
                </div>
              </div>
              <CardSolucoes />
            </div>
          </section>
          {/*  /SEGMENTOS.    */}

          <div className="skew-cc"></div>

          {/*   DESTAQUES.    */}
          <section className="container lg:w-3/5 p-5 invisible show-bottom">
            <div className="container flex flex-col items-center py-12 mx-auto md:text-center ">
              <h1 className="text-4xl font-extrabold lg:text-5xl 2xl:text-6xl ">
                <span className="text-transparent bg-gradient-to-br bg-clip-text from-[#206BA5] via-[#3A8CC1] to-[#67AEE6]">
                  Soluções completas de
                  <abbr title={`Enterprise Resource Planning - Planejamento dos Recursos da Empresa`}>
                    &nbsp;ERP&nbsp;
                  </abbr>
                  e
                  <abbr title={`Ponto de Venda`}>
                    &nbsp;PDV&nbsp;
                  </abbr>
                  para inovar na gestão do seu negócio
                </span>
              </h1>
            </div>
          </section>
          {/*  /DESTAQUES.    */}

          <div className="skew-c"></div>

          {/*     INTEGRACOES.     */}
          <section className="w-full bg-[#206BA5]">
            <section className="container lg:w-3/5 p-5 mx-auto invisible show-bottom">
              <div>
                <h1 className="text-4xl font-extrabold md:text-center lg:text-5xl 2xl:text-6xl">
                  <span className="text-transparent bg-gradient-to-br bg-clip-text from-[#ebebeb] via-[#F8F8F8] to-[#ebebeb]">
                    Integrado com os principais aplicativos e equipamentos do mercado
                  </span>
                </h1>

                <h1 className="pt-10 text-2xl font-semibold md:text-center text-[#F8F8F8] capitalize lg:text-3xl">
                  Principais Aplicativos
                </h1>
              </div>

              <div className="grid grid-cols-1 gap-8 mt-3 xl:gap-16 md:grid-cols-2 xl:grid-cols-2 mb-10">
                <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer">
                  <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
                    <Image
                      src="./destaques/IFood_logo.png"
                      alt="Ifood Logo"
                      width={32}
                      height={32}
                    />
                  </span>

                  <h1 className="text-2xl font-semibold text-gray-700 capitalize">Ifood</h1>

                  <p className="text-gray-500 text-xl">
                    Realiza a integração do seu sistema de gestão com o aplicativo de delivery mais popular do Brasil
                  </p>

                  <a
                    href="https://wa.me/558131262050?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20a%20integração%20com%20o%20Ifood."
                    target="_blank"
                    className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600"
                  >
                    <span className="mx-1">saiba mais</span>
                    <svg
                      className="w-4 h-4 mx-1 rtl:-scale-x-100"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>

                <div className="flex flex-col items-center ju p-6 space-y-3 text-center bg-gray-100 rounded-xl hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer">
                  <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
                    <Image
                      src="./destaques/anotaai_logo.png"
                      alt="AnotaAi"
                      width={32}
                      height={32}
                    />
                  </span>

                  <h1 className="text-2xl font-semibold text-gray-700 capitalize ">AnotaAi</h1>

                  <p className="text-gray-500 text-xl">
                    integração com o aplicativo de delivery AnotaAi, para facilitar a gestão de pedidos e entregas
                  </p>

                  <a
                    href="https://wa.me/558131262050?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20o%20controle%20de%20vendas%20e%20estoque%20no%20Zé%20AnotaAi."
                    target="_blank"
                    className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600"
                  >
                    <span className="mx-1">saiba mais</span>
                    <svg
                      className="w-4 h-4 mx-1 rtl:-scale-x-100"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <h1 className="text-2xl font-semibold md:text-center text-[#F8F8F8] capitalize lg:text-3xl ">
                Principais Equipamentos
              </h1>

              <List className=" w-full flex flex-col md:items-center mt-3">
                <ListItem icon={HiCheckCircle} className="text-zinc-200 text-xl">Impressora de Etiquetas de Código de Barras</ListItem>
                <ListItem icon={HiCheckCircle} className="text-zinc-200 text-xl">Leitores de Código de Barras</ListItem>
                <ListItem icon={HiCheckCircle} className="text-zinc-200 text-xl">Balanças Eletrônicas</ListItem>
                <ListItem icon={HiCheckCircle} className="text-zinc-200 text-xl">Gavetas de Dinheiro</ListItem>
                <ListItem icon={HiCheckCircle} className="text-zinc-200 text-xl">Mini Impressoras</ListItem>
                <ListItem icon={HiCheckCircle} className="text-zinc-200 text-xl">TEF / Pin-Pads</ListItem>
                <ListItem icon={HiCheckCircle} className="text-zinc-200 text-xl">Smart PCs</ListItem>
              </List>
            </section>
          </section>
          {/*    /INTEGRACOES.     */}

          <div className="skew-cc"></div>

          {/*     SERVIÇOS.     */}
          <section className="container lg:w-3/5 p-5">
            <div className=" md:text-center invisible show-bottom">
              <h1 className="text-4xl font-extrabold lg:text-5xl 2xl:text-6xl">
                <span className="text-transparent bg-gradient-to-br bg-clip-text from-[#206BA5] via-[#3A8CC1] to-[#67AEE6]">
                  Emissão Facilitada e Segura de
                </span>
                <br />
                <span className="text-transparent bg-gradient-to-tr bg-clip-text from-[#206BA5] via-[#3A8CC1] to-[#67AEE6]">
                  Documentos Fiscais Eletrônicos
                </span>
              </h1>
            </div>
            <CardEmissorFiscal />
          </section>
          {/*     SERVIÇOS.     */}

          <section className="container lg:w-3/5 px-6 mb-5 mx-auto text-center bg-transparent">
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
      )
      }
    </section >
  )
};