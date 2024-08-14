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
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-lg bg-[#D67229] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#C55300] focus:outline-none focus:ring-4 focus:ring-cyan-200"
                >
                    Contratar
                </button>
            </Card>
            <div className={`md:flex hidden card hover:border-[#D67229] hover:shadow-lg hover:shadow-black/25 hover:cursor-pointer init-hidden max-w-xs`}>
                <div className="card-details">
                    <Card
                        className="font-mono"
                        imgSrc={props.imgSrc}
                    >
                    </Card>
                </div>
                <button className="card-button hover:bg-[#df894c]">Contratar</button>
            </div>
        </>
    );
}

export default CardDestaques;