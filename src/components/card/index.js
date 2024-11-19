"use client";

import { Card } from "flowbite-react";
import "./card.css";
import { FaCircleInfo } from "react-icons/fa6";

const Cardes = (props) => {
    return (
        // <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 pb-4 animate-fade-left">
        //     {props.cardsData.map((card, index) => (
        //         <div key={index} className="card">
        //             <Card className="w-[340px] h-[350px]"> {/* Largura e altura do cartão ajustadas */}
        //                 <img
        //                     src={card.imgSrc}
        //                     alt={card.imgAlt}
        //                     className="card-image"
        //                 />
        //                 <div className="card-text">
        //                     <h1 className="text-sm font-semibold">{card.nome}</h1> {/* Texto ajustado */}
        //                 </div>
        //             </Card>

        //             <div className="card__content">
        //                 <div className="flex items-center justify-center">
        //                     <h1 className="font-normal text-justify">{card.titulo}</h1> {/* Texto ajustado */}
        //                 </div>
        //                 <div className="items-center justify-center text-center pt-2">
        //                     <a href={card.link} target="_blank" rel="noopener noreferrer" className="font-normal text-cyan-500 text-center hover:cursor-pointer">
        //                         {card.text}
        //                     </a>
        //                 </div>
        //             </div>
        //         </div>
        //     ))}
        // </section>
        /* From Uiverse.io by Javierrocadev */
        <section>
            <div className="container px-6 py-10 mx-auto">
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                    {props.cardsData.map((card, index) => (
                        <div key={index} className={`invisible ${index <= 2 || (index > 5 && index < 9) ? 'show-right' : 'show-left'} w-full max-w-sm bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer`}>
                            <img className="object-cover object-center w-full h-[310px] p-2" src={card.imgSrc} alt="avatar" />

                            <div className="px-6 py-4 min-h-[300px]">
                                {/* <h1 className="text-xl font-semibold text-gray-800">Patterson johnson</h1> */}
                                <p className="py-2 text-gray-700">
                                    {card.titulo}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    {Array.isArray(card.nome) && card.nome.map((item, index) => (
                                        <div key={index} className={`flex items-center mt-4 text-gray-700`}>
                                            <svg aria-label="suitcase icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 11H10V13H14V11Z" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z" />
                                            </svg>

                                            <h1 className="px-2 text-sm">
                                                {item}
                                            </h1>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center px-6 py-3 bg-gray-900 justify-center">
                                <a href="#" target="_blank">
                                    <button className="px-2 py-1 text-xs inter-bold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                                        Mais Informações
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Cardes;