'use client'
import Image from "next/image";


let h3_text = "text-5xl font-bold text-center";
let titulo = "text-xl font-bold text-center";
let informativo = "text-[#208da5]";
let info = "text-[#208da5] text-sm";
let container_empresa = "flex flex-row justify-between pt-12 w-full max-w-screen-lg lg:w-[1000px]  w-[900px] overflow-hidden";
let div_inner = "pl-5 flex flex-col justify-center items-center gap-5";
let section_valores = "text-justify w-1/3";

import { useEffect } from 'react';

const pageCompany = () => {
    // Função para ajustar a visibilidade das divs nas seções 'section_valores'
    const ajustarDivsResponsivo = () => {
        // Verifica se a largura da tela é menor que 1024 pixels
        if (window.innerWidth < 1024) {
            // Seleciona todas as seções com a classe 'section_valores'
            const secoesValores = document.querySelectorAll('.section_valores');

            // Itera sobre cada seção de valores
            secoesValores.forEach((secao) => {
                // Seleciona todas as divs internas da seção
                const divsInternas = secao.querySelectorAll('.div_inner');

                // Oculta todas as divs internas, exceto a do meio (índice 1)
                divsInternas.forEach((div, index) => {
                    if (index !== 1) {
                        div.style.overflow = 'hidden';
                        
                    }
                });
            });
        }
    };

    // Executa a função de ajuste ao carregar a página e ao redimensionar a janela
    useEffect(() => {
        ajustarDivsResponsivo();
        window.addEventListener('resize', ajustarDivsResponsivo);
        return () => window.removeEventListener('resize', ajustarDivsResponsivo);
    }, []);

    return (
        <section className="flex min-h-screen flex-col items-center pt-12 ">
            <section className="flex flex-col gap-5 w-full max-w-screen-lg ">
                <div className={`${h3_text}`}>
                    <h3>Quem Somos</h3>
                </div>
                <div className={`${informativo}`}>
                    <p>A BM Informática foi fundada em 1998 com a missão de transformar a informática em uma ferramenta estratégica para o sucesso dos negócios de seus clientes. Oferecemos assessoria especializada, suporte contínuo e desenvolvimento de sistemas utilizando as mais modernas tecnologias, sempre com o objetivo de maximizar a efetividade dos resultados.</p>
                </div>
            </section>
            <section className={`${container_empresa}`}>
                <section className={`${section_valores} pt-10`}>
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
                <section className={`${section_valores} pt-10`}>
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
            </section>
            <section className={'flex justify-center items-center pt-12'}>
                    <div className={''}>
                        <Image src={'/BM.png'} alt={'Logo BM Informatica'} width={300} height={100} />
                    </div>
                </section>
        </section>
    );
}

export default pageCompany;
