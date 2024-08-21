'use client';
//      UTIL.       //
import Image from "next/image";
// import { Carousel } from "flowbite-react";

import { Tabs } from "flowbite-react";
import { FaEye } from "react-icons/fa"
import { BsBullseye, BsHeartFill } from "react-icons/bs";
// import { HiAdjustments, HiUserCircle } from "react-icons/hi";
// import { MdDashboard } from "react-icons/md";

import { useEffect } from "react";

//     /UTIL.       //

//      STYLES.     //
// let h3_text = "text-5xl font-bold text-center";
// let informativo = " flex text-[#316994] pl-12 text-justify w-[90%] md:w-[100%]";
// let info = "text-[#316994] text-lg";
// let div_inner = "pl-5 flex flex-col justify-center items-center gap-5";
// let section_valores = "text-justify w-1/3";
// let container_empresa = "flex-row justify-between w-full pl-4 md:flex hidden pt-20";
let titulo = "text-xl font-bold text-center";
let div_inner_carrosel = "pl-5 flex flex-col justify-center items-center gap-1 h-[50%]";
let info_carrosel = "text-[#316994] text-sm text-center";
let svg_icon = "border-2 bg-[#A55820] rounded-full w-12 h-12 flex justify-center items-center"
//     /STYLES.     //

