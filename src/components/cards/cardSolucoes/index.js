//     /VARIAVEIS.      //
const card = [
    {
        alt: "Descrição da imagem 1",
        imgSrc: "./solucoes/card1.webp",
        nome: ["Supermercados", "Mercadinhos", "Frigoríficos", "Açougues", "Peixarias", "Hortifrutis"],
        titulo: "Otimize a gestão do seu supermercado com nosso ERP especializado, que controla estoque, acompanha vendas em tempo real e automatiza operações diárias e com relatórios precisos",
        link: "/products"
    },
    {
        imgAlt: "Descrição da imagem 2",
        imgSrc: "./solucoes/card2.webp",
        nome: ["Padarias", "Delicatessens", "Conveniência"],
        titulo: "Transforme a gestão da sua padaria com nosso ERP especializado! Gerencie estoque, acompanhe vendas e automatize tarefas diárias. Relatórios detalhados ajudam a tomar decisões mais assertivas, aumentando a eficiência e os lucros",
        link: "https://www.datapao.com.br/"
    },
    {
        imgAlt: "Descrição da imagem 2",
        imgSrc: "./solucoes/card3.webp",
        nome: ["Restaurantes", "Lanchonetes", "Cafeterias", "Food Services"],
        titulo: "Simplifique a gestão do seu restaurante ou food service com nosso ERP especializado! Controle estoque, pedidos e vendas de forma integrada. Relatórios precisos ajudam a tomar decisões estratégicas, aumentando a eficiência e os lucros"
    },
    {
        imgAlt: "Descrição da imagem 2",
        imgSrc: "./solucoes/card4.webp",
        nome: ["Materiais de Construção", "Madeireiras"],
        titulo: "Transforme a gestão da sua loja de materiais de construção com nossa solução completa! Controle estoque, vendas e automatize processos. Ferramentas precisas ajudam a otimizar a operação e impulsionar o crescimento do seu negócio"
    },
    {
        imgAlt: "Descrição da imagem 2",
        imgSrc: "./solucoes/card5.webp",
        nome: ["Livrarias", "Papelarias"],
        titulo: "Impulsione sua livraria ou papelaria com nossa solução de gestão completa! Controle estoque, vendas e automatize processos. Tome decisões estratégicas com relatórios detalhados e leve seu negócio a novos patamares!"
    },
    {
        imgAlt: "Informatica e eletronicos",
        imgSrc: "./solucoes/card6.webp",
        nome: ["Informática", "Telefonia", "Eletrônicos"],
        titulo: "Potencialize sua loja de informática, telefonia ou eletrônicos com nossa solução de gestão! Controle estoque, vendas e automatize operações. Com relatórios detalhados, tome decisões estratégicas e impulsione o crescimento do seu negócio!"
    },
    {
        imgAlt: "Descrição da imagem 2",
        imgSrc: "./solucoes/card7.webp",
        nome: ["Auto Peças", "Oficinas"],
        titulo: "Melhore a gestão da sua loja de autopeças ou oficina com nossa solução completa! Controle estoque, acompanhe serviços e automatize processos. Com relatórios precisos, tome decisões estratégicas que aumentam a eficiência e impulsionam o crescimento do seu negócio!"
    },
    {
        imgAlt: "Descrição da imagem 2",
        imgSrc: "./solucoes/card8.webp",
        nome: ["Roupas", "Calçados"],
        titulo: "Revitalize a gestão da sua loja de roupas e calçados com nossa solução completa! Gerencie estoque, acompanhe vendas e automatize tarefas. Com relatórios detalhados, tome decisões estratégicas para otimizar operações e aumentar as vendas!"
    },
    {
        imgAlt: "Descrição da imagem 2",
        imgSrc: "./solucoes/card9.webp",
        nome: ["Brinquedos"],
        titulo: "Simplifique a gestão da sua loja de brinquedos com nosso ERP especializado! Controle estoque, acompanhe vendas e automatize tarefas. Com relatórios precisos, tome decisões estratégicas para aumentar vendas e eficiência!",
        link: "https://www.exemplo2.com"
    },
    {
        imgAlt: "Descrição da imagem 2",
        imgSrc: "./solucoes/card10.webp",
        nome: ["Pet Shops"],
        titulo: "Transforme a gestão do seu pet shop com nossa solução especializada! Controle estoque, acompanhe vendas e automatize processos diários. Relatórios detalhados ajudam a tomar decisões estratégicas, garantindo eficiência e crescimento para o seu negócio!"
    },
    {
        imgAlt: "Descrição da imagem 2",
        imgSrc: "./solucoes/card11.webp",
        nome: ["Atacados", "Distribuidoras", "Atacarejos"],
        titulo: "Otimize sua operação com nossa solução completa! Controle estoque, gerencie pedidos e automatize processos. Relatórios precisos ajudam nas decisões estratégicas, impulsionando eficiência e lucratividade. Eleve o desempenho e amplie sua capacidade de atendimento!"
    },
    {
        imgAlt: "Descrição da imagem 2",
        imgSrc: "./solucoes/card12.webp",
        nome: ["Varejo em Geral"],
        titulo: "Simplifique a gestão do seu varejo com nossa solução completa! Controle estoque, gerencie vendas e automatize processos. Relatórios detalhados ajudam nas decisões estratégicas, otimizando operações e aumentando lucros. Eleve o sucesso do seu negócio!"
    }
];
//     /VARIAVEIS.      //

const CardSolucoes = () => {
    return (
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {card.map((card, index) => (
                <div key={index} className="hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer">
                    <div className={`invisible ${index <= 2 || (index > 5 && index < 9) ? 'show-right' : 'show-left'} flex flex-col justify-between drop-shadow-xl w-full max-w-sm bg-white rounded-lg shadow-lg min-h-[705px]`}>

                        <img className="object-cover object-center w-full h-[310px] p-2" src={card.imgSrc} alt="avatar" />
                        <div className="px-6 py-4">

                            <p className="py-2 text-gray-700">
                                {card.titulo}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {Array.isArray(card.nome) && card.nome.map((item, index) => (
                                    <div key={index} className={`flex items-center mt-4 text-gray-700 rounded-lg`}>
                                        <svg aria-label="suitcase icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 11H10V13H14V11Z" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z" />
                                        </svg>

                                        <h1 className="px-2 text-sm">
                                            {item}
                                        </h1>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center px-6 py-3 bg-[#206BA5] justify-center rounded-b-lg">
                            <a href="#" target="_blank">
                                <button className="px-2 py-1 text-sm uppercase text-[#F8F8F8]">
                                    <span className="font-semibold font-sans">
                                        Mais Informações
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default CardSolucoes;