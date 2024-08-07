"use client";

import { Card } from "flowbite-react";

const Cardes = (props) => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 pb-4">
            {props.cardsData.map((card, index) => (
                <Card
                    key={index}
                    className="max-w-[300px]"
                    imgAlt={card.imgAlt }
                    imgSrc={card.imgSrc }
                >
                    <a href={card.link}  target="_blank" className="font-normal text-blue-700">
                        {card.text }
                    </a>
                </Card>
            ))}         
        </section>
    );
}

export default Cardes;
