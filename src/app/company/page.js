// Util //
import Globals from "@/components/globals";
// Util //

let h3_text = "text-5xl font-bold text-center pb-1"
let infomativo = "text-sky-500"

const pageCompany = () => {
    return (
        <section className={`${Globals.default_style_page}`}>
            <section>
                <div className={`${h3_text}`}>
                    <h3 >Quem Somos</h3>
                </div>
                <div className={`${infomativo}`}>
                    <h3 >A BM Informática foi fundada em 1998 com a missão de transformar a informática em uma ferramenta estratégica para o sucesso dos negócios de seus clientes. Oferecemos assessoria especializada, suporte contínuo e desenvolvimento de sistemas utilizando as mais modernas tecnologias, sempre com o objetivo de maximizar a efetividade dos resultados.</h3>
                </div>
            </section>
            <section className=" flex justify-between">
                <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <h1>Missão</h1>
                    <p>
                        Transformar a informática em uma ferramenta estratégica para o sucesso dos negócios de nossos clientes, oferecendo assessoria especializada, suporte contínuo e desenvolvimento de sistemas com tecnologias modernas.
                    </p>

                </div>
                <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill text-center" viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                    </svg>
                    <h1>Visão</h1>
                    <p>Ser referência em soluções tecnológicas inovadoras, reconhecida pela excelência em nossos serviços e pelo impacto positivo e significativo nos resultados dos nossos clientes, promovendo a transformação digital e o crescimento sustentável dos negócios que atendemos.</p>
                </div>
                <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-fill text-center " viewBox="0 0 16 16">
                        <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
                    </svg>
                    <h1>Visão</h1>
                    <p>Compromisso inabalável com a qualidade, constante inovação em nossas soluções, atendimento personalizado que atende às necessidades específicas de cada cliente e um foco contínuo na maximização da efetividade dos resultados, garantindo sucesso e satisfação.</p>

                </div>
            </section>
        </section>
    );
}

export default pageCompany;