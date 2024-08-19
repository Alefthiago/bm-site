'use client';
// Util //
// import Globals from "@/components/globals";

import { Tabs } from "flowbite-react";
import { ListGroup } from "flowbite-react";
import { Accordion } from "flowbite-react";
import { Modal } from "flowbite-react";
import { useState } from "react";
import ModalHorarios from "@/components/modalHorarios";
import { HR } from "flowbite-react";
// Util. //

// let barra = "lg:h-[5px] h-[3px] lg:w-[30%] w-[20%] bg-[#A55820] rounded-[7px] lg:mt-4 mt-3"
// let titulo = "lg:text-3xl text-xl roboto roboto-bold text-[#316994]"

const PageLinks = () => {
    const [openModal, setOpenModal] = useState(false);
    const [tituloModal, setTituloModal] = useState('');

    const [openModalHorario, setopenModalHorario] = useState(false);
    const [tituloModalHorario, setTituloModalHorario] = useState('');

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
                        Verifique nossos horários de funcionamento para ser atendido <span onClick={() => { setopenModalHorario (true) }} className="text-blue-500 hover:cursor-pointer">aqui!</span>
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

                            {/* <Accordion.Panel>
                                <Accordion.Title>Liberação do Sistema</Accordion.Title>
                                <Accordion.Content>
                                    <ListGroup className="w-full">
                                        <ListGroup.Item onClick={() => vModal(true, 'liberacao-sistema-datacash')} className="text-[#316994]">
                                            Liberação do sistema
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Content>
                            </Accordion.Panel> */}
                        </Accordion>
                    </Tabs.Item>
{/* 
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
                    </Tabs.Item> */}
                </Tabs>
            </div>
            {/*     MODAIS      */}
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header id="modal-header">{tituloModal}</Modal.Header>
                <Modal.Body id="modal-body">
                    <div className="space-y-6">
                        <iframe className="w-full" src="https://download.diguiinhoflix.com.br/DFlix%20Downloads/GIFs/XML%20WEB/Exportar%20XML%20WEB.gif"></iframe>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>I accept</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Decline
                    </Button>
                </Modal.Footer> */}
            </Modal>

            <ModalHorarios setOpenModal={setopenModalHorario} openModal={openModalHorario} />
            {/*    /MODAIS      */}
        </section>
    );
}

export default PageLinks;