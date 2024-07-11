// Util //
import Link from 'next/link';
// Util. //

// Styles //
let text_style = 'text-[13px] hover:bg-[#C55300] rounded-lg lg:block';
let div_text_style = 'lg:w-1/4 w-full flex flex-col mb-1 items-center';
let div_text_style_2 = 'lg:text-xs text-lg w-full flex justify-center mb-1';
let span_text_style = 'w-[100px] h-2 rounded-lg bg-[#C55300] lg:block';
// Styles //

const IndexesDesktop = (props) => {
    // console.log("desktop");
    return (
        <section id='indexes-desktop' className="lg:w-4/5 w-full h-full lg:flex hidden lg:items-end justify-center lg:static fixed lg:top-auto top-[90px] gap-2 text-[#E0E0E0] bg-[#206BA5] roboto-bold pt-10">
            <div className={`${div_text_style}`}>
                <div className={`${div_text_style_2}`}>
                    <Link
                        onClick={() => {
                            props.clickIcon('home', 'Inicio');
                            // props.randleRotation(); 
                        }}
                        href={'/'}
                        className={`${text_style} ${props.verifyRoute('/')}`}
                        style={{ padding: '5px 10px' }}>
                        Inicio
                    </Link>
                </div>
                <span className={`${span_text_style} ${props.route == '/' ? 'visible' : 'invisible'}`}></span>
            </div>

            <div className={`${div_text_style}`}>
                <div className={`${div_text_style_2}`}>
                    <Link
                        onClick={() => props.clickIcon('solutions', 'Soluções')}
                        href={'/solutions'}
                        className={`${text_style} ${props.verifyRoute('/solutions')}`}
                        style={{ padding: '5px 10px' }}>
                        Soluções
                    </Link>
                </div>
                <span className={`${span_text_style} ${props.route == '/solutions' ? 'visible' : 'invisible'}`}></span>
            </div>

            <div className={`${div_text_style}`}>
                <div className={`${div_text_style_2}`}>
                    <Link
                        onClick={() => props.clickIcon('equipment', 'Equipamentos')}
                        href={'/equipment'}
                        className={`${text_style} ${props.verifyRoute('/equipment')}`}
                        style={{ padding: '5px 10px' }}>
                        Equipamentos
                    </Link>
                </div>
                <span className={`${span_text_style} ${props.route == '/equipment' ? 'visible' : 'invisible'}`}></span>
            </div>

            <div className={`${div_text_style}`}>
                <div className={`${div_text_style_2}`}>
                    <Link
                        onClick={() => props.clickIcon('company', 'Empresa')}
                        href={'/company'}
                        className={`${text_style} ${props.verifyRoute('/company')}`}
                        style={{ padding: '5px 10px' }}>
                        Empresa
                    </Link>
                </div>
                <span className={`${span_text_style} ${props.route == '/company' ? 'visible' : 'invisible'}`}></span>
            </div>

            <div className={`${div_text_style}`}>
                <div className={`${div_text_style_2}`}>
                    <Link
                        onClick={() => props.clickIcon('contact', 'Contato')}
                        href={'/contact'}
                        className={`${text_style} ${props.verifyRoute('/contact')}`}
                        style={{ padding: '5px 10px' }}>
                        Contato
                    </Link>
                </div>
                <span className={`${span_text_style} ${props.route == '/contact' ? 'visible' : 'invisible'}`}></span>
            </div>

            <div className={`${div_text_style}`}>
                <div className={`${div_text_style_2}`}>
                    <Link
                        onClick={() => props.clickIcon('/links', 'Links')}
                        href={'/links'}
                        className={`${text_style} ${props.verifyRoute('/links')}`}
                        style={{ padding: '5px 10px' }}>
                        Links Úteis
                    </Link>
                </div>
                <span className={`${span_text_style} ${props.route == '/links' ? 'visible' : 'invisible'}`}></span>
            </div>
            {/* ICONES DESKTOP */}
        </section>
    )
}

export default IndexesDesktop;