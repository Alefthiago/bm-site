'use client';
// UTIL //
import Image from "next/image";
import { useState, useEffect } from "react";
import Globals from "@/components/globals";

import { HiArrowRight } from "react-icons/hi";
import { MdOutlineCloudDone } from "react-icons/md";
// import { Card, Button } from "flowbite-react";
// UTIL. //

const cardSN = [
  {
    imgSrc: './destaques/nf/nfe.svg',
    alt: 'Logo NFe',
    texto: 'NFe',
    abbr: 'Nota Fiscal Eletrônica',
    desc: 'Emissão rápida e fácil de notas fiscais eletrônicas, simplificando seu processo de faturamento.',
  },
  {
    imgSrc: './destaques/nf/nfce.svg',
    alt: 'Logo NFCe',
    texto: 'NFCe',
    abbr: 'Nota Fiscal do Consumidor Eletrônica',
    desc: 'Emitir notas fiscais para consumidores de forma eletrônica, com simplicidade e agilidade.',
  },
  {
    imgSrc: './destaques/nf/cte.svg',
    alt: 'Logo CTe',
    texto: 'CTe',
    abbr: 'Conhecimento de Transporte Eletrônico',
    desc: 'Gerencie o transporte de mercadorias com facilidade através da emissão eletrônica de conhecimentos de transporte.',
  },
  {
    imgSrc: './destaques/nf/mdfe.svg',
    alt: 'Logo MDFe',
    texto: 'MDFe',
    abbr: 'Manifesto Eletrônico de Documentos Fiscais',
    desc: 'Facilite a gestão de documentos fiscais com a emissão eletrônica do manifesto de documentos fiscais.',
  }
];

const cardDt = [
  {
    imgSrc: './destaques/bm1.png',
    texto: 'Solicite uma Demosntração',
  },
  {
    imgSrc: './destaques/bm2.png',
    texto: 'Faça um Orçamento',
  }
];

