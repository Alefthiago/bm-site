//      UTIL.       //
import { Button, Modal, Timeline } from "flowbite-react";
import { HiCheckCircle } from "react-icons/hi";
//     /UTIL.       //

const DatacashModal = (props) => {
    return (
        <Modal dismissible show={props.modalDatacash} onClose={() => props.setModalDatacash(false)}>
            <Modal.Header>
                <span className="text-xl font-semibold text-gray-900">Datacash</span>
            </Modal.Header>
            <Modal.Body>
                <div className="space-y-6">
                    <p className="text-base leading-relaxed text-gray-700">
                        O <strong>DATACASH</strong> é uma solução integrada para administrar seu negócio. Com ele, você controla desde a compra do produto até o momento da concretização da venda, permitindo o total controle do estoque.
                    </p>
                    <p className="text-base leading-relaxed text-gray-700">
                        O módulo financeiro permite gerenciar contas a pagar e a receber, além de acompanhar o resultado operacional da empresa em tempo real. O software é preparado para atender à legislação vigente, incluindo PAF-ECF, NFC-e, NF-e, SPED Fiscal, e muito mais.
                    </p>
                    <p className="text-base leading-relaxed text-gray-700">
                        Com uma interface intuitiva e suporte multiusuário, o DATACASH oferece uma experiência simplificada e eficiente.
                    </p>
                </div>

                {/* Módulos do Sistema */}
                <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Principais Módulos do Sistema</h2>
                    <Timeline>
                        <Timeline.Item>
                            <Timeline.Point icon={HiCheckCircle} className="text-blue-600" />
                            <Timeline.Content>
                                <Timeline.Title className="font-semibold text-gray-800">
                                    Estoque
                                </Timeline.Title>
                                <Timeline.Body className="text-sm text-gray-600">
                                    Completa gestão do estoque, permitindo ao usuário o controle pelo setor da empresa (loja, produção e depósito), formação de preços, planejamento de compras, entrada de nota pelo XML, cadastro de clientes, fornecedores, promoções, cotações com fornecedores, curva ABC, rentabilidade de produtos e muito mais.
                                </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                        <Timeline.Item>
                            <Timeline.Point icon={HiCheckCircle} className="text-green-600" />
                            <Timeline.Content>
                                <Timeline.Title className="font-semibold text-gray-800">
                                    Fidelização de Clientes/Correntistas
                                </Timeline.Title>
                                <Timeline.Body className="text-sm text-gray-600">
                                    Controle de fornecimento para clientes correntistas (pessoas físicas e jurídicas) durante o mês, com geração de fatura no fechamento do período, geração de boleto bancário, limite por cliente e bloqueio por atraso. Nosso software também possui o módulo de fidelização de clientes, permitindo a gestão do relacionamento com os clientes através de um clube de fidelidade, onde o cliente acumula pontos e resgata prêmios.
                                </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                        <Timeline.Item>
                            <Timeline.Point icon={HiCheckCircle} className="text-yellow-600" />
                            <Timeline.Content>
                                <Timeline.Title className="font-semibold text-gray-800">
                                    PDV - Frente de Loja
                                </Timeline.Title>
                                <Timeline.Body className="text-sm text-gray-600">
                                    Controle de delivery, encomendas (com possibilidade de emissão de relatório de produtos encomendados para planejamento da produção), controle de comandas eletrônicas, integração com catracas de controle de acesso automatizado, integração com balanças eletrônicas, impressão de pedido da lanchonete para a cozinha separado por setor, comissão por atendente e homologado para TEF. Atende à legislação vigente.
                                </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                        <Timeline.Item>
                            <Timeline.Point icon={HiCheckCircle} className="text-purple-600" />
                            <Timeline.Content>
                                <Timeline.Title className="font-semibold text-gray-800">
                                    Financeiro / Contas
                                </Timeline.Title>
                                <Timeline.Body className="text-sm text-gray-600">
                                    Controle de contas a pagar e a receber, fluxo de caixa, controle de cartões de crédito, controle de contas correntes, integração com a cobrança bancária (remessa e retorno), emissão de carta de cobrança e demonstrativos de resultados.
                                </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                        <Timeline.Item>
                            <Timeline.Point icon={HiCheckCircle} className="text-teal-600" />
                            <Timeline.Content>
                                <Timeline.Title className="font-semibold text-gray-800">
                                    Aplicativo de Vendas
                                </Timeline.Title>
                                <Timeline.Body className="text-sm text-gray-600">
                                    Saia na frente da concorrência e tenha o aplicativo de vendas da sua empresa para delivery, retirada em loja, encomendas e fidelidade totalmente integrado com o nosso software.
                                </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                        <Timeline.Item>
                            <Timeline.Point icon={HiCheckCircle} className="text-red-600" />
                            <Timeline.Content>
                                <Timeline.Title className="font-semibold text-gray-800">
                                    Outras Funcionalidades
                                </Timeline.Title>
                                <Timeline.Body className="text-sm text-gray-600">
                                    Gerador de relatórios, exportação para Excel, geração de arquivos fiscais, gerador de etiquetas, auditoria de frente de loja, formação de kits e muito mais.
                                </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>

                    </Timeline>
                </div>
            </Modal.Body>
            <Modal.Footer className="flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:justify-between">
                <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <a href="https://wa.me/5581988049715" target="_blank">
                        <Button
                            color="blue"
                            onClick={() => props.setModalDatacash(false)}
                            className="w-full sm:w-auto"
                        >
                            Contato
                        </Button>
                    </a>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

export default DatacashModal;