const pageCompany = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add('init-hidden-off');
                }
            });
        }, {
            threshold: [0]
        });

        Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
            observer.observe(element);
        });
    }, []);

    return (
        <section className="flex min-h-screen flex-col items-center gap-0 md:gap-12">
            {/*     DESKTOP     */}
            <section className="md:block hidden init-hidden hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer">
                <div className="max-w-6xl px-6">
                    <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                        <div className="absolute w-full bg-[#206BA5] -z-10 md:h-96 rounded-2xl"></div>
                        <div className="w-full p-6 bg-[#206BA5] md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                            <img className="md:block hidden h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="./bm/bmvdo.gif" alt="client photo" />
                            {/* <img className="h-24 w-24 rounded-full object-cover shadow-md md:hidden block" src={'./lgbranco.svg'} alt="client photo" /> */}
                            <div className="mt-2 md:mx-6">
                                <div>
                                    <p className="text-xl font-medium tracking-tight text-[#fffafa]">BM Informática</p>
                                    <p className="text-blue-200 ">Quem Somos</p>
                                </div>

                                <p className="mt-4 text-lg leading-relaxed text-[#fffafa]">
                                    A fundada em 1998 com a missão de transformar a informática em uma ferramenta estratégica para o sucesso dos negócios de seus clientes. Oferecemos assessoria especializada, suporte contínuo e desenvolvimento de sistemas utilizando as mais modernas tecnologias.
                                </p>
                            </div>
                        </div>
                    </main>
                </div>
            </section>
            {/*    /DESKTOP     */}

            {/*     MOBILE     */}
            <section>
                <div className="container px-6 py-16 mx-auto md:hidden block init-hidden">
                    <div className="items-center lg:flex">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h1 className="text-xl font-semibold text-gray-800">Quem Somos <br /> <span className="text-blue-500 text-4xl">BM Informática</span></h1>
                                <p className="mt-3 text-gray-600 dark:text-gray-400"> A fundada em 1998 com a missão de transformar a informática em uma ferramenta estratégica para o sucesso dos negócios de seus clientes. Oferecemos assessoria especializada, suporte contínuo e desenvolvimento de sistemas utilizando as mais modernas tecnologias.</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img className="md:mx-6 shadow-md h-[42rem] w-[26rem] rounded-2xl" src="./bm/bmvdo.gif" alt="client photo" />
                        </div>
                    </div>
                </div>
            </section>
            {/*    /MOBILE     */}

            {/* <section className="flex flex-col  w-full max-w-screen-lg gap-12 ">
                <div className={`${h3_text}`}>
                    <h3>Quem Somos</h3>
                </div>
                <div className={`${informativo}`}>
                    <p>A BM Informática foi fundada em 1998 com a missão de transformar a informática em uma ferramenta estratégica para o sucesso dos negócios de seus clientes. Oferecemos assessoria especializada, suporte contínuo e desenvolvimento de sistemas utilizando as mais modernas tecnologias, sempre com o objetivo de maximizar a efetividade dos resultados.</p>
                </div>
            </section> */}

            {/*         desktop.         */}
            <div className="items-center justify-center gap-8 text-center xl:flex-wrap xl:flex hidden w-full">
                <div className="w-full min-h-[400px] max-h-[400px] px-4 py-4 mt-6 bg-[#206BA5] rounded-lg shadow-lg md:w-1/4 hover:cursor-pointer init-hidden hover:scale-105 transition-transform duration-500 ease-in-out">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto text-[#fffafa] bg-[#A55820] rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-[#ffffff]" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="py-4 text-2xl font-semibold sm:text-xl text-[#fffafa]">
                        Missão
                    </h3>
                    <p className="py-4 text-md text-[#fffafa]">
                        Transformar a informática em uma ferramenta estratégica para o sucesso dos negócios de nossos clientes, oferecendo assessoria especializada, suporte contínuo e desenvolvimento de sistemas com tecnologias modernas.
                    </p>
                </div>

                <div className="w-full min-h-[400px] max-h-[400px] px-4 py-4 mt-6 bg-[#206BA5] rounded-lg shadow-lg md:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 hover:cursor-pointer init-hidden hover:scale-105 transition-transform duration-500 ease-in-out">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto text-[#fffafa] bg-[#A55820] rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill text-[#ffffff]" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="py-4 text-2xl font-semibold sm:text-xl text-[#fffafa]">
                        Visão
                    </h3>
                    <p className="py-4 text-md text-[#fffafa]">
                        Ser referência em soluções tecnológicas inovadoras, reconhecida pela excelência em nossos serviços e pelo impacto positivo e significativo nos resultados dos nossos clientes, promovendo a transformação digital e o crescimento sustentável dos negócios que atendemos.
                    </p>
                </div>

                <div className="w-full min-h-[400px] max-h-[400px] px-4 py-4 mt-6 bg-[#206BA5] rounded-lg shadow-lg md:w-1/4 hover:cursor-pointer init-hidden hover:scale-105 transition-transform duration-500 ease-in-out">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto text-[#fffafa] bg-[#A55820] rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bar-chart-fill text-[#ffffff]" viewBox="0 0 16 16">
                                <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="py-4 text-2xl font-semibold sm:text-xl text-[#fffafa]">
                        Valores
                    </h3>
                    <p className="py-4 text-md text-[#fffafa]">
                        Compromisso inabalável com a qualidade, constante inovação em nossas soluções, atendimento personalizado que atende às necessidades específicas de cada cliente, garantindo sucesso e satisfação.
                    </p>
                </div>
            </div>

            <div className="overflow-x-auto p-10 xl:hidden block">
                <Tabs aria-label="Full width tabs" variant="fullWidth">
                    <Tabs.Item title="Visão" icon={FaEye}>
                        <div className="p-4 text-center py-7 px-5 init-hidden">
                            <h1 className="text-xl font-bold text-gray-800">
                                Visão
                            </h1>
                            <p className="mt-2 text-gray-500">
                                Transformar a informática em uma poderosa ferramenta estratégica, que impulsione o sucesso dos negócios de nossos clientes. Oferecemos assessoria especializada, suporte contínuo e desenvolvimento de sistemas, utilizando tecnologias de ponta para garantir soluções inovadoras e eficazes. Nosso compromisso é proporcionar um diferencial competitivo, ajudando as empresas a alcançarem seus objetivos com eficiência e excelência.
                            </p>
                            {/* <a className="mt-3 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                                Go somewhere
                            </a> */}
                        </div>
                    </Tabs.Item>

                    <Tabs.Item active title="Missão" icon={BsBullseye}>
                        <div className="p-4 text-center py-7 px-5 init-hidden">
                            <h1 className="text-xl font-bold text-gray-800">
                                Missão
                            </h1>
                            <p className="mt-2 text-gray-500">
                                Ser referência em soluções tecnológicas inovadoras, reconhecida pela excelência em nossos serviços e pelo impacto positivo e significativo nos resultados dos nossos clientes, promovendo a transformação digital e o crescimento sustentável dos negócios que atendemos.
                            </p>
                        </div>
                    </Tabs.Item>

                    <Tabs.Item title="Valores" icon={BsHeartFill}>
                        <div className="p-4 text-center py-7 px-5 init-hidden">
                            <h1 className="text-xl font-bold text-gray-800">
                                Valores
                            </h1>
                            <p className="mt-2 text-gray-500">
                                Nosso compromisso inabalável com a qualidade é a base de tudo o que fazemos. Buscamos constante inovação em nossas soluções, sempre focados em superar as expectativas. Oferecemos um atendimento personalizado que compreende e atende às necessidades específicas de cada cliente, garantindo não apenas o sucesso, mas também a plena satisfação em cada interação. Nosso objetivo é ser mais que um fornecedor, mas um verdadeiro parceiro no crescimento e sucesso de nossos clientes.
                            </p>
                        </div>
                    </Tabs.Item>
                </Tabs>
            </div>

            {/* <section className={`${container_empresa}`}>
                <section className={`${section_valores}`}>
                    <div className={`${div_inner}`}>
                        <div className="border-2 bg-[#A55820] rounded-full w-12 h-12 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-[#ffffff]" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </div>
                        <h1 className={`${titulo}`}>Missão</h1>
                        <p className={`${info}`}>
                            Transformar a informática em uma ferramenta estratégica para o sucesso dos negócios de nossos clientes, oferecendo assessoria especializada, suporte contínuo e desenvolvimento de sistemas com tecnologias modernas.
                        </p>
                    </div>
                </section>
                <section className={`${section_valores}`}>
                    <div className={`${div_inner}`}>
                        <div className="border-2 bg-[#A55820] rounded-full w-12 h-12 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill text-[#ffffff]" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                            </svg>
                        </div>
                        <h1 className={`${titulo}`}>Visão</h1>
                        <p className={`${info}`}>
                            Ser referência em soluções tecnológicas inovadoras, reconhecida pela excelência em nossos serviços e pelo impacto positivo e significativo nos resultados dos nossos clientes, promovendo a transformação digital e o crescimento sustentável dos negócios que atendemos.
                        </p>
                    </div>
                </section>
                <section className={`${section_valores}`}>
                    <div className={`${div_inner}`}>
                        <div className="border-2 bg-[#A55820] rounded-full w-12 h-12 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bar-chart-fill text-[#ffffff]" viewBox="0 0 16 16">
                                <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
                            </svg>
                        </div>
                        <h1 className={`${titulo}`}>Valores</h1>
                        <p className={`${info}`}>
                            Compromisso inabalável com a qualidade, constante inovação em nossas soluções, atendimento personalizado que atende às necessidades específicas de cada cliente e um foco contínuo na maximização da efetividade dos resultados, garantindo sucesso e satisfação.
                        </p>
                    </div>
                </section>
            </section> */}
            {/*        /desktop.         */}

            {/*         mobile.         */}
            {/* <section className="w-full 2xl:hidden">
                <div className="h-80">
                    <Carousel slideInterval={2000} leftControl rightControl >
                        <div className="flex  items-center justify-center bg-re w-[80%]">
                            <section className="w-[80%]">
                                <div className={`${div_inner_carrosel}`}>
                                    <div className={`${svg_icon}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-[#ffffff]" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                    <h1 className={`${titulo}`}>Missão</h1>
                                    <p className={`${info_carrosel}`}>
                                        Transformar a informática em uma ferramenta estratégica para o sucesso dos negócios de nossos clientes, oferecendo assessoria especializada, suporte contínuo e desenvolvimento de sistemas com tecnologias modernas.
                                    </p>
                                </div>
                            </section>
                        </div>
                        <div className="flex h-full items-center justify-center w-[70%] pr-4">
                            <section >
                                <div className={`${div_inner_carrosel}`}>
                                    <div className="border-2 bg-[#A55820] rounded-full w-12 h-12 flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill text-[#ffffff]" viewBox="0 0 16 16">
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                                        </svg>
                                    </div>
                                    <h1 className={`${titulo}`}>Visão</h1>
                                    <p className={`${info_carrosel}`}>
                                        Ser referência em soluções tecnológicas inovadoras, reconhecida pela excelência em nossos serviços e pelo impacto positivo e significativo nos resultados dos nossos clientes, promovendo a transformação digital e o crescimento sustentável dos negócios que atendemos.
                                    </p>
                                </div>
                            </section>
                        </div>
                        <div className="flex h-full items-center justify-center w-[70%] pr-4">
                            <section >
                                <div className={`${div_inner_carrosel}`}>
                                    <div className="border-2 bg-[#A55820] rounded-full w-12 h-12 flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bar-chart-fill text-[#ffffff]" viewBox="0 0 16 16">
                                            <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
                                        </svg>
                                    </div>
                                    <h1 className={`${titulo}`}>Valores</h1>
                                    <p className={`${info_carrosel}`}>
                                        Compromisso inabalável com a qualidade, constante inovação em nossas soluções, atendimento personalizado que atende às necessidades específicas de cada cliente e um foco contínuo na maximização da efetividade dos resultados, garantindo sucesso e satisfação.
                                    </p>
                                </div>
                            </section>
                        </div>
                    </Carousel>
                </div>
            </section> */}
            {/*         mobile.         */}

            <section className={'flex justify-center items-center pb-8'}>
                <div className={''}>
                    <Image src={'./bm/BM.png'} alt={'Logo BM Informatica'} width={300} height={100} />
                </div>
            </section>
        </section>
    );
}

export default pageCompany;
