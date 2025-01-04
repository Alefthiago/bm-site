'use client';
//      UTIL.       //
import Image from "next/image";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import Globals from "@/components/globals";
import { useEffect, useState } from "react";
import CardPremios from "@/components/cards/cardPremios/Index";
import "./styles.css";
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
        <section className={`${Globals.default_style_page}`}>
            {isLoading ? (
                <div className="flex justify-center items-center min-h-screen absolute">
                    <svg width="100" height="100" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-jump animate-infinite animate-duration-1000 animate-delay-500">
                        <path d="M157.176 4.55984C79.5307 22.1808 19.2564 84.9109 3.38029 161.347C-0.993846 182.415 -1.14817 221.375 3.06502 241.245C10.7793 277.628 27.6144 309.953 52.6179 336.391C92.9905 379.074 141.732 400.039 200.507 400C230.903 399.98 246.769 397.032 275.348 386.1C333.654 363.791 380.065 310.283 396.073 246.916C401.81 224.199 401.153 174.169 394.81 151.049C384.018 111.697 358.185 72.0998 327.141 47.3241C308.941 32.7981 273.659 12.5151 252.318 6.6706C223.777 -1.14538 179.683 -2.40663 157.176 4.55984ZM243.744 62.4187C263.899 72.2638 279.713 94.441 279.828 113.02C279.874 120.746 280.108 120.958 289.998 122.301C311.701 125.254 331.31 139.137 342.051 159.161C346.225 166.937 347.087 171.922 347.085 188.233C347.078 217.637 345.746 219.507 274.993 289.396C220.561 343.165 213.945 349.001 207.41 349.001C196.947 349.001 187.279 338.919 187.279 328.009C187.279 320.196 190.119 316.976 247.053 260.248C304.483 203.026 306.864 200.32 307.804 191.181C309.049 179.053 302.79 168.503 291.597 163.864C274.801 156.902 273.313 157.941 208.094 222.314C149.468 280.174 148.28 281.194 139.393 281.194C132 281.194 129.306 279.965 124.641 274.463C112.674 260.353 112.809 260.152 177.111 195.983C209.108 164.05 236.391 135.775 237.74 133.148C243.223 122.463 238.829 105.732 228.69 98.6866C223 94.7297 206.817 94.172 199.811 97.6914C197.163 99.0212 168.995 125.794 137.217 157.186C83.2787 210.467 78.9156 214.262 71.5674 214.262C60.7665 214.262 51.9102 205.476 51.9102 194.76C51.9102 187.456 55.8368 183.043 112.429 126.743C145.716 93.6317 176.655 64.6236 181.181 62.2853C201.352 51.8693 222.235 51.9131 243.744 62.4187Z" fill="#206BA5" />
                    </svg>
                </div>
            ) : (
                <>
                    <section className="container lg:w-3/5 mx-auto p-5">
                        <div className="container px-6 py-10 mx-auto">
                            <p className="text-xl text-gray-800 invisible show-right inter-regular">
                                A Empresa
                            </p>

                            <h1 className="mt-2 text-2xl inter-bold text-blue-500 capitalize lg:text-3xl invisible show-left">
                                Quem Somos
                            </h1>

                            <div className="lg:-mx-6 lg:flex lg:items-center invisible show-top">
                                <div className="relative w-full lg:w-1/2 lg:mx-6 h-52 lg:h-[36rem]">
                                    <Image
                                        className="object-center rounded-lg"
                                        src="./bm/BM.svg"
                                        alt="Logo da Empresa"
                                        fill
                                    />
                                </div>

                                <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                                    <h1 className="text-2xl inter-bold text-gray-800 lg:text-3xl lg:w-96">
                                        A Melhor Solução para o Seu Negocio aqui
                                    </h1>

                                    <p className="mt-6 text-gray-500 raleway-regular">
                                        A BM Informática surgiu em 1998 com o ideal de transformar a informática numa ferramenta estratégica para o sucesso dos negócios de seus clientes, através de assessoria, suporte e desenvolvimento de sistemas com modernas tecnologias, visando contribuir para a efetividade de seus resultados.
                                    </p>

                                    <h3 className="mt-6 text-lg font-medium text-blue-500 inter-bold">
                                        Solicite demonstrações
                                    </h3>
                                    <p className="text-gray-600 flex items-center raleway-regular">
                                        <FaPhoneVolume /> &nbsp; Pernambuco (81) 3126-2050
                                    </p>
                                    <p className="text-gray-600 flex items-center raleway-regular">
                                        <FaPhoneVolume /> &nbsp;  São Paulo (11) 2626-1337
                                    </p>
                                    <p className="text-gray-600 flex items-center raleway-regular">
                                        <FaPhoneVolume /> &nbsp; Alagoas (82) 3142-0562
                                    </p>
                                    <p className="text-gray-600 flex items-center raleway-regular">
                                        <FaPhoneVolume /> &nbsp; Paraíba (83) 3142-0415
                                    </p>
                                    <p className="text-gray-600 flex items-center raleway-regular">
                                        <IoLogoWhatsapp /> &nbsp; Whatsapp (81) 3126-2050
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="skew-c"></div>

                    {/*         MISSAO, VISAO E VALORES         */}
                    <section className="w-full bg-[#206BA5]">
                        <section className="container px-6 py-10 mx-auto lg:w-3/5">
                            <h1 className="text-2xl inter-bold text-center text-[#F8F8F8] capitalize lg:text-3xl invisible show-top">Nossos Princípios</h1>

                            <div className="flex justify-center mx-auto mt-6 invisible show-top">
                                <span className="inline-block w-40 h-1 bg-[#D67229] rounded-full"></span>
                                <span className="inline-block w-3 h-1 mx-1 bg-[#D67229] rounded-full"></span>
                                <span className="inline-block w-1 h-1 bg-[#D67229] rounded-full"></span>
                            </div>

                            <p className="max-w-2xl mx-auto my-6 text-center raleway-regular text-[#F8F8F8] invisible show-bottom">
                                Acreditamos no poder da transformação através da inovação e qualidade.
                                <br />
                                Estamos comprometidos em oferecer soluções que atendem às expectativas dos nossos clientes, com ética, transparência e dedicação.
                            </p>

                            <div className="flex items-center justify-center invisible show-bottom">
                                <div className="flex items-center p-1 border border-[#F8F8F8] rounded-xl inter-regular">
                                    <button onClick={() => setTab(0)} className={`px-4 py-2 text-lg text-[#F8F8F8] capitalize ${tabsP == 0 ? 'bg-[#D67229]' : ''} md:py-3 rounded-xl md:px-12`}>
                                        Missão
                                    </button>
                                    <button onClick={() => setTab(1)} className={`px-4 py-2 mx-4 text-lg text-[#F8F8F8] ${tabsP == 1 ? 'bg-[#D67229]' : ''} capitalize transition-colors duration-300 md:py-3 focus:outline-none hover:bg-[#D67229] hover:text-white rounded-xl md:mx-8 md:px-12`}>
                                        Visão
                                    </button>
                                    <button onClick={() => setTab(2)} className={`px-4 py-2 text-lg text-[#F8F8F8] ${tabsP == 2 ? 'bg-[#D67229]' : ''} capitalize transition-colors duration-300 md:py-3 focus:outline-none hover:bg-[#D67229] hover:text-white rounded-xl md:px-12`}>
                                        Valores
                                    </button>
                                </div>
                            </div>

                            <section className={`${tabsP == 0 ? '' : 'hidden'} invisible show-right`}>
                                <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                                    <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-[#F8F8F8] xl:text-3xl inter-bold">
                                        Missão
                                    </h2>

                                    <p className="max-w-4xl mt-6 text-center text-[#F8F8F8] raleway-regular">
                                        Transformar a informática em uma ferramenta estratégica para o sucesso dos negócios de nossos clientes, oferecendo assessoria especializada, suporte contínuo e desenvolvimento de sistemas com tecnologias modernas.
                                    </p>
                                </div>
                            </section>

                            <section className={`${tabsP == 1 ? '' : 'hidden'} invisible show-top`}>
                                <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                                    <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-[#F8F8F8] xl:text-3xl inter-bold">
                                        Visão
                                    </h2>

                                    <p className="max-w-4xl mt-6 text-center text-[#F8F8F8] raleway-regular">
                                        Ser referência em soluções tecnológicas inovadoras, reconhecida pela excelência em nossos serviços e pelo impacto positivo e significativo nos resultados dos nossos clientes, promovendo a transformação digital e o crescimento sustentável dos negócios que atendemos.
                                    </p>
                                </div>
                            </section>

                            <section className={`${tabsP == 2 ? '' : 'hidden'} invisible show-left`}>
                                <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                                    <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-[#F8F8F8] xl:text-3xl inter-bold">
                                        Valores
                                    </h2>

                                    <p className="max-w-4xl mt-6 text-center text-[#F8F8F8] raleway-regular">
                                        Compromisso inabalável com a qualidade, constante inovação em nossas soluções, atendimento personalizado que atende às necessidades específicas de cada cliente, garantindo sucesso e satisfação.
                                    </p>
                                </div>
                            </section>
                        </section>
                    </section>
                    {/*        /MISSAO, VISAO E VALORES         */}

                    <div className="skew-cc"></div>

                    <section className="container px-6 py-10 mx-auto lg:w-3/5 flex flex-col justify-center items-center">
                        <div className="invisible show-top">
                            <h1 className="text-2xl inter-bold text-center text-gray-800 capitalize lg:text-3xl">Prêmios</h1>

                            <div className="flex justify-center mx-auto mt-6">
                                <span className="inline-block w-40 h-1 bg-[#206BA5] rounded-full"></span>
                                <span className="inline-block w-3 h-1 mx-1 bg-[#206BA5] rounded-full"></span>
                                <span className="inline-block w-1 h-1 bg-[#206BA5] rounded-full"></span>
                            </div>

                            <p className="max-w-2xl mx-auto my-6 text-center raleway-regular text-gray-800">
                                Nossos prêmios refletem o compromisso com a qualidade e inovação. Continuamos a superar expectativas e a oferecer o melhor aos nossos clientes.
                            </p>
                        </div>
                        <CardPremios />
                    </section>

                    <div className="skew-c"></div>

                    <section className="w-full bg-[#206BA5]">
                        <section className="container lg:w-3/5 mx-auto px-6 py-10">
                            <div className="h-[20rem]">
                                <div className="container px-6 py-10 mx-auto invisible show-top">
                                    <h1 className="text-2xl font-semibold text-center text-[#F8F8F8] capitalize lg:text-3xl inter-bold">Automação Comerial</h1>

                                    <div className="flex justify-center mx-auto mt-6">
                                        <span className="inline-block w-40 h-1 bg-[#D67229] rounded-full"></span>
                                        <span className="inline-block w-3 h-1 mx-1 bg-[#D67229] rounded-full"></span>
                                        <span className="inline-block w-1 h-1 bg-[#D67229] rounded-full"></span>
                                    </div>


                                    <p className="max-w-2xl mx-auto mt-6 text-center text-[#F8F8F8] raleway-regular">
                                        Sediada em Recife-PE, a BM Informática é especializada no desenvolvimento de produtos e serviços voltados para a automação de rotinas em empresas que desejam atender seus clientes com rapidez e segurança. Com profissionais qualificados, oferecemos soluções que aliam qualidade e preços competitivos, garantindo eficiência e inovação para o seu negócio
                                    </p>
                                </div>
                            </div>
                        </section>
                    </section>

                    <div className="skew-cc"></div>

                    <section className="w-full pb-10 container px-6 py-10 mx-auto">
                        <section className="container lg:w-3/5 mx-auto flex flex-col justify-center items-center">
                            <div className="invisible show-top">
                                <h1 className="text-2xl inter-bold text-center text-gray-800 capitalize lg:text-3xl">Redes Sociais</h1>

                                <div className="flex justify-center mx-auto mt-6">
                                    <span className="inline-block w-40 h-1 bg-[#206BA5] rounded-full"></span>
                                    <span className="inline-block w-3 h-1 mx-1 bg-[#206BA5] rounded-full"></span>
                                    <span className="inline-block w-1 h-1 bg-[#206BA5] rounded-full"></span>
                                </div>

                                <p className="max-w-2xl mx-auto my-6 text-center raleway-regular text-gray-800 invisible show-bottom">
                                    Conecte-se conosco nas redes sociais e fique por dentro de todas as novidades.
                                </p>
                            </div>

                            <div className="card invisible show-bottom">
                                <a className="socialContainer containerOne" href="https://www.instagram.com/bminformaticaoficial/" target="_blank">
                                    <svg viewBox="0 0 16 16" className="socialSvg instagramSvg"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z">
                                    </path>
                                    </svg>
                                </a>

                                <a className="socialContainer containerTwo" href="https://www.facebook.com/bminformaticaoficial/?_rdr" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="socialSvg facebookSvg">
                                        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24h11.499v-9.294H9.692v-3.622h3.132V9.411c0-3.15 1.85-4.876 4.732-4.876 1.371 0 2.809.255 2.809.255v3.16h-1.582c-1.553 0-2.039.96-2.039 1.948v2.337h3.423l-.547 3.622h-2.876V24h5.692c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                                    </svg>
                                </a>

                                <a className="socialContainer containerThree" href="https://br.linkedin.com/company/bm-inform-tica-ltda" target="_blank">
                                    <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                                </a>
                            </div>
                        </section>
                    </section>
                </>
            )
            }
        </section >
    );
}

export default PageCompany;
