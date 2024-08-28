"use client";

import { Card } from "flowbite-react";
import "./card.css";

const Cardes = (props) => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 pb-4 animate-fade-left">
            {props.cardsData.map((card, index) => (
                <div key={index} className="card">
                    <Card className="w-[340px] h-[350px]"> {/* Largura e altura do cartão ajustadas */}
                        <img
                            src={card.imgSrc}
                            alt={card.imgAlt}
                            className="card-image"
                        />
                        <div className="card-text">
                            <h1 className="text-sm font-semibold">{card.nome}</h1> {/* Texto ajustado */}
                        </div>
                    </Card>

                    <div className="card__content">
                        <div className="flex items-center justify-center">
                            <h1 className="font-normal text-justify">{card.titulo}</h1> {/* Texto ajustado */}
                        </div>
                        <div className="items-center justify-center text-center pt-2">
                            <a href={card.link} target="_blank" rel="noopener noreferrer" className="font-normal text-cyan-500 text-center hover:cursor-pointer">
                                {card.text}
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Cardes;
