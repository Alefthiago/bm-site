"use client";

import { Card } from "flowbite-react";
import "./card.css";

const Cardes = (props) => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 pb-4">
            {props.cardsData.map((card, index) => (
                <div key={index} className="card">

                    <Card className="max-w-[280px] h-full">
                        <img
                            src={card.imgSrc}
                            alt={card.imgAlt}
                            className="card-image"
                        />

                    </Card>
                    <div class="card__content">
                        <a href={card.link} target="_blank" rel="noopener noreferrer" className="font-normal text-blue-700">
                            {card.text}
                        </a>
                    </div>
                </div>

            ))}
        </section>
    );
}

export default Cardes;