export default function Home() {
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
          <section className="container lg:w-3/5 pb-10">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg px-2">
                  <h1 className="text-3xl inter-bold lg:text-4xl">
                    A Melhor Solução para o Seu Negocio aqui<br />
                    <span className="text-blue-500">BM INFORMÁTICA</span>
                  </h1>
                  <p className="mt-3 text-gray-600 raleway-regular">
                    Nossos profissionais, especialistas em várias áreas criam soluções que transformam seu dia a dia.
                  </p>
                  <button className="inter-regular w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none transition-transform duration-500 ease-in-out transform hover:scale-105">
                    Contratar
                  </button>
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

            <section>
              <div className="container px-6 py-12 mx-auto ">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <div className="hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer invisible show-right">
                    <svg className="w-8 h-8" viewBox="0 0 30 30" fill="none">
                      <path d="M27.3633 7.08984H26.4844V6.21094C26.4844 4.75705 25.3015 3.57422 23.8477 3.57422H4.39453C2.94064 3.57422 1.75781 4.75705 1.75781 6.21094V21.1523H0.878906C0.393516 21.1523 0 21.5459 0 22.0312V23.7891C0 25.2429 1.18283 26.4258 2.63672 26.4258H27.3633C28.8172 26.4258 30 25.2429 30 23.7891V9.72656C30 8.27268 28.8172 7.08984 27.3633 7.08984ZM3.51562 6.21094C3.51562 5.72631 3.9099 5.33203 4.39453 5.33203H23.8477C24.3323 5.33203 24.7266 5.72631 24.7266 6.21094V7.08984H20.332C18.8781 7.08984 17.6953 8.27268 17.6953 9.72656V21.1523H3.51562V6.21094ZM1.75781 23.7891V22.9102H17.6953V23.7891C17.6953 24.0971 17.7489 24.3929 17.8465 24.668H2.63672C2.15209 24.668 1.75781 24.2737 1.75781 23.7891ZM28.2422 23.7891C28.2422 24.2737 27.8479 24.668 27.3633 24.668H20.332C19.8474 24.668 19.4531 24.2737 19.4531 23.7891V9.72656C19.4531 9.24193 19.8474 8.84766 20.332 8.84766H27.3633C27.8479 8.84766 28.2422 9.24193 28.2422 9.72656V23.7891Z" fill="#2D3748" /><path d="M24.7266 21.1523H22.9688C22.4834 21.1523 22.0898 21.5459 22.0898 22.0312C22.0898 22.5166 22.4834 22.9102 22.9688 22.9102H24.7266C25.212 22.9102 25.6055 22.5166 25.6055 22.0312C25.6055 21.5459 25.212 21.1523 24.7266 21.1523Z" fill="#4299E1" /><path d="M23.8477 12.3633C24.3331 12.3633 24.7266 11.9698 24.7266 11.4844C24.7266 10.999 24.3331 10.6055 23.8477 10.6055C23.3622 10.6055 22.9688 10.999 22.9688 11.4844C22.9688 11.9698 23.3622 12.3633 23.8477 12.3633Z" fill="#4299E1" />
                    </svg>

                    <h1 className="mt-4 text-xl inter-bold">Aplicativos Mobile e Desktop</h1>

                    <p className="mt-2 text-gray-500 raleway-regular">Programas desenvolvidos para realizar tarefas específicas em smartphones, tablets e computadores. Eles são projetados para serem fáceis de usar e adaptar às necessidades dos usuários.</p>
                  </div>

                  <div className="hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer invisible show-top">
                    <div className="w-8 h-8">
                      <MdOutlineCloudDone className="w-8 h-8" />
                    </div>

                    <h1 className="mt-4 text-xl inter-bold">Computação em Nuvem</h1>

                    <p className="mt-2 text-gray-500 raleway-regular">A computação em nuvem, ou cloud computing, permite acessar aplicativos e dados pela internet de qualquer lugar e em qualquer dispositivo, da mesma forma que se estivessem instalados no seu computador local. Em vez de armazenar tudo no seu próprio hardware, você usa recursos e serviços disponíveis online.</p>
                  </div>

                  <div className="hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer invisible show-left">
                    <svg className="w-8 h-8" viewBox="0 0 30 30" fill="none">
                      <g><path d="M26.599 4.339a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zM7.151 25.661a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zM23.486 13.163a8.636 8.636 0 00-1.19-2.873l1.123-1.123-2.592-2.59L19.705 7.7a8.636 8.636 0 00-2.873-1.19V4.921h-3.664v1.586a8.634 8.634 0 00-2.873 1.19l-1.122-1.12-2.592 2.589 1.123 1.123a8.636 8.636 0 00-1.19 2.873H4.922l-.002 3.663h1.592A8.626 8.626 0 007.704 19.7l-1.127 1.127 2.59 2.591 1.128-1.127a8.623 8.623 0 002.873 1.19v1.597h3.664v-1.597a8.628 8.628 0 002.873-1.19l1.128 1.128 2.59-2.592-1.127-1.127a8.627 8.627 0 001.19-2.873h1.593v-3.664h-1.593zM15 19.256a4.255 4.255 0 110-8.511 4.255 4.255 0 010 8.51z" fill="#4299E1" /><path d="M5.276 23.2c-.42 0-.823.105-1.182.302A13.853 13.853 0 011.172 15C1.172 7.375 7.375 1.172 15 1.172c.927 0 1.854.092 2.754.274a.586.586 0 00.232-1.149A15.111 15.111 0 0015 0C10.993 0 7.226 1.56 4.393 4.393A14.902 14.902 0 000 15c0 3.37 1.144 6.66 3.228 9.296-.268.4-.413.872-.413 1.365 0 .657.257 1.275.721 1.74a2.444 2.444 0 001.74.721c.658 0 1.276-.256 1.74-.721.465-.465.721-1.083.721-1.74s-.256-1.276-.72-1.74a2.445 2.445 0 00-1.74-.72zm.912 3.373a1.28 1.28 0 01-.912.377 1.28 1.28 0 01-.911-.377 1.28 1.28 0 01-.378-.912c0-.344.134-.668.378-.912a1.28 1.28 0 01.911-.377c.345 0 .668.134.912.378.243.243.377.567.377.911 0 .344-.134.668-.377.912zM26.772 5.703a2.465 2.465 0 00-.308-3.104 2.446 2.446 0 00-1.74-.721c-.658 0-1.276.256-1.74.72a2.445 2.445 0 00-.721 1.74c0 .658.256 1.276.72 1.741.465.465 1.083.72 1.74.72.42 0 .824-.104 1.183-.3A13.854 13.854 0 0128.828 15c0 7.625-6.203 13.828-13.828 13.828-.918 0-1.836-.09-2.728-.269a.586.586 0 00-.23 1.15c.968.193 1.963.291 2.958.291 4.007 0 7.773-1.56 10.607-4.393A14.902 14.902 0 0030 15c0-3.37-1.145-6.66-3.228-9.297zm-2.96-.452a1.28 1.28 0 01-.377-.912c0-.344.134-.668.377-.911a1.28 1.28 0 01.912-.378 1.29 1.29 0 010 2.578 1.28 1.28 0 01-.912-.377z" fill="#2D3748" /><path d="M12.582 25.078c0 .324.263.586.586.586h3.664a.586.586 0 00.586-.586v-1.136a9.179 9.179 0 002.199-.911l.802.802a.586.586 0 00.829 0l2.59-2.592a.586.586 0 000-.828l-.802-.802a9.169 9.169 0 00.911-2.199h1.132a.586.586 0 00.586-.585v-3.664a.586.586 0 00-.586-.586h-1.132a9.17 9.17 0 00-.911-2.199l.797-.797a.587.587 0 000-.829l-2.592-2.59a.586.586 0 00-.829 0l-.795.797a9.177 9.177 0 00-2.2-.912V4.922a.586.586 0 00-.585-.586h-3.664a.586.586 0 00-.586.586v1.126a9.169 9.169 0 00-2.199.91l-.796-.795a.586.586 0 00-.828 0l-2.592 2.59a.585.585 0 000 .828l.797.797a9.173 9.173 0 00-.911 2.199h-1.13a.586.586 0 00-.586.585l-.002 3.664a.585.585 0 00.586.586h1.132c.207.77.512 1.507.911 2.2l-.801.8a.586.586 0 000 .83l2.59 2.59a.586.586 0 00.829 0l.801-.801a9.185 9.185 0 002.2.911v1.136zm-1.97-3.28a.586.586 0 00-.732.078l-.713.714-1.761-1.763.712-.713a.586.586 0 00.078-.732 8.02 8.02 0 01-1.11-2.679.586.586 0 00-.572-.462H5.507l.002-2.492h1.005a.586.586 0 00.572-.463 8.022 8.022 0 011.11-2.678.586.586 0 00-.078-.733l-.708-.708 1.763-1.761.707.707c.196.196.5.228.733.078a8.016 8.016 0 012.678-1.11.586.586 0 00.463-.573v-1h2.492v1c0 .277.193.515.463.573a8.024 8.024 0 012.678 1.11c.232.15.537.118.732-.078l.708-.707 1.762 1.761-.708.708a.586.586 0 00-.078.732 8.027 8.027 0 011.11 2.679c.058.27.297.463.573.463h1.007v2.492h-1.007a.586.586 0 00-.573.462 8.02 8.02 0 01-1.11 2.679.586.586 0 00.078.732l.713.713-1.761 1.762-.714-.713a.586.586 0 00-.732-.078 8.027 8.027 0 01-2.678 1.11.586.586 0 00-.463.573v1.011h-2.492v-1.01a.586.586 0 00-.463-.574 8.021 8.021 0 01-2.678-1.11z" fill="#2D3748" /><path d="M19.841 15A4.847 4.847 0 0015 10.158 4.847 4.847 0 0010.158 15 4.847 4.847 0 0015 19.841 4.847 4.847 0 0019.841 15zm-8.51 0A3.674 3.674 0 0115 11.33 3.674 3.674 0 0118.67 15 3.674 3.674 0 0115 18.67 3.674 3.674 0 0111.33 15z" fill="#2D3748" /><path d="M20.395 2.216a.59.59 0 00.415-.172.593.593 0 00.171-.415.59.59 0 00-.586-.586.589.589 0 00-.586.586.589.589 0 00.586.587zM9.63 27.794a.59.59 0 00-.586.586.59.59 0 00.586.586.59.59 0 00.586-.586.59.59 0 00-.586-.585z" fill="#4299E1" /></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h30v30H0z" /></clipPath></defs>
                    </svg>

                    <h1 className="mt-4 text-xl inter-bold">Sistemas ERPs</h1>

                    <p className="mt-2 text-gray-500 raleway-regular">Sistemas ERP são softwares que ajudam a integrar todos os dados e processos de uma empresa em um único sistema. Eles permitem que diferentes departamentos trabalhem juntos de forma mais eficiente, automatizando tarefas e centralizando todas as informações de negócios. Com um ERP, você tem um fluxo de dados unificado, contínuo e consistente em toda a organização.</p>
                  </div>
                </div>
              </div>
            </section>
          </section>
          {/*    /EMPRESA.     */}
          <div className="skew-c"></div>
          {/*   WAVE 
        <div className="divider-top w-full bg-[#206BA5]">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div> 
            WAVE    */}

          {/*     DESTAQUES.     */}
          <section className="w-full bg-[#206BA5]">

            <section className="container lg:w-3/5 px-6 mx-auto">
              <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl text-center inter-bold text-gray-100 capitalize lg:text-4xl">Sistemas para Automatizar<br /><span className="decoration-gray-100">Seu Negócio</span></h1>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-1 lg:grid-cols-2">
                  {cardDt.map((card, index) => (

                    <div key={index} className={`${index == 0 ? 'invisible show-right' : 'invisible show-left'} overflow-hidden h-auto bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer`}>
                      {/* <div className="px-4 py-2">
                    <h1 className="text-xl font-bold uppercase">NIKE AIR</h1>
                    <p className="mt-1 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
                  </div> */}
                      <Image
                        src={card.imgSrc}
                        alt="Imagem Promocional"
                        width={100}
                        height={100}
                        objectFit="cover"
                        className="w-full"
                      />

                      <div className="flex items-center justify-center px-4 py-2  bg-gray-900">
                        {/* <h1 className="text-lg font-bold text-white">{card.texto}</h1> */}
                        <button className="px-2 py-1 text-xs inter-bold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">{card.texto}</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </section>
          {/*    /DESTAQUES.     */}

          <div className="skew-cc"></div>

          {/*   WAVE 
        <div className="divider-top w-full bg-[#F8F8F8]">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#206BA5]"></path>
          </svg>
        </div> 
              WAVE    */}
          {/*     SERVIÇOS.     */}
          <section className="w-full bg-[#F8F8F8]">
            <section className="container lg:w-3/5 px-6 mx-auto">
              <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl text-center inter-bold text-[#206BA5] capitalize lg:text-4xl">Emissão Facilitada e Segura de <br /> Documentos Fiscais Eletrônicos</h1>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-2">
                  {cardSN.map((card, index) => (
                    <div key={index} className={`${index == 0 || index == 2 ? 'invisible show-right' : 'invisible show-left'} flex flex-col items-center p-6 space-y-3 text-center bg-[#206BA5] rounded-xl hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer`}>
                      <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg> */}
                        <div className="relative w-12 h-12">
                          <Image
                            src={card.imgSrc}
                            alt={card.alt}
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                      </span>

                      <h1 className="text-xl text-[#f8f8f8] capitalize inter-bold"><abbr title={`${card.abbr}`}>{card.texto}</abbr></h1>

                      <p className="text-[#f8f8f8] raleway-regular">{card.desc}</p>
                      {/* <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600">
                    <span className="mx-1">read more</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"></path></svg>
                  </a> */}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </section>
          {/*     SERVIÇOS.     */}

          <section className="container lg:w-3/5 px-6 mx-auto text-center bg-transparent">
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