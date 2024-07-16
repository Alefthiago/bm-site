'use client';
// Util //
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import IndexesDesktop from "./indexesDesktop";
import IndexesMobile from "./indexMobile";
import MenuMobile from "./menuMobile";

import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";
// Util. //

const Navbar = () => {
    // Variaveis //
    const pathname = usePathname();
    const [route, setRoute] = useState(pathname);
    const [route_mobile, setRouteMobile] = useState();
    const [windowWidth, setWindowWidth] = useState(0);

    const [is_open, setIsOpen] = useState(false);

    const routes_text = {
        '/': 'Inicio',
        '/solutions': 'Soluções',
        '/equipment': 'Equipamentos',
        '/company': 'Empresa',
        '/contact': 'Contato',
        '/links': 'Links'
    }
    // Variaveis. //

    //      HOOKS.      //
    useEffect(() => {
        setRouteMobile(routes_text[pathname]);
        setRoute(pathname);
        // randleRotation()
    }, [pathname]);

    useEffect(() => {
        // Função para verificar o tamanho da tela
        const checkScreenSize = () => {
            const width = window.innerWidth;
            setWindowWidth(width);
            // console.log(width);
            if (width >= 1024) {
                setIsOpen(false);
            }
        };
        // Adiciona o evento resize ao window
        window.addEventListener('resize', checkScreenSize);
        // Verifica o tamanho da tela ao carregar a página
        checkScreenSize();
        // Remove o evento resize ao desmontar o componente
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    //     /HOOKS.      //


    // FUNCOES //
    function clickIcon(text) {
        setRoute(pathname);

        if (window.innerWidth <= 1024) {
            setRouteMobile(text);
            setRouteMobile(routes_text[pathname]);
            setIsOpen(false);
        };
    }

    function verifyRoute(route) {
        if (route == pathname) {
            return 'bg-[#C55300] text-[#F8F8F8]';
        }
    }
    // FUNCOES. //

    return (
        <nav id="nav-bar" className={'w-full h-[90px] bg-[#206BA5]'}>
            <section className={'w-full h-full flex'}>
                {/* LOGO */}
                <section className={'min-w-[10%] h-full flex justify-center items-end'}>
                    <div className={'mb-3'}>
                        <Image src={'/LogoBranco.png'} alt={'Logo BM Informatica'} width={60} height={60} />
                    </div>
                </section>
                {/* LOGO. */}

                {/* INDICES MENU DESKTOP */}
                <IndexesDesktop clickIcon={clickIcon} verifyRoute={verifyRoute} route={route} />
                {/* INDICES MENU DESKTOP. */}

                {/* INDICES MENU MOBILE */}
                <MenuMobile is_open={is_open} setIsOpen={setIsOpen} clickIcon={clickIcon} verifyRoute={verifyRoute} route={route} />
                {/* INDICES MENU MOBILE. */}

                {/* indice atual mobile */}
                <IndexesMobile route_name_mobile={route_mobile} />
                {/* indice atual mobile. */}

                <section className={'min-w-[10%] h-full'}>
                    <div className={`mb:w-1/5 h-full flex justify-center items-end`}>
                        {/* Menu mobile */}
                        {/* <svg onClick={randleRotation} className={`text-[#E0E0E0] lg:hidden block mb-4 hover:cursor-pointer bi bi-chevron-double-left ${isRotated ? 'rotate' : ''}`} xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                            <path d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                        </svg> */}

                        <svg onClick={() => setIsOpen(true)} xmlns="http://www.w3.org/2000/svg" width="60" height="50" fill="currentColor" className={`text-[#F8F8F8] lg:hidden block mb-4 hover:cursor-pointer bi bi-justify`} viewBox="0 0 16 16">
                            <path d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                        </svg>
                        {/* Menu mobile. */}

                        {/* WHATSAPP DESKTOP */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className={"bi bi-whatsapp mb-4 hover:cursor-pointer lg:block hidden"} viewBox="0 0 16 16">
                            <path className={'text-[#F8F8F8]'} d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                        </svg>
                        {/* WHATSAPP DESKTOP. */}
                    </div>
                </section>
            </section>
        </nav>
    );
};

export default Navbar;