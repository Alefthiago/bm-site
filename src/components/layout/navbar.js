'use client';
// Util //
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
// Util. //

// Styles //
let text_style = 'text-sm p-1 hover:bg-[#C55300] rounded-lg';
let div_text_style = 'w-1/4 flex flex-col mb-1 items-center';
let div_text_style_2 = 'w-full flex justify-center mb-1';
let span_text_style = 'w-[70%] h-2 rounded-lg bg-[#C55300]';
// Styles //

const Navbar = () => {
    // Variaveis //
    const pathname = usePathname();
    const [route, setRoute] = useState(pathname);
    // Variaveis //

    // FUNCOES //
    function clickIcon() {
        setRoute(pathname);
    }

    function verifyRoute(route) {
        if (route == pathname) {
            return 'bg-[#C55300]';
        }
    }
    // FUNCOES //

    //      HOOKS.      //
    useEffect(() => {
        setRoute(pathname);
    }, [pathname]);
    //     /HOOKS.      //

    return (
        <nav className={'w-full h-[90px] bg-[#206BA5]'}>
            <section className={'w-full h-full lg:flex'}>
                {/* LOGO */}
                <section className={'w-1/5 h-full flex justify-center items-end'}>
                    <div className={'mb-3'}>
                        <Image src={'/LogoBranco.png'} alt={'Logo BM Informatica'} width={60} height={60} />
                    </div>
                </section>
                {/* LOGO */}

                {/* INDICES */}
                <section className={'w-3/5 h-full container mx-auto columns-sm flex items-end gap-2 text-[#E0E0E0] roboto-bold'}>
                    <div className={`${div_text_style}`}>
                        <div className={`${div_text_style_2}`}>
                            <Link
                                onClick={() => clickIcon('home')}
                                href={'/'}
                                className={`${text_style} ${verifyRoute('/')}`}>
                                Inicio
                            </Link>
                        </div>
                        <span className={`${span_text_style} ${route == '/' ? 'visible' : 'invisible'}`}></span>
                    </div>

                    <div className={`${div_text_style}`}>
                        <div className={`${div_text_style_2}`}>
                            <Link
                                onClick={() => clickIcon('solutions')}
                                href={'/solutions'}
                                className={`${text_style} ${verifyRoute('/solutions')}`}>
                                Soluções
                            </Link>
                        </div>
                        <span className={`${span_text_style} ${route == '/solutions' ? 'visible' : 'invisible'}`}></span>
                    </div>

                    <div className={`${div_text_style}`}>
                        <div className={`${div_text_style_2}`}>
                            <Link 
                                onClick={() => clickIcon('equipment')} 
                                href={'/equipment'} 
                                className={`${text_style} ${verifyRoute('/equipment')}`}>
                                Equipamentos
                            </Link>
                        </div>
                        <span className={`${span_text_style} ${route == '/equipment' ? 'visible' : 'invisible'} w-[90%]`}></span>
                    </div>

                    <div className={`${div_text_style}`}>
                        <div className={`${div_text_style_2}`}>
                            <Link 
                                onClick={() => clickIcon('company')} 
                                href={'/company'} 
                                className={`${text_style} ${verifyRoute('/company')}`}>
                                Empresa
                            </Link>
                        </div>
                        <span className={`${span_text_style} ${route == '/company' ? 'visible' : 'invisible'}`}></span>
                    </div>

                    <div className={`${div_text_style}`}>
                        <div className={`${div_text_style_2}`}>
                            <Link 
                                onClick={() => clickIcon('contact')} 
                                href={'/contact'} 
                                className={`${text_style} ${verifyRoute('/contact')}`}>
                                Contato
                            </Link>
                        </div>
                        <span className={`${span_text_style} ${route == '/contact' ? 'visible' : 'invisible'}`}></span>
                    </div>

                    <div className={`${div_text_style}`}>
                        <div className={`${div_text_style_2}`}>
                            <Link 
                                onClick={() => clickIcon()} 
                                href={'/links'} 
                                className={`${text_style} ${verifyRoute('/links')}`}>
                                Links Úteis
                            </Link>
                        </div>
                        <span className={`${span_text_style} ${route == '/links' ? 'visible' : 'invisible'}`}></span>
                    </div>
                </section>
                {/* INDICES */}

                {/* WHATSAPP */}
                <section className={'w-1/5 h-full'}>
                    <div className={`mb-w-1/5 h-full flex justify-center items-end`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className={"bi bi-whatsapp mb-4 hover:cursor-pointer"} viewBox="0 0 16 16">
                            <path className={'text-[#E0E0E0]'} d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                        </svg>
                    </div>
                </section>
                {/* WHATSAPP */}
            </section>
        </nav>
    );
};

export default Navbar;