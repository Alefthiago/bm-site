'use client';
//      UTIL.       //
import Image from "next/image";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import Globals from "@/components/globals";
import { useEffect, useState } from "react";

//     /UTIL.       //

const PageCompany = () => {
    const [tabsP, setTab] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setInterval(() => setIsLoading(false), 500);
    }, []);

    useEffect(() => {
        Globals.observer(setIsLoading);
    }, [isLoading]);


    return (
        <section className="flex min-h-screen flex-col items-center">
            {isLoading ? (
                <div className="flex justify-center items-center min-h-screen absolute">
                    <svg width="100" height="100" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-jump animate-infinite animate-duration-1000 animate-delay-500">
                        <path d="M157.176 4.55984C79.5307 22.1808 19.2564 84.9109 3.38029 161.347C-0.993846 182.415 -1.14817 221.375 3.06502 241.245C10.7793 277.628 27.6144 309.953 52.6179 336.391C92.9905 379.074 141.732 400.039 200.507 400C230.903 399.98 246.769 397.032 275.348 386.1C333.654 363.791 380.065 310.283 396.073 246.916C401.81 224.199 401.153 174.169 394.81 151.049C384.018 111.697 358.185 72.0998 327.141 47.3241C308.941 32.7981 273.659 12.5151 252.318 6.6706C223.777 -1.14538 179.683 -2.40663 157.176 4.55984ZM243.744 62.4187C263.899 72.2638 279.713 94.441 279.828 113.02C279.874 120.746 280.108 120.958 289.998 122.301C311.701 125.254 331.31 139.137 342.051 159.161C346.225 166.937 347.087 171.922 347.085 188.233C347.078 217.637 345.746 219.507 274.993 289.396C220.561 343.165 213.945 349.001 207.41 349.001C196.947 349.001 187.279 338.919 187.279 328.009C187.279 320.196 190.119 316.976 247.053 260.248C304.483 203.026 306.864 200.32 307.804 191.181C309.049 179.053 302.79 168.503 291.597 163.864C274.801 156.902 273.313 157.941 208.094 222.314C149.468 280.174 148.28 281.194 139.393 281.194C132 281.194 129.306 279.965 124.641 274.463C112.674 260.353 112.809 260.152 177.111 195.983C209.108 164.05 236.391 135.775 237.74 133.148C243.223 122.463 238.829 105.732 228.69 98.6866C223 94.7297 206.817 94.172 199.811 97.6914C197.163 99.0212 168.995 125.794 137.217 157.186C83.2787 210.467 78.9156 214.262 71.5674 214.262C60.7665 214.262 51.9102 205.476 51.9102 194.76C51.9102 187.456 55.8368 183.043 112.429 126.743C145.716 93.6317 176.655 64.6236 181.181 62.2853C201.352 51.8693 222.235 51.9131 243.744 62.4187Z" fill="#206BA5" />
                    </svg>
                </div>
            ) : (
                <>
                    <section>
                        <div className="container px-6 py-10 mx-auto invisible show-left">
                            <p className="text-xl text-blue-500 invisible  show-right inter-regular">A Empresa</p>

                            <h1 className="mt-2 text-2xl inter-bold text-gray-800 capitalize lg:text-3xl invisible show-left">
                                Quem Somos
                            </h1>

                            <div className="lg:-mx-6 lg:flex lg:items-center">
                                <img className="object-center lg:w-1/2 lg:mx-6 w-full h-52 rounded-lg lg:h-[36rem]" src="./bm/BM.svg" alt="" />

                                <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                                    <p className="text-5xl font-semibold text-blue-500">“</p>

                                    <h1 className="text-2xl inter-bold text-gray-800 lg:text-3xl lg:w-96">
                                        A Melhor Solução para o Seu Negocio aqui
                                    </h1>

                                    <p className="mt-6 text-gray-500 raleway-regular">
                                        A BM Informática surgiu em 1998 com o ideal de transformar a informática numa ferramenta estratégica para o sucesso dos negócios de seus clientes, através de assessoria, suporte e desenvolvimento de sistemas com modernas tecnologias, visando contribuir para a efetividade de seus resultados.
                                    </p>

                                    <h3 className="mt-6 text-lg font-medium text-blue-500 inter-bold">Solicite demonstrações sem compromisso</h3>
                                    <p className="text-gray-600 flex items-center raleway-regular">
                                        <FaPhoneVolume /> &nbsp; (81) 9 9921-1481
                                    </p>
                                    <p className="text-gray-600 flex items-center raleway-regular">
                                        <FaPhoneVolume /> &nbsp; (81) 9 9921-1481
                                    </p>
                                    <p className="text-gray-600 flex items-center raleway-regular">
                                        <FaPhoneVolume /> &nbsp; (81) 9 9921-1481
                                    </p>
                                    <p className="text-gray-600 flex items-center raleway-regular">
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
                                <h1 className="text-2xl inter-bold text-center text-[#F8F8F8] capitalize lg:text-3xl">Nossos Princípios</h1>

                                <div className="flex justify-center mx-auto mt-6">
                                    <span className="inline-block w-40 h-1 bg-[#D67229] rounded-full"></span>
                                    <span className="inline-block w-3 h-1 mx-1 bg-[#D67229] rounded-full"></span>
                                    <span className="inline-block w-1 h-1 bg-[#D67229] rounded-full"></span>
                                </div>


                                <p className="max-w-2xl mx-auto my-6 text-center raleway-bold text-[#F8F8F8] invisible show-bottom">
                                    Acreditamos no poder da transformação através da inovação e qualidade. Estamos comprometidos em oferecer soluções que atendem às expectativas dos nossos clientes, com ética, transparência e dedicação.
                                </p>

                                <div className="flex items-center justify-center invisible show-bottom">
                                    <div className="flex items-center p-1 border border-[#D67229] rounded-xl inter-regular">
                                        <button onClick={() => setTab(0)} className={`px-4 py-2 text-sm ${tabsP == 0 ? 'text-[#F8F8F8]' : 'text-[#D67229]'} capitalize ${tabsP == 0 ? 'bg-[#D67229]' : ''} md:py-3 rounded-xl md:px-12`}>Missão</button>
                                        <button onClick={() => setTab(1)} className={`px-4 py-2 mx-4 text-sm ${tabsP == 1 ? 'text-[#F8F8F8]' : 'text-[#D67229]'} ${tabsP == 1 ? 'bg-[#D67229]' : ''} capitalize transition-colors duration-300 md:py-3 focus:outline-none hover:bg-[#D67229] hover:text-white rounded-xl md:mx-8 md:px-12`}>Visão</button>
                                        <button onClick={() => setTab(2)} className={`px-4 py-2 text-sm ${tabsP == 2 ? 'text-[#F8F8F8]' : 'text-[#D67229]'} ${tabsP == 2 ? 'bg-[#D67229]' : ''} capitalize transition-colors duration-300 md:py-3 focus:outline-none hover:bg-[#D67229] hover:text-white rounded-xl md:px-12`}>Valores</button>
                                    </div>
                                </div>

                                <section className={`${tabsP == 0 ? '' : 'hidden'} invisible   show-right`}>
                                    <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                                        <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-[#F8F8F8] xl:text-3xl inter-bold">
                                            Missão
                                        </h2>

                                        <p className="max-w-4xl mt-6 text-center text-[#F8F8F8] raleway-regular">
                                            Transformar a informática em uma ferramenta estratégica para o sucesso dos negócios de nossos clientes, oferecendo assessoria especializada, suporte contínuo e desenvolvimento de sistemas com tecnologias modernas.
                                        </p>
                                    </div>
                                </section>

                                <section className={`${tabsP == 1 ? '' : 'hidden'} invisible   show-top`}>
                                    <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                                        <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-[#F8F8F8] xl:text-3xl inter-bold">
                                            Visão
                                        </h2>

                                        <p className="max-w-4xl mt-6 text-center text-[#F8F8F8] raleway-regular">
                                            Ser referência em soluções tecnológicas inovadoras, reconhecida pela excelência em nossos serviços e pelo impacto positivo e significativo nos resultados dos nossos clientes, promovendo a transformação digital e o crescimento sustentável dos negócios que atendemos.
                                        </p>
                                    </div>
                                </section>

                                <section className={`${tabsP == 2 ? '' : 'hidden'} invisible   show-left`}>
                                    <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                                        <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-[#F8F8F8] xl:text-3xl inter-bold">
                                            Valores
                                        </h2>

                                        <p className="max-w-4xl mt-6 text-center text-[#F8F8F8] raleway-regular">
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
                                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl inter-bold">Automação e Suporte Empresarial</h1>

                                    <div className="flex justify-center mx-auto mt-6">
                                        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                                        <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                                        <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                                    </div>

                                    <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 invisible   show-top raleway-regular">
                                        Sediada em Recife-PE, a BM Informática tem como principais atribuições o desenvolvimento de produtos e serviços voltados para automação de rotinas em empresas que desejam atender seus clientes com rapidez e segurança, bem como a preparação de treinamento, documentação, implantação, análise e suporte aos sistemas que desenvolve e comercializa. Dispomos de profissionais especializados nos diversos ramos de nossa atuação, que se propõem a demonstrar todas as facilidades que oferecemos, tanto em termos de qualidade como em preços.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </section>
                </>
            )}
        </section>
    );
}

export default PageCompany;
