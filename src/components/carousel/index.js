import Image from 'next/image';
import { useState, useEffect } from "react";
import "./style.css";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalItems = 5;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
        }, 3000);

        return () => clearInterval(interval);
    }, [totalItems]);

    const getItemPosition = (index) => {
        if (index === activeIndex) return "active";
        if (index === (activeIndex - 1 + totalItems) % totalItems) return "previous";
        if (index === (activeIndex + 1) % totalItems) return "next";
        return "";
    };

    return (
        <div className="w-full pt-64 pb-[300px] md:flex hidden invisible show-top">
            <aside className="carousel">
                <div className="carousel__wrapper">
                    {[...Array(totalItems)].map((_, index) => (
                        <div
                            key={index}
                            className={`item ${getItemPosition(index)}`}
                        >
                            <Image
                                src={`./destaques/carousel${index + 1}.jpg`}
                                alt={`Imagem Promocional ${index + 1}`}
                                width={0}
                                height={0}
                                className='rounded-xl'
                                priority
                            />
                        </div>
                    ))}
                </div>
            </aside>
        </div>
    );
};

export default Carousel;
