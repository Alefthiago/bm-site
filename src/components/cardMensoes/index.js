//      UTIL.       //
import Image from "next/image";
//     /UTIL.       //

const CardMensoes = (props) => {
    return (
        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
            <h1>{props.text_span}</h1>
            {/* <Image
                className="object-cover w-full h-64"
                src={props.imgSrc}
                alt="Premios"
                width={500}
                height={224}
            />

            <div className="py-5 text-center p-2">
                <a href="#" className="block text-xl font-bold text-gray-800 font-mono" role="link">
                    {props.text_a}
                </a>
                <span className="text-sm text-gray-700 font-sans">
                    {props.text_span}
                </span>
            </div> */}
        </div>
    );
}

export default CardMensoes;