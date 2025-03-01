//      UTIL.       //
import Image from "next/image";
//     /UTIL.       //

//      VARIAVEIS.      //
const card = [
    {
        imgSrc: './destaques/nf/nfe.svg',
        alt: 'Logo NFe',
        texto: 'Nota Fiscal Eletrônica - NFe',
        abbr: 'Nota Fiscal Eletrônica',
        desc: 'Emissão rápida e fácil de notas fiscais eletrônicas, simplificando seu processo de faturamento.',
    },
    {
        imgSrc: './destaques/nf/nfce.svg',
        alt: 'Logo NFCe',
        texto: 'Nota Fiscal de Consumidor Eletrônica - NFCe',
        abbr: 'Nota Fiscal do Consumidor Eletrônica',
        desc: 'Emitir notas fiscais para consumidores de forma eletrônica, com simplicidade e agilidade.',
    },
    {
        imgSrc: './destaques/nf/cte.svg',
        alt: 'Logo CTe',
        texto: 'Conhecimento de Transporte Eletrônico - CTe',
        abbr: 'Conhecimento de Transporte Eletrônico',
        desc: 'Gerencie o transporte de mercadorias com facilidade através da emissão eletrônica de conhecimentos de transporte.',
    },
    {
        imgSrc: './destaques/nf/mdfe.svg',
        alt: 'Logo MDFe',
        texto: 'Manifesto Eletrônico de Documentos Fiscais - MDFe',
        abbr: 'Manifesto Eletrônico de Documentos Fiscais',
        desc: 'Facilite a gestão de documentos fiscais com a emissão eletrônica do manifesto de documentos fiscais.',
    }
];
//     /VARIAVEIS.      //

const CardEmissorFiscal = () => {
    return (
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-2">
            {card.map((card, index) => (
                <div key={index} className={`${index % 2 == 0 ? 'invisible show-right' : 'invisible show-left'}`}>
                    <div className="hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer">
                        <div className="relative w-14 h-14 bg-[#206BA5] rounded-full">
                            <Image
                                src={card.imgSrc}
                                alt={card.alt}
                                className="p-2"
                                width={56}
                                height={56}
                            />
                        </div>

                        <h1 className="mt-4 inter-bold text-gray-800 text-2xl">
                            <abbr title={`${card.abbr}`}>
                                {card.texto}
                            </abbr>
                        </h1>

                        <p className="mt-2 text-gray-600 raleway-regular text-xl">
                            {card.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default CardEmissorFiscal;