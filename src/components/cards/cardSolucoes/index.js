import { PiFileCloud } from "react-icons/pi";
import { TbReportAnalytics } from "react-icons/tb";
import { CiBarcode } from "react-icons/ci";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { List, ListItem } from "flowbite-react";
import { HiCheckCircle } from "react-icons/hi";
import { HR } from "flowbite-react";

const Segmentos = () => {
    return (
        <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <section className="p-8 space-y-3 border-2 border-blue-400 rounded-xl flex flex-col justify-between invisible show-right">
                <div>
                    <span className="inline-block text-blue-500">
                        <PiFileCloud className="w-8 h-8" />
                    </span>

                    <h1 className="text-xl font-semibold text-gray-700 capitalize">BM WEB</h1>

                    <p className="text-gray-500">
                        Sistema em nuvem
                        <abbr title="Enterprise Resource Planning - Planejamento dos Recursos da Empresa">
                            &nbsp;ERP&nbsp;
                        </abbr>
                        completo para a gestão da sua empresa. Acesse de qualquer lugar, com segurança, mobilidade e eficiência.
                    </p>
                    <HR />

                    <h1 className="text-xl font-semibold text-gray-700 capitalize">Principais Funcionalidades</h1>

                    <List>
                        <ListItem icon={HiCheckCircle}>Controle de estoque</ListItem>
                        <ListItem icon={HiCheckCircle}>Gestão de vendas</ListItem>
                        <ListItem icon={HiCheckCircle}>Emissão de <abbr title="Nota Fiscal Eletrônica">&nbsp;NF-e</abbr></ListItem>
                        <ListItem icon={HiCheckCircle}>Fidelização de clientes e correntistas</ListItem>
                        <ListItem icon={HiCheckCircle}>Controle de produção</ListItem>
                        <ListItem icon={HiCheckCircle}>Gestão financeira e de contas</ListItem>
                        <ListItem icon={HiCheckCircle}>Geração de relatórios gerenciais</ListItem>
                        <ListItem icon={HiCheckCircle}>Acesso simplificado a múltiplas filiais</ListItem>
                        <ListItem icon={HiCheckCircle}>Emissão de boletos bancários</ListItem>
                        <ListItem icon={HiCheckCircle}>Conciliação bancária</ListItem>
                    </List>
                </div>

                <a href="https://wa.me/558131262050?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20o%20BMWEB." target="_blank" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600">
                    <span className="mx-1">saiba mais</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </a>
            </section>

            <section className="p-8 space-y-3 border-2 border-blue-400 rounded-xl flex flex-col justify-between invisible show-right">
                <span className="inline-block text-blue-500">
                    <TbReportAnalytics className="w-8 h-8" />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize">DATACASH - DATA PÃO</h1>

                <p className="text-gray-500">
                    Solução local
                    <abbr title="Enterprise Resource Planning - Planejamento dos Recursos da Empresa">
                        &nbsp;ERP&nbsp;
                    </abbr>
                    desenvolvida para facilitar a gestão completa do seu negócio. Permite controlar desde a entrada de mercadorias até a finalização das vendas, garantindo total controle sobre o estoque e operações.
                </p>
                <HR />

                <h1 className="text-xl font-semibold text-gray-700 capitalize">Principais Funcionalidades</h1>

                <List>
                    <ListItem icon={HiCheckCircle}>Controle de estoque</ListItem>
                    <ListItem icon={HiCheckCircle}>Gestão de vendas</ListItem>
                    <ListItem icon={HiCheckCircle}>Emissão de Notas Fiscais Eletrônicas</ListItem>
                    <ListItem icon={HiCheckCircle}>Controle de produção</ListItem>
                    <ListItem icon={HiCheckCircle}>Geração de etiquetas de produtos</ListItem>
                    <ListItem icon={HiCheckCircle}>Emissão de boletos bancários</ListItem>
                    <ListItem icon={HiCheckCircle}>Gestão financeira e de contas</ListItem>
                    <ListItem icon={HiCheckCircle}>Geração de relatórios detalhados</ListItem>
                    <ListItem icon={HiCheckCircle}>Exportação de arquivos fiscais</ListItem>
                </List>

                <a href="https://wa.me/558131262050?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20o%20DATACASH." target="_blank" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600">
                    <span className="mx-1">saiba mais</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </a>
            </section>

            <section className="p-8 space-y-3 border-2 border-blue-400 rounded-xl flex flex-col justify-between invisible show-left">
                <span className="inline-block text-blue-500">
                    <CiBarcode className="w-8 h-8" />
                </span>
                <h1 className="text-xl font-semibold text-gray-700 capitalize">BM PDV</h1>

                <p className="text-gray-500">
                    O BM PDV é uma solução completa de ponto de venda (PDV), compatível com Android, Windows e maquininhas de cartão.
                    Ideal para empresas que buscam agilidade, controle e praticidade nas operações de venda.
                    O sistema oferece recursos avançados como controle de comandas, emissão de <abbr title="Documento Auxiliar de Venda">DAV</abbr>,
                    notas manuais (<abbr title="Documento Auxiliar de Venda">D1</abbr>), além de suporte à NFC-e e SAT.
                </p>

                <HR />

                <h1 className="text-xl font-semibold text-gray-700 capitalize">Principais Funcionalidades</h1>

                <List>
                    <ListItem icon={HiCheckCircle}>
                        Emissão de <abbr title="Nota Fiscal do Consumidor Eletrônica">&nbsp;NFC-e</abbr> /
                        <abbr title="Nota Fiscal Eletrônica"> NF-e</abbr>
                    </ListItem>
                    <ListItem icon={HiCheckCircle}>
                        Geração de <abbr title="Documento Auxiliar de Venda">&nbsp;DAV</abbr>
                    </ListItem>
                    <ListItem icon={HiCheckCircle}>
                        Controle completo de mesas/comandas
                    </ListItem>
                    <ListItem icon={HiCheckCircle}>
                        Integração com catracas eletrônicas
                    </ListItem>
                    <ListItem icon={HiCheckCircle}>
                        Integração com balanças eletrônicas
                    </ListItem>
                    <ListItem icon={HiCheckCircle}>
                        Módulo especializado para armazéns
                    </ListItem>
                    <ListItem icon={HiCheckCircle}>
                        Integração com os principais marketplaces do mercado
                    </ListItem>
                    <ListItem icon={HiCheckCircle}>
                        Recebimento de pagamentos em diversos meios
                    </ListItem>
                    <ListItem icon={HiCheckCircle}>
                        Consulta de preços e controle de estoque em tempo real
                    </ListItem>
                </List>


                <a href="https://wa.me/558131262050?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20o%20BMPDV." target="_blank" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600">
                    <span className="mx-1">saiba mais</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </section>

            <section className="p-8 space-y-3 border-2 border-blue-400 rounded-xl flex flex-col justify-between invisible show-left">
                <span className="inline-block text-blue-500">
                    <HiOutlineDocumentReport className="w-8 h-8" />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize">BM DASHBOARD</h1>

                <p className="text-gray-500">
                    Com o BM Dashboard em seu celular, você tem acesso a todas as informações importantes em tempo real, onde quer que esteja.
                </p>

                <HR />

                <h1 className="text-xl font-semibold text-gray-700 capitalize">Principais Funcionalidades</h1>

                <List>
                    <ListItem icon={HiCheckCircle}>Dashboard com acesso a informações atualizadas em tempo real</ListItem>
                    <ListItem icon={HiCheckCircle}>Análises estratégicas facilitadas por visualização integrada</ListItem>
                    <ListItem icon={HiCheckCircle}>Substituição de relatórios manuais por dados automatizados</ListItem>
                    <ListItem icon={HiCheckCircle}>Ferramentas para otimizar a gestão operacional e estratégica</ListItem>
                </List>

                <a href="https://wa.me/558131262050?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20o%20BMDASHBOARD." target="_blank" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600">
                    <span className="mx-1">saiba mais</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </a>
            </section>

            <section className="p-8 space-y-3 border-2 border-blue-400 rounded-xl flex flex-col justify-between invisible show-right">
                <span className="inline-block text-blue-500">
                    <CiBarcode className="w-8 h-8" />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize">ARPP</h1>

                <p className="text-gray-500">
                    O ARPP é um sistema voltado para gestão de produções e controle de qualidade.
                </p>

                <HR />

                <h1 className="text-xl font-semibold text-gray-700 capitalize">Principais Funcionalidades</h1>

                <List>
                    <ListItem icon={HiCheckCircle}>Gerenciamento de Produção</ListItem>
                    <ListItem icon={HiCheckCircle}>Consulta de Estoque</ListItem>
                    <ListItem icon={HiCheckCircle}>Consulta de Validades de Produtos Pesaveis</ListItem>
                </List>

                <a href="https://wa.me/558131262050?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20o%20ARPP." target="_blank" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600">
                    <span className="mx-1">saiba mais</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </a>
            </section>

            <section className="p-8 space-y-3 border-2 border-blue-400 rounded-xl flex flex-col justify-between invisible show-right">
                <span className="inline-block text-blue-500">
                    <CiBarcode className="w-8 h-8" />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize">BM COLETOR</h1>

                <p className="text-gray-500">
                    Facilita o seu processo de inventário de estoque.
                </p>

                <HR />

                <h1 className="text-xl font-semibold text-gray-700 capitalize">Principais Funcionalidades</h1>

                <List>
                    <ListItem icon={HiCheckCircle}>Controle de Estoque</ListItem>
                    <ListItem icon={HiCheckCircle}>Consulta de Estoque</ListItem>
                </List>

                <a href="https://wa.me/558131262050?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20o%20BMDATACASH." target="_blank" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600">
                    <span className="mx-1">saiba mais</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </a>
            </section>
        </section>
    );
}

export default Segmentos;