//      UTIL.       //
import Image from "next/image";
//     /UTIL.       //

//      VARIÁVEIS.      //
const cards = [
    {
        imgSrc: '/premios/premio1.webp',
        alt: 'Prêmio',
        titulo: 'SOLUÇÃO COMPLETA PARA PADARIA',
        texto: 'Lançamentos do Ano',
    },
    {
        imgSrc: '/premios/premio2.webp',
        alt: 'Prêmio',
        titulo: 'SOLUÇÕES & SERVIÇOS',
        texto: 'Soluções & Serviços',
    },
    {
        imgSrc: '/premios/premio3.webp',
        alt: 'Prêmio',
        titulo: 'SOLUÇÕES & SERVIÇOS',
        texto: 'Lançamentos do Ano',
    },
];
//     /VARIÁVEIS.      //

const CardPremios = () => {
    return (
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            {cards.map((card, index) => (
                <div key={index} className={`invisible show-top`}>
                    <div className="w-full max-w-xs h-[325px] overflow-hidden bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer">
                        <div className="w-full h-[220px] overflow-hidden">
                            <Image
                                className="object-cover w-full h-full"
                                src={card.imgSrc}
                                alt={card.alt}
                                width={500}
                                height={500}
                            />
                        </div>

                        <div className="py-5 text-center">
                            <a
                                href="#"
                                className="block text-xl font-bold text-gray-800"
                                tabIndex="0"
                                role="link"
                            >
                                {card.titulo}
                            </a>
                            <span className="text-sm text-gray-700">
                                {card.texto}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardPremios;