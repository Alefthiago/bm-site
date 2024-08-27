'use client';
// import Globals from "@/components/globals";
//      UTIL.       //
import { useState, useEffect } from "react";

import Image from "next/image";
//     /UTIL.       //

const PageContact = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add('-off');
                }
            });
        }, {
            threshold: [0]
        });

        Array.from(document.querySelectorAll('.as')).forEach(element => {
            observer.observe(element);
        });
        
        setTimeout(() => setIsLoading(false), 1500);
    }, []);

    return (
        <section className="flex min-h-screen flex-col items-center pt-12 px-4">
            {isLoading ? (
                <div className="flex justify-center items-center min-h-screen absolute">
                    <svg width="100" height="100" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-jump animate-infinite animate-duration-1000 animate-delay-500">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M157.176 4.55984C79.5307 22.1808 19.2564 84.9109 3.38029 161.347C-0.993846 182.415 -1.14817 221.375 3.06502 241.245C10.7793 277.628 27.6144 309.953 52.6179 336.391C92.9905 379.074 141.732 400.039 200.507 400C230.903 399.98 246.769 397.032 275.348 386.1C333.654 363.791 380.065 310.283 396.073 246.916C401.81 224.199 401.153 174.169 394.81 151.049C384.018 111.697 358.185 72.0998 327.141 47.3241C308.941 32.7981 273.659 12.5151 252.318 6.6706C223.777 -1.14538 179.683 -2.40663 157.176 4.55984ZM243.744 62.4187C263.899 72.2638 279.713 94.441 279.828 113.02C279.874 120.746 280.108 120.958 289.998 122.301C311.701 125.254 331.31 139.137 342.051 159.161C346.225 166.937 347.087 171.922 347.085 188.233C347.078 217.637 345.746 219.507 274.993 289.396C220.561 343.165 213.945 349.001 207.41 349.001C196.947 349.001 187.279 338.919 187.279 328.009C187.279 320.196 190.119 316.976 247.053 260.248C304.483 203.026 306.864 200.32 307.804 191.181C309.049 179.053 302.79 168.503 291.597 163.864C274.801 156.902 273.313 157.941 208.094 222.314C149.468 280.174 148.28 281.194 139.393 281.194C132 281.194 129.306 279.965 124.641 274.463C112.674 260.353 112.809 260.152 177.111 195.983C209.108 164.05 236.391 135.775 237.74 133.148C243.223 122.463 238.829 105.732 228.69 98.6866C223 94.7297 206.817 94.172 199.811 97.6914C197.163 99.0212 168.995 125.794 137.217 157.186C83.2787 210.467 78.9156 214.262 71.5674 214.262C60.7665 214.262 51.9102 205.476 51.9102 194.76C51.9102 187.456 55.8368 183.043 112.429 126.743C145.716 93.6317 176.655 64.6236 181.181 62.2853C201.352 51.8693 222.235 51.9131 243.744 62.4187Z" fill="#206BA5" />
                    </svg>
                </div>
            ) : (
                <>
                    <div className="w-full ">
                        <div className="w-full text-center">
                            <h1 className="text-4xl font-semibold font-sans text-[#0E0E0E]">
                                Contate-nos
                            </h1>

                            <p className="mt-3 text-gray-600 font-sans">
                                Nós da Bm Informatica teremos prazer em ouvir você
                            </p>
                        </div>
                    </div>

                    <section className="min-h-screen">
                        <div className="container px-6 py-10 mx-auto">
                            <div className="md:flex md:items-center md:-mx-10">
                                <div className="md:w-1/2 md:mx-10 ">
                                    <div className="p-4 py-6 rounded-lg md:p-8 bg-[#206BA5]">
                                        <h1 className="text-2xl font-semibold text-[#F8F8F8] md:text-3xl font-mono">Envie sua Mensagem</h1>
                                        <form className="pt-5">
                                            <div className="-mx-2 md:items-center md:flex">
                                                <div className="flex-1 px-2">
                                                    <label className="block mb-2 text-sm text-[#F8F8F8]">Nome</label>
                                                    <input type="text" placeholder="Nome" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                                </div>

                                                <div className="flex-1 px-2 mt-4 md:mt-0">
                                                    <label className="block mb-2 text-sm text-[#F8F8F8]">Sobrenome</label>
                                                    <input type="text" placeholder="Sobrenome" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                                </div>
                                            </div>

                                            <div className="mt-4">
                                                <label className="block mb-2 text-sm text-[#F8F8F8]">E-mail</label>
                                                <input type="email" placeholder="E-mail" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                            </div>

                                            <div className="mt-4">
                                                <label className="block mb-2 text-sm text-[#F8F8F8]">CNPJ/CPF</label>
                                                <input type="email" placeholder="Documento" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                            </div>

                                            <div className="w-full mt-4">
                                                <label className="block mb-2 text-sm text-[#F8F8F8]">Mensagem</label>
                                                <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Mensagem"></textarea>
                                            </div>

                                            <button className="font-mono w-full px-6 py-3 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#D67229] hover:bg-[#C55300] rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                                Enviar
                                            </button>
                                        </form>
                                    </div>
                                </div>

                                <div className="mt-12 md:flex md:mt-0 md:flex-col md:items-center md:w-1/2 md:mx-10 ">
                                    <Image
                                        className="object-cover mx-auto rounded-full shrink-0 w-96 h-96"
                                        src="./bm/OIP.webp"
                                        alt="avatar"
                                        width={500}
                                        height={224}
                                    />
                                    <div className="mt-6 space-y-8 md:mt-8">

                                        <p className="flex items-start -mx-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>

                                            <span className="mx-2 text-gray-700 w-72">
                                                Rua Padre Carapuceiro, 733 - Sala 1001
                                                Boa Viagem - Recife - PE
                                            </span>
                                        </p>

                                        <p class="flex items-start -mx-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>

                                            <span class="mx-2 text-gray-700 w-72 dark:text-gray-400">Central (81) 3126-2050 | (81) 3439-5259 | (81) 2011-2754</span>
                                        </p>

                                        <p class="flex items-start -mx-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>

                                            <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">Comercial (81) 9 8804-9715</span>
                                        </p>

                                        <p class="flex items-start -mx-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>

                                            <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">bm@bminformatica.com.br</span>
                                        </p>

                                        <p class="flex items-start -mx-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>

                                            <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">comercial@bminformatica.com.br</span>
                                        </p>

                                        <p class="flex items-start -mx-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>

                                            <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">suporte@bminformatica.com.br</span>
                                        </p>
                                    </div>

                                    <div className="mt-6 w-80 md:mt-8 ">
                                        <h3 className="text-gray-600 font-mono">Siga-nos</h3>

                                        <div className="flex mt-4 -mx-1.5">
                                            <a className="mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" target="_blank" href="https://br.linkedin.com/company/bm-inform-tica-ltda">
                                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
                                                    <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
                                                    <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
                                                </svg>
                                            </a>

                                            <a className="mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" target="_blank" href="https://www.facebook.com/bminformaticaoficial/?_rdr">
                                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z" fill="currentColor" />
                                                </svg>
                                            </a>

                                            <a className="mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" target="_blank" href="https://www.instagram.com/bminformaticaoficial/">
                                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z" fill="currentColor" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden rounded-lg h-auto w-full mb-10">
                            <iframe width="100%" height="100%" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.845566945619!2d-34.904949224234315!3d-8.11720209191211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1fadcaa54637%3A0xbdb1a1182c056086!2sR.%20Padre%20Carapuceiro%2C%20733%20-%20Sala%201001%20-%20Boa%20Viagem%2C%20Recife%20-%20PE%2C%2051020-280!5e0!3m2!1spt-BR!2sbr!4v1722870633793!5m2!1spt-BR!2sbr"></iframe>
                        </div>
                    </section>
                </>)}
        </section>
    );
}

export default PageContact;
