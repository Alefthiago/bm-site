'use client';
// Util //
// import Globals from "@/components/globals";

import { Tabs } from "flowbite-react";
import { ListGroup } from "flowbite-react";
import { Accordion } from "flowbite-react";
import { Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { HR } from "flowbite-react";
// Util. //

// let barra = "lg:h-[5px] h-[3px] lg:w-[30%] w-[20%] bg-[#A55820] rounded-[7px] lg:mt-4 mt-3"
// let titulo = "lg:text-3xl text-xl roboto roboto-bold text-[#316994]"

const PageLinks = () => {
    const [openModal, setOpenModal] = useState(false);
    const [tituloModal, setTituloModal] = useState('');

    const vModal = (state, tipo = null) => {
        if (tipo) {
            console.log(tipo);
            if (tipo === 'xml-email-datacash') {
                setTituloModal('Enviar XMLs por E-mail');
            } else if (tipo === 'xml-pasta-datacash') {
                setTituloModal('Exportar XMLs para Pasta');
            } else if (tipo === 'config-cert-datacash') {
                setTituloModal('Configuração do Certificado Digital');
            } else if (tipo === 'liberacao-sistema-datacash') {
                setTituloModal('Liberação do sistema');
            }
        }
        setOpenModal(state);
    };

    // useEffect(() => {
    //     setTituloModal(tituloModal);
    // }, [tituloModal]);

    return (
        <section className="flex min-h-screen flex-col items-center pt-12 px-4">
            <div className="w-full">
                <div className="w-full text-center">
                    <h1 className="text-4xl font-semibold font-sans text-[#0E0E0E]">
                        Suporte
                        {/* <span className="text-blue-500"> o Seu Negócio Aqui</span> */}
                    </h1>
                    <p className="mt-3 text-gray-600 font-sans">
                        Nossos profissionais,
                        especialistas em várias áreas
                        criam soluções que
                        transformam seu dia a dia com sistemas ERP/PAF-ECF/NFC-E Automação Comercial
                        Desenvolvimento Desktop, Web e Mobile.
                    </p>
                </div>
            </div>
            <div className="overflow-x-auto w-full">
                <Tabs className="p-1" aria-label="Tabs with icons" variant="underline">
                    <Tabs.Item active title="Geral">
                        <Accordion>
                            <Accordion.Panel active>
                                <Accordion.Title>Links Uteis</Accordion.Title>
                                <Accordion.Content>
                                    <HR.Text text="Suporte" />

                                    <ListGroup className="w-full">
                                        <ListGroup.Item href="https://download.teamviewer.com/download/version_12x/TeamViewerQS.exe" target="_blank" className="text-[#316994]">
                                            Suporte BM (<strong className="text-[#A55820]">Team ViewerQs</strong>)
                                        </ListGroup.Item>

                                        <ListGroup.Item href="https://desk.bminformatica.com.br/rustdesk-1.2.0.exe" target="_blank" className="text-[#316994]">
                                            Rust Desk (<strong className="text-[#A55820]">Win 8,9,10,11</strong>)
                                        </ListGroup.Item>

                                        <ListGroup.Item href="https://bit.ly/apkrustdesk1" target="_blank" className="text-[#316994] ">
                                            Rust Desk (<strong className="text-[#A55820]">Android</strong>)
                                        </ListGroup.Item>

                                        <ListGroup.Item href="https://bit.ly/hopapk1" target="_blank" className=" text-[#316994]">
                                            HopToDesk (<strong className="text-[#A55820]">Android</strong>)
                                        </ListGroup.Item>
                                    </ListGroup>

                                    <HR.Text text="Fiscal" />

                                    <ListGroup className="w-full">
                                        <ListGroup.Item href="http://www.sintegra.gov.br/" target="_blank" className=" text-[#316994] text-center">
                                            Consulta Sintegra
                                        </ListGroup.Item>

                                        <ListGroup.Item href="https://www.sped.fazenda.gov.br/spedfiscalserver/ConsultaContribuinte/Default.aspx" target="_blank" className=" text-[#316994] text-center">
                                            Perfil Sped
                                        </ListGroup.Item>

                                        <ListGroup.Item href="https://www.sefaz.pe.gov.br/SitePages/Home.aspx" target="_blank" className=" text-[#316994] text-center ">
                                            Sefaz PE
                                        </ListGroup.Item>

                                        <ListGroup.Item href="https://www.nfe.fazenda.gov.br/portal/principal.aspx" target="_blank" className=" text-[#316994] text-center ">
                                            Disponibilidade da NFE
                                        </ListGroup.Item>

                                        <ListGroup.Item href="https://www8.receita.fazenda.gov.br/simplesnacional/aplicacoes.aspx?id=21" target="_blank" className=" text-[#316994] text-center ">
                                            Consulta Simples Nacional
                                        </ListGroup.Item>

                                        <ListGroup.Item href="https://www.sefaz.pe.gov.br/Legislacao/Tributaria/Documents/Legislacao/Tabelas/CFOP.htm" target="_blank" className=" text-[#316994] text-center">
                                            Tabela de CFOP
                                        </ListGroup.Item>

                                        <ListGroup.Item href="http://www.nfce.se.gov.br/portal/painelMonitor.jsp" target="_blank" className=" text-[#316994] text-center">
                                            Disponibilidade NFCE
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Content>
                            </Accordion.Panel>

                            <Accordion.Panel>
                                <Accordion.Title>Liberação do Sistema</Accordion.Title>
                                <Accordion.Content>
                                    <ListGroup className="w-full">
                                        <ListGroup.Item onClick={() => vModal(true, 'liberacao-sistema-datacash')} className="text-[#316994]">
                                            Liberação do sistema
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                    </Tabs.Item>

                    <Tabs.Item title="Datacash">
                        <Accordion collapseAll>
                            <Accordion.Panel>
                                <Accordion.Title>Certificado Digital</Accordion.Title>
                                <Accordion.Content>
                                    <ListGroup className="w-full">
                                        <ListGroup.Item onClick={() => vModal(true, 'config-cert-datacash')}>
                                            Configuração do Certificado Digital
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Content>
                            </Accordion.Panel>

                            <Accordion.Panel>
                                <Accordion.Title>Envio/Exportar de XML</Accordion.Title>
                                <Accordion.Content>
                                    <div className="flex justify-center">
                                        <ListGroup className="w-full">
                                            <ListGroup.Item onClick={() => vModal(true, 'xml-email-datacash')}>
                                                Enviar XMLs por E-mail
                                            </ListGroup.Item>
                                            <ListGroup.Item onClick={() => vModal(true, 'xml-pasta-datacash')}>
                                                Exportar XMLs para Pasta
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </div>
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                    </Tabs.Item>

                    <Tabs.Item title="NFC-e">
                        <Accordion collapseAll>
                            <Accordion.Panel>
                                <Accordion.Title>Certificado Digital</Accordion.Title>
                                <Accordion.Content>
                                    <ListGroup className="w-full">
                                        <ListGroup.Item onClick={() => vModal(true, 'config-cert-datacash')}>
                                            Configuração do Certificado Digital
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Content>
                            </Accordion.Panel>

                            <Accordion.Panel>
                                <Accordion.Title>Ativar/Desativar Contingência</Accordion.Title>
                                <Accordion.Content>
                                    <div className="flex justify-center">
                                        <ListGroup className="w-full">
                                            <ListGroup.Item onClick={() => vModal(true, 'xml-email-datacash')}>
                                                Ativar Contingência
                                            </ListGroup.Item>
                                            <ListGroup.Item onClick={() => vModal(true, 'xml-pasta-datacash')}>
                                                Desativar Contingência
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </div>
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                    </Tabs.Item>

                    <Tabs.Item title="BmWeb">
                        <Accordion collapseAll>
                            <Accordion.Panel>
                                <Accordion.Title>Certificado Digital</Accordion.Title>
                                <Accordion.Content>
                                    <ListGroup className="w-full">
                                        <ListGroup.Item onClick={() => vModal(true, 'config-cert-datacash')}>
                                            Configuração do Certificado Digital
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Content>
                            </Accordion.Panel>

                            <Accordion.Panel>
                                <Accordion.Title>Exportação de XMLs</Accordion.Title>
                                <Accordion.Content>
                                    <div className="flex justify-center">
                                        <ListGroup className="w-full">
                                            <ListGroup.Item onClick={() => vModal(true, 'xml-email-datacash')}>
                                                Exportar XMLs
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </div>
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                    </Tabs.Item>

                    <Tabs.Item title="BMPDV">
                        <Accordion collapseAll>
                            <Accordion.Panel>
                                <Accordion.Title>Ativar/Desativar Contingência</Accordion.Title>
                                <Accordion.Content>
                                    <div className="flex justify-center">
                                        <ListGroup className="w-full">
                                            <ListGroup.Item onClick={() => vModal(true, 'xml-email-datacash')}>
                                                Ativar Contingência
                                            </ListGroup.Item>
                                            <ListGroup.Item onClick={() => vModal(true, 'xml-pasta-datacash')}>
                                                Desativar Contingência
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </div>
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                    </Tabs.Item>
                </Tabs>
            </div>
            {/* <section className="w-full flex flex-col justify-center lg:gap-[5rem] gap-[3rem]">
                <h1 className=" text-center text-3xl roboto roboto-bold ">Links</h1>
                <div className="flex flex-row justify-center">
                    <div className={`${barra}`}></div>
                    <div className="lg:w-[10%]  w-[30%] text-center">
                        <h1 className={`lg:text-3xl text-xl roboto roboto-bold text-[#316994]`}>Fiscal</h1>
                    </div>
                    <div className={`${barra}`}></div>
                </div>
                <div className="flex flex-col justify-center gap-2">
                    <a href="https://www.sped.fazenda.gov.br/spedfiscalserver/ConsultaContribuinte/Default.aspx" target="_blank" className=" text-[#316994] text-center">Perfil Sped</a>
                    <a href="https://www.sefaz.pe.gov.br/SitePages/Home.aspx" target="_blank" className=" text-[#316994] text-center "> Sefaz PE</a>
                    <a href="https://www.nfe.fazenda.gov.br/portal/principal.aspx" target="_blank" className=" text-[#316994] text-center "> Disponibilidade da NFE</a>
                    <a href="https://www8.receita.fazenda.gov.br/simplesnacional/aplicacoes.aspx?id=21" target="_blank" className=" text-[#316994] text-center "> Consulta Simples Nacional</a>
                    <a href="https://www.sefaz.pe.gov.br/Legislacao/Tributaria/Documents/Legislacao/Tabelas/CFOP.htm" target="_blank" className=" text-[#316994] text-center"> Tabela de CFOP</a>
                    <a href="http://www.sintegra.gov.br/" target="_blank" className=" text-[#316994] text-center"> Consulta Sintegra</a>
                    <a href="http://www.nfce.se.gov.br/portal/painelMonitor.jsp" target="_blank" className=" text-[#316994] text-center"> Disponibilidade NFCE</a>
                </div>
                <div className="flex flex-row justify-center">
                    <div className={`${barra}`}></div>
                    <div className="lg:w-[10%]  w-[30%] text-center">
                        <h1 className={`lg:text-3xl text-xl roboto roboto-bold text-[#316994]`}>Suporte</h1>
                    </div>
                    <div className={`${barra}`}></div>
                </div>
                <div className="flex flex-col justify-center gap-2">
                    <a href="https://download.teamviewer.com/download/version_12x/TeamViewerQS.exe" target="_blank" className=" text-[#316994] text-center">Team ViewerQs (<strong className="text-[#A55820]"   >Novo</strong>)</a>
                    <a href="https://desk.bminformatica.com.br/rustdesk-1.2.0.exe" target="_blank" className=" text-[#316994] text-center "> Rust Desk (<strong className="text-[#A55820]">Win 8,9,10,11</strong>)</a>
                    <a href="https://bit.ly/apkrustdesk1" target="_blank" className=" text-[#316994] text-center "> Rust Desk (<strong className="text-[#A55820]">Android</strong>)</a>

                </div>
            </section> */}

            {/*     MODAIS      */}
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header id="modal-header">{tituloModal}</Modal.Header>
                <Modal.Body id="modal-body">
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                            companies around the world are updating their terms of service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                            to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                            soon as possible of high-risk data breaches that could personally affect them.
                        </p>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>I accept</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Decline
                    </Button>
                </Modal.Footer> */}
            </Modal>
            {/*    /MODAIS      */}
        </section>
    );
}

export default PageLinks;