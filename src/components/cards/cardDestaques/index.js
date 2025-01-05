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
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardDestaques;