'use client';
// Util //
// import Globals from "@/components/globals";
import { Tabs } from "flowbite-react";
import { ListGroup } from "flowbite-react";
import { Accordion } from "flowbite-react";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
// Util. //

let barra = "lg:h-[5px] h-[3px] lg:w-[30%] w-[20%] bg-[#A55820] rounded-[7px] lg:mt-4 mt-3"
let titulo = "lg:text-3xl text-xl roboto roboto-bold text-[#316994]"

const PageLinks = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <section className="flex min-h-screen flex-col items-center pt-12 px-4">
            <h1 className=" text-center text-3xl roboto roboto-bold ">Suporte</h1>
            <div className="overflow-x-auto w-full mt-10">
                <Tabs aria-label="Full width tabs" variant="fullWidth">


                    <Tabs.Item active title="Datacash">
                        <Accordion collapseAll>
                            <Accordion.Panel>
                                <Accordion.Title>Certificado Digital</Accordion.Title>
                                <Accordion.Content>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                                        dropdowns, modals, navbars, and more.
                                    </p>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Check out this guide to learn how to&nbsp;
                                        <a
                                            href="https://flowbite.com/docs/getting-started/introduction/"
                                            className="text-cyan-600 hover:underline dark:text-cyan-500"
                                        >
                                            get started&nbsp;
                                        </a>
                                        and start developing websites even faster with components on top of Tailwind CSS.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title>Envio/Exportar de XML pelo o DATACASH</Accordion.Title>
                                <Accordion.Content>
                                    <div className="flex justify-center">
                                        <ListGroup className="w-full">
                                            {/* <ListGroup.Item onClick={() => alert('Profile clicked!')} active> */}
                                            <ListGroup.Item onClick={() => setOpenModal(true)}>
                                                Enviar XMLs por E-mail
                                                <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                                                    <Modal.Header>Enviar XMLs por E-mail</Modal.Header>
                                                    <Modal.Body>
                                                        <div className="">
                                                            <iframe src="https://flowbite-react.com/docs/components/modal" width="100%" height="600px"></iframe>
                                                            {/* <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                                                                companies around the world are updating their terms of service agreements to comply.
                                                            </p>
                                                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                                                                to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                                                                soon as possible of high-risk data breaches that could personally affect them.
                                                            </p> */}
                                                        </div>
                                                    </Modal.Body>
                                                    {/* <Modal.Footer>
                                                        <Button onClick={() => setOpenModal(false)}>I accept</Button>
                                                        <Button color="gray" onClick={() => setOpenModal(false)}>
                                                            Decline
                                                        </Button>
                                                    </Modal.Footer> */}
                                                </Modal>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Exportar XMLs para pasta
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </div>
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
                                <Accordion.Content>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                                        Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                                        components, whereas Tailwind UI offers sections of pages.
                                    </p>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                                        technical reason stopping you from using the best of two worlds.
                                    </p>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                    <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                                        <li>
                                            <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                                Flowbite Pro
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://tailwindui.com/"
                                                rel="nofollow"
                                                className="text-cyan-600 hover:underline dark:text-cyan-500"
                                            >
                                                Tailwind UI
                                            </a>
                                        </li>
                                    </ul>
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                    </Tabs.Item>


                    <Tabs.Item title="NFC-e">
                        This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
                        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                        control the content visibility and styling.
                    </Tabs.Item>
                    <Tabs.Item title="BmWeb">
                        This is <span className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</span>.
                        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                        control the content visibility and styling.
                    </Tabs.Item>
                    <Tabs.Item title="BMPDV" >
                        This is <span className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</span>.
                        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                        control the content visibility and styling.
                    </Tabs.Item>
                    {/* <Tabs.Item disabled title="Disabled">
                        Disabled content
                    </Tabs.Item> */}
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
        </section>
    );
}

export default PageLinks;