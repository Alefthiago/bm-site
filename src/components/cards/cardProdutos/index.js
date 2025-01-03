//      UTIL.       //
import { Card } from "flowbite-react";
import Image from "next/image";
//     /UTIL.       //

const card = [
    {
        imgSrc: "./equipamentos/09e0add64a2c83e9bafd0d39f8707652.png",
        titulo: "Mini impressora de cupom fiscal, compacta e eficiente. Ideal para pequenos negócios, imprime recibos rapidamente via conexão Rede ou USB. Leve e fácil de transportar, perfeita para o dia a dia!",
        nome: "Mini Impressoras",
    },
    {
        imgAlt: "Descrição da imagem 2",
        imgSrc: "./equipamentos/3500c1_42c81e47b8064624bc1407bdcc39cfd8~mv2.webp",
        titulo: "Smart PC compacto e versátil, combina desempenho e portabilidade. Ideal para trabalho e entretenimento, com conectividade avançada e design moderno. Perfeito para produtividade em qualquer lugar!",
        nome: "Smart PCs",
    },
    {
        imgAlt: "Descrição da imagem 2",
        imgSrc: "./equipamentos/pinpad.webp",
        titulo: "Pin-Pad TEF (Transferência Eletrônica de Fundos) confiável e fácil de usar, oferece transações rápidas e seguras. Compatível com diversos sistemas de pagamento, é a escolha ideal para aprimorar o atendimento no seu negócio!",
        nome: "TEF / Pin-Pads",
    },
    {
        imgAlt: "Descrição da imagem 2",
        imgSrc: "./equipamentos/teste.webp",
        titulo: "Leitor de Código de Barras rápido e preciso, ideal para otimizar o atendimento e controle de estoque. Fácil de usar, compatível com diversos sistemas, garantindo eficiência em cada leitura!",
        nome: "Leitores de Código de Barras",
    },
    {
        imgAlt: "Descrição da imagem 2",
        imgSrc: "./equipamentos/3500c1_b4cccac9b8c54e31b77c42d11116f46e~mv2.webp",
        titulo: "Gaveta de Dinheiro robusta e segura, perfeita para armazenar e organizar seu caixa. Fácil de usar, com abertura rápida e compatível com diversos sistemas de ponto de venda. Ideal para seu negócio!",
        nome: "Gavetas de Dinheiro",
    },
    {
        imgAlt: "Descrição da imagem 2",
        imgSrc: "./equipamentos/impressora.webp",
        titulo: "Impressora de Etiquetas de Código de Barras eficiente e precisa, ideal para identificar produtos e organizar estoques. Fácil de operar, compatível com diversos formatos de etiquetas. Perfeita para otimizar a sua gestão.",
        nome: "Impressora de Etiquetas de Código de Barras",
    },
    {
        imgAlt: "Descrição da imagem 2",
        imgSrc: "./equipamentos/3500c1_6011ee0c63b04398b6c9349e91b6484a~mv2.webp",
        titulo: "CPU de Varejo potente e confiável, projetada para suportar as demandas do seu negócio. Oferece desempenho robusto, conectividade avançada e alta durabilidade. Ideal para maximizar a eficiência no ponto de venda!",
        nome: "CPUs de Varejo",
    },
    {
        imgAlt: "Descrição da imagem 2",
        imgSrc: "./equipamentos/3500c1_34bcb7f538734f428ae61c20a96bb3dc~mv2.webp",
        titulo: "Monitores nítidos e responsivos, ideais para melhorar a experiência de atendimento. Com alta resolução e design moderno, garante visualização clara e suporte a longas jornadas de trabalho. Perfeito para o varejo!",
        nome: "Monitores",
    },
    {
        imgAlt: "Descrição da imagem 2",
        imgSrc: "./equipamentos/urano.webp",
        titulo: "Balanças Eletrônicas precisas e duráveis, ideal para pesagens rápidas e confiáveis no varejo. Fácil de usar, com display claro e alta capacidade de carga. Perfeita para melhorar a eficiência no atendimento!",
        nome: "Balanças Eletrônicas",
    }
];

const CardProdutos = () => {
    return (
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {card.map((card, index) => (
                <div key={index} className="hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer">
                    <Card
                        className={`max-w-sm ${index <= 2 || (index > 5 && index < 9) ? 'show-right' : 'show-left'} min-h-[700px]`}
                        renderImage={() => (
                            <div className="relative w-full h-[400px]">
                                <Image
                                    className="object-cover object-center"
                                    src={card.imgSrc}
                                    alt="Imagem Promocional"
                                    fill
                                />
                            </div>
                        )}
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 inter-bold">
                            {card.nome}
                        </h5>
                        <p className="font-normal text-gray-700 raleway-regular">
                            {card.titulo}
                        </p>
                    </Card>

                </div>
            ))}
        </div>
    );
}

export default CardProdutos;