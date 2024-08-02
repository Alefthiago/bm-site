'use client';
//      UTIL        //
import Link from 'next/link';

//      FLOWBITE        //
import { Drawer } from "flowbite-react";
//     /FLOWBITE        //
//     /UTIL        //

//      STYLES      //
const link = ``;
//     /STYLES      //

const MenuMobile = (props) => {
    //      VARIAVEIS       //
    const handleClose = () => props.setIsOpen(false);
    //     /VARIAVEIS        //

    return (
        <>
            <Drawer open={props.is_open} onClose={handleClose} position="right" className='roboto-bold bg-[#F8F8F8]'>
                <Drawer.Header title="Menu"/>
                <Drawer.Items>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                        <Link
                            onClick={() => {
                                props.clickIcon('home', 'Inicio');
                                // props.randleRotation(); 
                            }}
                            href={'/'}
                            className={`w-full rounded-lg border border-gray-200  px-4 py-2  text-[#0E0E0E] text-center text-sm ${props.verifyRoute('/', true) ? '' : 'hover:bg-gray-100 hover:text-[#208DA5]' } ${props.verifyRoute('/', true)} focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200`}
                        >
                            Início
                        </Link>
                        <Link
                            onClick={() => props.clickIcon('solutions', 'Soluções')}
                            href={'/solutions'}
                            className={`w-full rounded-lg border border-gray-200 px-4 py-2 text-[#0E0E0E] text-center text-sm ${props.verifyRoute('/solutions', true) ? '' : 'hover:bg-gray-100 hover:text-[#208DA5]' } ${props.verifyRoute('/solutions', true)} focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200`}
                        >
                            Soluções
                        </Link>
                        <Link
                            onClick={() => props.clickIcon('equipment', 'Equipamentos')}
                            href={'/equipment'}
                            className={`w-full rounded-lg border border-gray-200 px-4 py-2 text-[#0E0E0E] text-center text-sm ${props.verifyRoute('/equipment', true) ? '' : 'hover:bg-gray-100 hover:text-[#208DA5]' } ${props.verifyRoute('/equipment', true)} focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200`}
                        >
                            Equipamentos
                        </Link>
                        <Link
                            onClick={() => props.clickIcon('company', 'Empresa')}
                            href={'/company'}
                            className={`w-full rounded-lg border border-gray-200 px-4 py-2 text-[#0E0E0E] text-center text-sm ${props.verifyRoute('/company', true) ? '' : 'hover:bg-gray-100 hover:text-[#208DA5]' } ${props.verifyRoute('/company', true)} focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200`}
                        >
                            Empresa
                        </Link>
                        <Link
                            onClick={() => props.clickIcon('contact', 'Contato')}
                            href={'/contact'}
                            className={`w-full rounded-lg border border-gray-200 px-4 py-2 text-[#0E0E0E] text-center text-sm ${props.verifyRoute('/contact', true) ? '' : 'hover:bg-gray-100 hover:text-[#208DA5]' } ${props.verifyRoute('/contact', true)} focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200`}
                        >
                            Contato
                        </Link>
                        <Link
                            onClick={() => props.clickIcon('/suport', 'suport')}
                            href={'/suport'}
                            className={`w-full rounded-lg border border-gray-200 px-4 py-2 text-[#0E0E0E] text-center text-sm ${props.verifyRoute('/links', true) ? '' : 'hover:bg-gray-100 hover:text-[#208DA5]' } ${props.verifyRoute('/links', true)} focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200`}
                        >
                            Suporte
                        </Link>
                        {/* <a
                            href="#"
                            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300"
                        >
                            Get access&nbsp;
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