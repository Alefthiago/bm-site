//      UTIL.       //
import Image from "next/image";
//     /UTIL.       //

//      VARIAVEIS.      //
const cards = [
    {
        imgSrc: './destaques/bm1.webp',
        texto: 'Solicite uma Demosntração',
    },
    {
        imgSrc: './destaques/bm2.webp',
        texto: 'Faça um Orçamento',
    }
];
//     /VARIAVEIS.      //

const CardDestaques = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            {cards.map((card, index) => (
                <div key={index} className={`${index == 0 ? 'invisible show-right' : 'invisible show-left'} p-10 `}>
                    <div className={`overflow-hidden h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer`}>

                        <Image
                            src={card.imgSrc}
                            alt="Imagem Promocional"
                            width={100}
                            height={100}
                            objectFit="cover"
                            className="w-full"
                        />

                        {/* <div className="flex items-center justify-center px-4 py-2 bg-gray-900">
                            <a href="https://wa.me/558131262050" target="_blank">
                                <button className="px-2 py-1 text-xs inter-bold text-gray-900 uppercase transition-colors duration-300 transform bg-[#F8F8F8] rounded">
                                    {card.texto}
                                </button>
                            </a>
                        </div> */}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardDestaques;