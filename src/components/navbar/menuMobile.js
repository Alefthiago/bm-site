'use client';
//      UTIL        //
import Link from 'next/link';
import { Drawer } from "flowbite-react";
//     /UTIL        //

const MenuMobile = (props) => {
    //      VARIAVEIS       //
    const handleClose = () => props.setMenuMobileAberto(false);
    //     /VARIAVEIS        //

    return (
        <>
            <Drawer open={props.menuMobileAberto} onClose={handleClose} position="right" className='roboto-bold'>
                <Drawer.Header title="Menu" className="font-mono" />
                <Drawer.Items>
                    <div className="font-sans grid grid-cols-1 gap-4 md:grid-cols-1">
                        <Link
                            onClick={() => {
                                props.clickIcone('inicio', 'Inicio');
                            }}
                            href={'/'}
                            className={`w-full rounded-lg border border-gray-200  px-4 py-2  text-[#0E0E0E] text-center text-sm ${props.verificarRota('/', true) ? '' : 'hover:bg-gray-100 hover:text-[#208DA5]'} ${props.verificarRota('/', true)} focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200`}
                        >
                            Início
                        </Link>
                        <Link
                            onClick={() => props.clickIcone('solucoes', 'Soluções')}
                            href={'/solucoes'}
                            className={`w-full rounded-lg border border-gray-200 px-4 py-2 text-[#0E0E0E] text-center text-sm ${props.verificarRota('/solucoes', true) ? '' : 'hover:bg-gray-100 hover:text-[#208DA5]'} ${props.verificarRota('/solucoes', true)} focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200`}
                        >
                            Soluções
                        </Link>
                        {/* <Link
                            onClick={() => props.clickIcone('equipamentos', 'Equipamentos')}
                            href={'/equipamentos'}
                            className={`w-full rounded-lg border border-gray-200 px-4 py-2 text-[#0E0E0E] text-center text-sm ${props.verificarRota('/equipamentos', true) ? '' : 'hover:bg-gray-100 hover:text-[#208DA5]'} ${props.verificarRota('/equipamentos', true)} focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200`}
                        >
                            Equipamentos
                        </Link> */}
                        <Link
                            onClick={() => props.clickIcone('empresa', 'Empresa')}
                            href={'/empresa'}
                            className={`w-full rounded-lg border border-gray-200 px-4 py-2 text-[#0E0E0E] text-center text-sm ${props.verificarRota('/empresa', true) ? '' : 'hover:bg-gray-100 hover:text-[#208DA5]'} ${props.verificarRota('/empresa', true)} focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200`}
                        >
                            Empresa
                        </Link>
                        <Link
                            onClick={() => props.clickIcone('contato', 'Contato')}
                            href={'/contato'}
                            className={`w-full rounded-lg border border-gray-200 px-4 py-2 text-[#0E0E0E] text-center text-sm ${props.verificarRota('/contato', true) ? '' : 'hover:bg-gray-100 hover:text-[#208DA5]'} ${props.verificarRota('/contato', true)} focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200`}
                        >
                            Contato
                        </Link>
                        <Link
                            onClick={() => props.clickIcone('/suporte', 'Suporte')}
                            href={'/suporte'}
                            className={`w-full rounded-lg border border-gray-200 px-4 py-2 text-[#0E0E0E] text-center text-sm ${props.verificarRota('/links', true) ? '' : 'hover:bg-gray-100 hover:text-[#208DA5]'} ${props.verificarRota('/suporte', true)} focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200`}
                        >
                            Links Úteis
                        </Link>

                        <Link
                            href={'https://wa.me/558131262050'}
                            target='_blank'
                            className={`w-full rounded-lg inline-flex justify-center items-center bg-cyan-700 border border-gray-200 px-4 py-2 text-[#F8F8F8] text-center text-sm focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={"bi bi-whatsapp text-[#F8F8F8] hover:text-[#25D366]"} viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                            </svg>
                            &nbsp;
                            Contato
                        </Link>
                    </div>
                </Drawer.Items>
            </Drawer>
        </>
    );
};

export default MenuMobile;