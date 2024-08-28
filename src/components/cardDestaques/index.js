// 'use cliente';
import { Card } from "flowbite-react";

const CardDestaques = (props) => {
    return (
        <>
            <Card
                className="font-mono md:hidden flex init-hidden max-w-xs"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={props.imgSrc}
            >
                <a href="https://wa.me/5581988049715" target="_blank">
                    <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-lg bg-[#D67229] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#C55300] focus:outline-none focus:ring-4 focus:ring-cyan-200"
                    >
                        Contratar
                    </button>
                </a>
            </Card>
            <div className={`md:flex hidden card hover:border-[#D67229] hover:shadow-lg hover:shadow-black/25 hover:cursor-pointer init-hidden max-w-xs  hover:scale-105 transition-transform duration-500 ease-in-out`}>
                <div className="card-details">
                    <Card
                        className="font-mono"
                        imgSrc={props.imgSrc}
                    >
                    </Card>
                </div>
                <a href="https://wa.me/5581988049715" target="_blank">
                    <button className="card-button hover:bg-[#df894c]">Contratar</button>
                </a>
            </div>
        </>
    );
}

export default CardDestaques;