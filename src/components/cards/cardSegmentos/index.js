import { BsCart4 } from "react-icons/bs";
import { PiBreadBold } from "react-icons/pi";
import { FaBarcode } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaTools } from "react-icons/fa";

const Segmentos = () => {
    return (
        <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
                    <BsCart4 />
                </span>

                <h1 className="text-xl font-semibold text-[#F8F8F8] capitalize">Supermercados</h1>

                <p className="text-gray-900">
                    Transforme a operação do seu supermercado com nosso ERP especializado! Tenha controle total sobre o estoque, acompanhe as vendas em tempo real e automatize tarefas diárias. Diversos relatórios oferecem dados cruciais para otimizar sua gestão e melhorar a rentabilidade do seu negócio.
                </p>

                <a href="#" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <span className="mx-1">saiba mais</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>

            <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
                    <PiBreadBold />
                </span>

                <h1 className="text-xl font-semibold text-[#F8F8F8] capitalize">Padarias</h1>

                <p className="text-gray-900">
                    Revolucione a administração da sua padaria com nosso ERP dedicado! Controle de forma precisa o estoque, acompanhe as vendas e produza com eficiência. Automatize processos diários e use relatórios detalhados para tomar decisões estratégicas que aumentam a produtividade e os lucros.
                </p>

                <a href="#" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <span className="mx-1">saiba mais</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>

            <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
                    <IoFastFoodOutline />
                </span>

                <h1 className="text-xl font-semibold text-[#F8F8F8] capitalize">Restaurantes e Lanchonetes</h1>

                <p className="text-gray-900">
                    Transforme a gestão do seu restaurante ou lanchonete com uma solução integrada! Organize estoque, gerencie pedidos e vendas, tudo de maneira eficiente. Utilize relatórios personalizados para melhorar a tomada de decisões, maximizando a produtividade e os lucros.
                </p>

                <a href="#" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <span className="mx-1">saiba mais</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>

            <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
                    <FaBarcode />
                </span>

                <h1 className="text-xl font-semibold text-[#F8F8F8] capitalize">Varejo e Atacado</h1>

                <p className="text-gray-900">
                    Potencialize seu negócio de varejo e atacado com nossa plataforma inovadora! Gerencie estoque, controle de pedidos e automatize processos, tudo de maneira fluida. Relatórios detalhados oferecem informações estratégicas que ajudam a aumentar a rentabilidade e a eficiência.
                </p>

                <a href="#" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <span className="mx-1">saiba mais</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>

            <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
                    <MdOutlinePets />
                </span>

                <h1 className="text-xl font-semibold text-[#F8F8F8] capitalize">Pet Shops</h1>

                <p className="text-gray-900">
                    Revolucione a gestão do seu pet shop com nossa solução eficiente! Controle o estoque, acompanhe vendas e otimize operações diárias. Relatórios detalhados oferecem insights valiosos para decisões que aumentam a eficiência e promovem o crescimento do seu negócio.
                </p>

                <a href="#" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <span className="mx-1">saiba mais</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>

            <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
                    <FaTools />
                </span>

                <h1 className="text-xl font-semibold text-[#F8F8F8] capitalize">Oficinas e Auto Peças</h1>

                <p className="text-gray-900">
                    Aperfeiçoe a gestão de sua loja de autopeças ou oficina com nossa solução completa! Controle de estoque, acompanhamento de serviços e automatização de processos diários para maior eficiência. Utilize relatórios precisos para tomar decisões estratégicas que aumentam o desempenho e impulsionam o crescimento do seu negócio.
                </p>

                <a href="#" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <span className="mx-1">saiba mais</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </section>
    );
}

export default Segmentos;