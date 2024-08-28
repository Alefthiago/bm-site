'use client';
//      UTIL        //
import Link from 'next/link';

//      FLOWBITE        //
import { Drawer } from "flowbite-react";
//     /FLOWBITE        //
//     /UTIL        //

//      STYLES      //
//     /STYLES      //

const MenuMobile = (props) => {
    //      VARIAVEIS       //
    const handleClose = () => props.setIsOpen(false);
    //     /VARIAVEIS        //

    return (
        <>
            <Drawer open={props.is_open} onClose={handleClose} position="right" className='roboto-bold bg-[#F8F8F8]'>
                <Drawer.Header title="Menu" className="font-mono" />
                <Drawer.Items>
                    <div className="font-sans grid grid-cols-1 gap-4 md:grid-cols-1">
                        <Link
                            onClick={() => {
                                props.clickIcon('home', 'Inicio');
                                // props.randleRotation(); 
                            }}
                            href={'/'}
                            className={`w-full rounded-lg border border-gray-200  px-4 py-2  text-[#0E0E0E] text-center text-sm ${props.verifyRoute('/', true) ? '' : 'hover:bg-gray-100 hover:text-[#208DA5]'} ${props.verifyRoute('/', true)} focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200`}
                        >
                            Início
                        </Link>
                        <Link
                            onClick={() => props.clickIcon('solutions', 'Soluções')}
                            href={'/solutions'}
                            className={`w-full rounded-lg border border-gray-200 px-4 py-2 text-[#0E0E0E] text-center text-sm ${props.verifyRoute('/solutions', true) ? '' : 'hover:bg-gray-100 hover:text-[#208DA5]'} ${props.verifyRoute('/solutions', true)} focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200`}
                        >
                            Soluções
                        </Link>
                        <Link
                            onClick={() => props.clickIcon('equipment', 'Equipamentos')}
                            href={'/equipment'}
                            className={`w-full rounded-lg border border-gray-200 px-4 py-2 text-[#0E0E0E] text-center text-sm ${props.verifyRoute('/equipment', true) ? '' : 'hover:bg-gray-100 hover:text-[#208DA5]'} ${props.verifyRoute('/equipment', true)} focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200`}
                        >
                            Equipamentos
                        </Link>
                        <Link
                            onClick={() => props.clickIcon('company', 'Empresa')}
                            href={'/company'}
                            className={`w-full rounded-lg border border-gray-200 px-4 py-2 text-[#0E0E0E] text-center text-sm ${props.verifyRoute('/company', true) ? '' : 'hover:bg-gray-100 hover:text-[#208DA5]'} ${props.verifyRoute('/company', true)} focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200`}
                        >
                            Empresa
                        </Link>
                        <Link
                            onClick={() => props.clickIcon('contact', 'Contato')}
                            href={'/contact'}
                            className={`w-full rounded-lg border border-gray-200 px-4 py-2 text-[#0E0E0E] text-center text-sm ${props.verifyRoute('/contact', true) ? '' : 'hover:bg-gray-100 hover:text-[#208DA5]'} ${props.verifyRoute('/contact', true)} focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200`}
                        >
                            Contato
                        </Link>
                        <Link
                            onClick={() => props.clickIcon('/suport', 'suport')}
                            href={'/suport'}
                            className={`w-full rounded-lg border border-gray-200 px-4 py-2 text-[#0E0E0E] text-center text-sm ${props.verifyRoute('/links', true) ? '' : 'hover:bg-gray-100 hover:text-[#208DA5]'} ${props.verifyRoute('/links', true)} focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200`}
                        >
                            Suporte
                        </Link>

                        <Link
                            // onClick={() => props.clickIcon('/suport', 'suport')}
                            href={'https://wa.me/558131262050'}
                            target='_blank'
                            className={`w-full rounded-lg inline-flex justify-center items-center bg-cyan-700 border border-gray-200 px-4 py-2 text-gray-200 text-center text-sm focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={"bi bi-whatsapp text-gray-200 hover:text-[#25D366]"} viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                            </svg>
                            &nbsp;
                            Contato
                        </Link>

                        {/* <a
                            href="https://wa.me/558131262050"
                            target='_blank'
                            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300"
                        >
                            Contato&nbsp;
                            <svg
                                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a> */}
                    </div>
                </Drawer.Items>
            </Drawer>
        </>
    );
};

export default MenuMobile;