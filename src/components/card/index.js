"use client";

import { Card } from "flowbite-react";
import "./card.css";

const Cardes = (props) => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 pb-4">
            {props.cardsData.map((card, index) => (
                <div key={index} className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Card className="max-w-[280px] h-full">
                                <img
                                    src={card.imgSrc}
                                    alt={card.imgAlt}
                                    className="card-image"
                                />
                                <div className="flex justify-center mt-2">
                                    <button className="btn-details">
                                        Detalhes
                                    </button>
                                </div>
                            </Card>
                        </div>
                        <div className="flip-card-back">
                            <a href={card.link} target="_blank" rel="noopener noreferrer" className="font-normal text-blue-700">
                                {card.text}
                            </a>
                            <h2>{card.description}</h2>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Cardes;
