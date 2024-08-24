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
      <section className="container px-6 mx-auto pb-10">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-6">
          <div className="w-full lg:w-1/2">
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
          <div className="flex items-center justify-center w-full lg:w-1/2 mt-6 lg:mt-0 hover:scale-105 transition-transform duration-500 ease-in-out">
            <img className="w-full h-full max-w-[200px]" src="./bm/LogoAzul.svg" alt="Logo Bm Informatica" />
          </div>
        </div>
      </section>

      <section className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-center text-white w-full" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold">Seu Banner Atraente</h2>
          <p className="mt-4 text-lg">Uma mensagem cativante ou uma chamada para ação.</p>
          <a href="#" className="mt-6 inline-block px-6 py-3 text-lg bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors">Saiba Mais</a>
        </div>
      </section>
    </section>

  )
};