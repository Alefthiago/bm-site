'use client';
//      UTIL.       //
import Image from "next/image";
// import { Carousel } from "flowbite-react";

import { Tabs } from "flowbite-react";
import { FaEye } from "react-icons/fa"
import { BsBullseye, BsHeartFill } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
// import { HiAdjustments, HiUserCircle } from "react-icons/hi";
// import { MdDashboard } from "react-icons/md";

import { useEffect, useState } from "react";

//     /UTIL.       //

const pageCompany = () => {
    const [tabsP, setTab] = useState(1);

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.intersectionRatio > 0) {
    //                 entry.target.classList.add('init-hidden-off');
    //             }
    //         });
    //     }, {
    //         threshold: [0]
    //     });

    //     Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
    //         observer.observe(element);
    //     });
    // }, []);


    return (
        <section className="flex min-h-screen flex-col items-center">
            <section>
                <div className="container px-6 py-10 mx-auto">
                    <p className="text-xl font-medium text-blue-500 ">A Empresa</p>

                    <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
                        Quem Somos
                    </h1>

                    <div className="lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-center lg:w-1/2 lg:mx-6 w-full h-52 rounded-lg lg:h-[36rem]" src="./bm/BM.svg" alt="" />

                        <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                            <p className="text-5xl font-semibold text-blue-500 ">“</p>

                            <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl lg:w-96">
                                A Melhor Solução para o Seu Negocio aqui
                            </h1>

                            <p className="max-w-lg mt-6 text-gray-500">
                                A BM Informática surgiu em 1998 com o ideal de transformar a informática numa ferramenta estratégica para o sucesso dos negócios de seus clientes, através de assessoria, suporte e desenvolvimento de sistemas com modernas tecnologias, visando contribuir para a efetividade de seus resultados.
                            </p>

                            <h3 className="mt-6 text-lg font-medium text-blue-500">Solicite demonstrações sem compromisso</h3>
                            <p className="text-gray-600 flex items-center">
                                <FaPhoneVolume /> &nbsp; (81) 9 9921-1481
                            </p>
                            <p className="text-gray-600 flex items-center">
                                <FaPhoneVolume /> &nbsp; (81) 9 9921-1481
                            </p>
                            <p className="text-gray-600 flex items-center">
                                <FaPhoneVolume /> &nbsp; (81) 9 9921-1481
                            </p>
                            <p className="text-gray-600 flex items-center">
                                <IoLogoWhatsapp /> &nbsp; (81) 9 8804-9715
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="skew-c"></div>

            {/*         MISSAO, VISAO E VALORES         */}
            <section className="w-full bg-[#206BA5]">
                <section>
                    <div className="container px-6 py-10 mx-auto">
                        <h1 className="text-2xl font-semibold text-center text-[#F8F8F8] capitalize lg:text-3xl">Nossos Princípios</h1>

                        <div className="flex justify-center mx-auto mt-6">
                            <span className="inline-block w-40 h-1 bg-[#D67229] rounded-full"></span>
                            <span className="inline-block w-3 h-1 mx-1 bg-[#D67229] rounded-full"></span>
                            <span className="inline-block w-1 h-1 bg-[#D67229] rounded-full"></span>
                        </div>


                        <p className="max-w-2xl mx-auto my-6 text-center text-[#F8F8F8]">
                            Acreditamos no poder da transformação através da inovação e qualidade. Estamos comprometidos em oferecer soluções que atendem às expectativas dos nossos clientes, com ética, transparência e dedicação.
                        </p>

                        <div className="flex items-center justify-center">
                            <div className="flex items-center p-1 border border-[#D67229] rounded-xl">
                                <button onClick={() => setTab(0)} className={`px-4 py-2 text-sm font-medium ${tabsP == 0 ? 'text-[#F8F8F8]' : 'text-[#D67229]'} capitalize ${tabsP == 0 ? 'bg-[#D67229]' : ''} md:py-3 rounded-xl md:px-12`}>Missão</button>
                                <button onClick={() => setTab(1)} className={`px-4 py-2 mx-4 text-sm font-medium ${tabsP == 1 ? 'text-[#F8F8F8]' : 'text-[#D67229]'} ${tabsP == 1 ? 'bg-[#D67229]' : ''} capitalize transition-colors duration-300 md:py-3 focus:outline-none hover:bg-[#D67229] hover:text-white rounded-xl md:mx-8 md:px-12`}>Visão</button>
                                <button onClick={() => setTab(2)} className={`px-4 py-2 text-sm font-medium ${tabsP == 2 ? 'text-[#F8F8F8]' : 'text-[#D67229]'} ${tabsP == 2 ? 'bg-[#D67229]' : ''} capitalize transition-colors duration-300 md:py-3 focus:outline-none hover:bg-[#D67229] hover:text-white rounded-xl md:px-12`}>Valores</button>
                            </div>
                        </div>

                        <section className={`${tabsP == 0 ? '' : 'hidden'}`}>
                            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                                <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-[#F8F8F8] xl:text-3xl">
                                    Missão
                                </h2>

                                <p className="max-w-4xl mt-6 text-center text-[#F8F8F8]">
                                    Transformar a informática em uma ferramenta estratégica para o sucesso dos negócios de nossos clientes, oferecendo assessoria especializada, suporte contínuo e desenvolvimento de sistemas com tecnologias modernas.
                                </p>
                            </div>
                        </section>

                        <section className={`${tabsP == 1 ? '' : 'hidden'}`}>
                            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                                <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-[#F8F8F8] xl:text-3xl">
                                    Visão
                                </h2>

                                <p className="max-w-4xl mt-6 text-center text-[#F8F8F8]">
                                    Ser referência em soluções tecnológicas inovadoras, reconhecida pela excelência em nossos serviços e pelo impacto positivo e significativo nos resultados dos nossos clientes, promovendo a transformação digital e o crescimento sustentável dos negócios que atendemos.
                                </p>
                            </div>
                        </section>

                        <section className={`${tabsP == 2 ? '' : 'hidden'}`}>
                            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                                <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-[#F8F8F8] xl:text-3xl">
                                    Valores
                                </h2>

                                <p className="max-w-4xl mt-6 text-center text-[#F8F8F8]">
                                    Compromisso inabalável com a qualidade, constante inovação em nossas soluções, atendimento personalizado que atende às necessidades específicas de cada cliente, garantindo sucesso e satisfação.
                                </p>
                            </div>
                        </section>
                    </div>
                </section>
            </section>
            {/*        /MISSAO, VISAO E VALORES         */}

            <div className="skew-cc"></div>

            <section className="container px-6 py-10">
                <section>
                    <div className="h-[32rem]">
                        <div className="container px-6 py-10 mx-auto">
                            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">Prêmios</h1>

                            <div className="flex justify-center mx-auto mt-6">
                                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                                <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                                <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                            </div>

                            <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                            </p>
                        </div>
                    </div>
                </section>
            </section>

        </section>
    );
}

export default pageCompany;
