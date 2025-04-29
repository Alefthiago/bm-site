"use client";
//      UTIL        //
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Navbar } from "flowbite-react";
import { Kbd } from "flowbite-react";
import Image from "next/image";
import MenuMobile from "./menuMobile";
import IndexesMobile from './indexMobile';
//      /UTIL       //

//      STYLES      //
const navBarLink = `text-sm text-[#F8F8F8] md:hover:text-[#D67229]`;
//     /STYLES     //

const NavbarApp = () => {
    //      VARIAVEIS       //
    const caminhoNome = usePathname();
    const [rota, setRota] = useState(caminhoNome);
    const [rotaMobile, setRotaMobile] = useState();
    const [larguraJanela, setLarguraJanela] = useState(0);

    const [menuMobileAberto, setMenuMobileAberto] = useState(false);
    const tituloRota = {
        '/': 'Inicio',
        '/solucoes': 'Soluções',
        '/equipamentos': 'Equipamentos',
        '/empresa': 'Empresa',
        '/contato': 'Contato',
        '/suporte': 'Suporte',
        // '/datacash': 'Soluções'
    }
    //      /VARIAVEIS      //

    //      HOOKS      //
    useEffect(() => {
        setRota(caminhoNome);
        setRotaMobile(tituloRota[caminhoNome]);
    }, [caminhoNome]);

    useEffect(() => {
        // Função para verificar o tamanho da tela
        const verificarTamanhoTela = () => {
            const width = window.innerWidth;
            setLarguraJanela(width);
            // console.log(width);
            if (width >= 768) {
                setMenuMobileAberto(false);
            }
        };
        // Adiciona o evento resize ao window
        window.addEventListener('resize', verificarTamanhoTela);
        // Verifica o tamanho da tela ao carregar a página
        verificarTamanhoTela();
        // Remove o evento resize ao desmontar o componente
        return () => window.removeEventListener('resize', verificarTamanhoTela);
    }, []);
    //     /HOOKS      //

    //      FUNCOES     //
    function clickIcone(texto) {
        setRota(caminhoNome);
        if (window.innerWidth <= 1024) {
            setRotaMobile(texto);
            setRotaMobile(tituloRota[caminhoNome]);
            setMenuMobileAberto(false);
        };
    }

    function verificarRota(rota, mobile = false) {
        if (rota == caminhoNome) {
            return `${mobile ? 'bg-[#206BA5] text-[#F8F8F8]' : 'text-[#D67229]'}`;
        }
    }
    //      /FUNCOES     //

    return (
        <Navbar fluid className={`text-[#F8F8F8] bg-[#206BA5]`}>
            {/* PARA PRODUCAO <Navbar.Brand href={`/bm-site/`}> PARA PRODUCAO */}
            <Navbar.Brand href={`/bm-site`}>
                <Image
                    src={'./bm/lgbranco.svg'}
                    alt={'Logo BM Informática Ltda'}
                    width={60}
                    height={60}
                />
            </Navbar.Brand>
            {/* indice atual mobile */}
            <IndexesMobile rotaMobileTitulo={rotaMobile} />
            {/* indice atual mobile. */}
            <div className="flex md:order-2">
                {/* WHATSAPP DESKTOP */}
                <a href="https://wa.me/558131262050" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className={"bi bi-whatsapp text-[#F8F8F8] hover:text-[#25D366] hover:cursor-pointer md:block hidden"} viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                </a>
                {/* WHATSAPP DESKTOP. */}

                <svg onClick={() => setMenuMobileAberto(true)} xmlns="http://www.w3.org/2000/svg" width="60" height="50" fill="currentColor" className={`text-[#F8F8F8] md:hidden block hover:cursor-pointer bi bi-justify`} viewBox="0 0 16 16">
                    <path d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                </svg>

                {/* INDICES MENU MOBILE */}
                <MenuMobile menuMobileAberto={menuMobileAberto} setMenuMobileAberto={setMenuMobileAberto} clickIcone={clickIcone} verificarRota={verificarRota} />
                {/* INDICES MENU MOBILE. */}
            </div>
            <Navbar.Collapse className={`md:block hidden font-sans`}>
                {/*     PARA PRODUCAO       */}
                <Navbar.Link href={`/bm-site/`} className={`${navBarLink}`}>
                {/*    /PARA PRODUCAO       */}
                {/* <Navbar.Link href={`/`} className={`${navBarLink}`}> */}
                    {verificarRota('/') == 'text-[#D67229]'
                        ?
                        <Kbd className={` ${verificarRota('/') == 'text-[#D67229]' ? 'bg-[#D67229] border-[#D67229] text-sm text-[#F8F8F8]' : ''}`}>
                            Início
                        </Kbd>
                        :
                        <>
                            Início
                        </>
                    }
                </Navbar.Link>
                {/*     PARA PRODUCAO       */}
                <Navbar.Link href={'/bm-site/solucoes'} className={`${navBarLink} ${verificarRota('/solucoes')}`}>
                {/*    /PARA PRODUCAO       */}
                {/* <Navbar.Link href={'/solucoes'} className={`${navBarLink} ${verificarRota('/solucoes')}`}> */}
                    {verificarRota('/solucoes') == 'text-[#D67229]'
                        ?
                        <Kbd className={`${verificarRota('/solucoes') == 'text-[#D67229]' ? 'bg-[#D67229] border-[#D67229] text-sm text-[#F8F8F8]' : ''}`}>
                            Soluções
                        </Kbd>
                        :
                        <>
                            Soluções
                        </>
                    }
                </Navbar.Link>
                {/*     PARA PRODUCAO       */}
                {/* <Navbar.Link href={'/bm-site/equipamentos'} className={`${navBarLink} ${verificarRota('/equipamentos')}`}> */}
                {/*    /PARA PRODUCAO       */}
                {/* <Navbar.Link href={'/equipamentos'} className={`${navBarLink} ${verificarRota('/equipamentos')}`}>
                    {verificarRota('/equipamentos') == 'text-[#D67229]'
                        ?
                        <Kbd className={`${verificarRota('/equipamentos') == 'text-[#D67229]' ? 'bg-[#D67229] border-[#D67229] text-sm text-[#F8F8F8]' : ''}`}>
                            Equipamentos
                        </Kbd>
                        :
                        <>
                            Equipamentos
                        </>
                    }
                </Navbar.Link> */}
                {/*     PARA PRODUCAO       */}
                <Navbar.Link href={'/bm-site/empresa'} className={`${navBarLink} ${verificarRota('/empresa')}`}>
                {/*    /PARA PRODUCAO       */}
                {/* <Navbar.Link href={'/empresa'} className={`${navBarLink} ${verificarRota('/empresa')}`}> */}
                    {verificarRota('/empresa') == 'text-[#D67229]'
                        ?
                        <Kbd className={`${verificarRota('/empresa') == 'text-[#D67229]' ? 'bg-[#D67229] border-[#D67229] text-sm text-[#F8F8F8]' : ''}`}>
                            Empresa
                        </Kbd>
                        :
                        <>
                            Empresa
                        </>
                    }
                </Navbar.Link>
                {/*     PARA PRODUCAO       */}
                <Navbar.Link href={'/bm-site/contato'} className={`${navBarLink} ${verificarRota('/contato')}`}>
                {/*    /PARA PRODUCAO       */}
                {/* <Navbar.Link href={'/contato'} className={`${navBarLink} ${verificarRota('/contato')}`}> */}
                    {verificarRota('/contato') == 'text-[#D67229]'
                        ?
                        <Kbd className={`${verificarRota('/contato') == 'text-[#D67229]' ? 'bg-[#D67229] border-[#D67229] text-sm text-[#F8F8F8]' : ''}`}>
                            Contato
                        </Kbd>
                        :
                        <>
                            Contato
                        </>
                    }
                </Navbar.Link>
                {/*     PARA PRODUCAO       */}
                <Navbar.Link href={'/bm-site/suporte'} className={`${navBarLink} ${verificarRota('/suporte')}`}>
                {/*    /PARA PRODUCAO       */}
                {/* <Navbar.Link href={'/suporte'} className={`${navBarLink} ${verificarRota('/suporte')}`}> */}
                    {verificarRota('/suporte') == 'text-[#D67229]'
                        ?
                        <Kbd className={`${verificarRota('/suporte') == 'text-[#D67229]' ? 'bg-[#D67229] border-[#D67229] text-sm text-[#F8F8F8]' : ''}`}>
                            Links Úteis
                        </Kbd>
                        :
                        <>
                            Links Úteis
                        </>
                    }
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarApp;