//      UTIL.       //
import Image from "next/image";
//     /UTIL.       //

//     /VARIAVEIS.      //
const card = [
    {
        alt: "Descrição da imagem 1",
        imgSrc: "./solucoes/card1.webp",
        nome: ["Supermercados", "Mercadinhos", "Frigoríficos", "Açougues", "Peixarias", "Hortifrutis"],
        titulo: "Nosso ERP otimiza a gestão do supermercado, controlando estoque, vendas em tempo real e automatizando operações",
        tipoModal: 1
    },
    {
        imgAlt: "Descrição da imagem 2",
        imgSrc: "./solucoes/card2.webp",
        nome: ["Padarias", "Delicatessens", "Conveniência"],
        titulo: "Transforme a gestão da sua padaria com nosso ERP: controle estoque, vendas e automatize tarefas para aumentar a eficiência e lucros",
        tipoModal: 1
    },
    {
        imgAlt: "Descrição da imagem 2",
        imgSrc: "./solucoes/card3.webp",
        nome: ["Restaurantes", "Lanchonetes", "Cafeterias", "Food Services"],
        titulo: "Simplifique a gestão do seu restaurante com nosso ERP: controle estoque, pedidos e vendas, com relatórios que aumentam eficiência e lucros",
        tipoModal: 2
    },
    {
        imgAlt: "Descrição da imagem 2",
        imgSrc: "./solucoes/card4.webp",
        nome: ["Materiais de Construção", "Madeireiras"],
        titulo: "Transforme a gestão da sua loja de materiais de construção: controle estoque, vendas e automatize processos para otimizar a operação e crescer",
        tipoModal: 1
    },
    {
        imgAlt: "Descrição da imagem 2",
        imgSrc: "./solucoes/card8.webp",
        nome: ["Roupas", "Calçados"],
        titulo: "Revitalize a gestão da sua loja de roupas e calçados com nossa solução: gerencie estoque, vendas e automatize tarefas para otimizar operações e aumentar as vendas",
        tipoModal: 1
    },
    {
        imgAlt: "Descrição da imagem 2",
        imgSrc: "./solucoes/card11.webp",
        nome: ["Atacados", "Distribuidoras", "Atacarejos"],
        titulo: "Otimize sua operação com nossa solução: controle estoque, pedidos e automatize processos, com relatórios que impulsionam eficiência e lucratividade",
        tipoModal: 1
    }
];
//     /VARIAVEIS.      //


const CardSolucoes = (props) => {
    return (
        <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 xl:grid-cols-3">
            {card.map((card, index) => (
                <div key={index} className={`invisible ${index <= 2 || (index > 5 && index < 9) ? 'show-right' : 'show-left'}`}>
                    <div className={`hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer flex flex-col justify-between drop-shadow-xl w-full max-w-sm bg-white rounded-lg shadow-lg min-h-[510px] py-5`}>
                        <div>
                            <div className="relative w-full h-[300px]">
                                <Image
                                    className="object-cover object-center"
                                    src={card.imgSrc}
                                    alt="Imagem Promocinal"
                                    fill
                                    priority
                                />
                            </div>

                            <p className="py-2 px-6 text-gray-700 raleway-regular">
                                {card.titulo}
                            </p>
                        </div>

                        <div className="px-6">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {Array.isArray(card.nome) && card.nome.map((item, index) => (
                                    <div key={index} className={`flex items-center text-gray-700 rounded-lg`}>
                                        <svg aria-label="suitcase icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 11H10V13H14V11Z" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z" />
                                        </svg>

                                        <h1 className="px-2 text-sm inter-bold">
                                            {item}
                                        </h1>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* <div onClick={() => props.clickInfo(card.tipoModal)} className="flex items-center px-6 py-3 bg-[#206BA5] justify-center rounded-b-lg">
                            <a>
                                <button className="px-2 py-1 text-sm uppercase text-[#F8F8F8]">
                                    <span className="font-semibold inter-bold">
                                        Mais Informações
                                    </span>
                                </button>
                            </a>
                        </div> */}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default CardSolucoes;