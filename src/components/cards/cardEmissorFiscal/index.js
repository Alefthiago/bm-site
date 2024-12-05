//      UTIL.       //
import Image from "next/image";
//     /UTIL.       //

//      VARIAVEIS.      //
const card = [
    {
        imgSrc: './destaques/nf/nfe.svg',
        alt: 'Logo NFe',
        texto: 'NFe',
        abbr: 'Nota Fiscal Eletrônica',
        desc: 'Emissão rápida e fácil de notas fiscais eletrônicas, simplificando seu processo de faturamento.',
    },
    {
        imgSrc: './destaques/nf/nfce.svg',
        alt: 'Logo NFCe',
        texto: 'NFCe',
        abbr: 'Nota Fiscal do Consumidor Eletrônica',
        desc: 'Emitir notas fiscais para consumidores de forma eletrônica, com simplicidade e agilidade.',
    },
    {
        imgSrc: './destaques/nf/cte.svg',
        alt: 'Logo CTe',
        texto: 'CTe',
        abbr: 'Conhecimento de Transporte Eletrônico',
        desc: 'Gerencie o transporte de mercadorias com facilidade através da emissão eletrônica de conhecimentos de transporte.',
    },
    {
        imgSrc: './destaques/nf/mdfe.svg',
        alt: 'Logo MDFe',
        texto: 'MDFe',
        abbr: 'Manifesto Eletrônico de Documentos Fiscais',
        desc: 'Facilite a gestão de documentos fiscais com a emissão eletrônica do manifesto de documentos fiscais.',
    }
];
//     /VARIAVEIS.      //

const CardEmissorFiscal = () => {
    return (
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-2">
            {card.map((card, index) => (
                <div key={index} className={`${index == 0 || index == 2 ? 'invisible show-right' : 'invisible show-left'} `}>
                    <div className={`flex flex-col items-center p-6 space-y-3 text-center bg-[#206BA5] rounded-xl hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer`}>
                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
                            <div className="relative w-12 h-12">

                                <Image
                                    src={card.imgSrc}
                                    alt={card.alt}
                                    layout="fill"
                                    objectFit="contain"
                                />

                            </div>
                        </span>
                        <h1 className="text-xl text-[#f8f8f8] capitalize inter-bold">
                            <abbr title={`${card.abbr}`}>
                                {card.texto}
                            </abbr>
                        </h1>
                        <p className="text-[#f8f8f8] raleway-regular">
                            {card.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default CardEmissorFiscal;