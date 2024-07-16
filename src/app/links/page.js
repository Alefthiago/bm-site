// Util //
import Globals from "@/components/globals";
// Util. //

let barra = "lg:h-[5px] h-[3px] lg:w-[30%] w-[20%] bg-[#A55820] rounded-[7px] lg:mt-4 mt-3"
let titulo = "lg:text-3xl text-xl roboto roboto-bold text-[#316994]"

const pageLinks = () => {
    return (
        <section className="flex min-h-screen flex-col items-center pt-12 px-4">
            <section className="w-full flex flex-col justify-center lg:gap-[5rem] gap-[3rem]">
                <h1 className=" text-center text-3xl roboto roboto-bold ">Links Úteis</h1>
                <div className="flex flex-row justify-center">
                    <div className={`${barra}`}></div>
                    <div className="lg:w-[10%]  w-[30%] text-center">
                        <h1 className={`lg:text-3xl text-xl roboto roboto-bold text-[#316994]`}>Fiscal</h1>
                    </div>
                    <div className={`${barra}`}></div>
                </div>
                <div className="flex flex-col justify-center gap-2">
                    <a href="https://www.sped.fazenda.gov.br/spedfiscalserver/ConsultaContribuinte/Default.aspx" target="_blank" className=" text-[#316994] text-center">Perfil Sped</a>
                    <a href="https://www.sefaz.pe.gov.br/SitePages/Home.aspx" target="_blank" className=" text-[#316994] text-center "> Sefaz PE</a>
                    <a href="https://www.nfe.fazenda.gov.br/portal/principal.aspx" target="_blank" className=" text-[#316994] text-center "> Disponibilidade da NFE</a>
                    <a href="https://www8.receita.fazenda.gov.br/simplesnacional/aplicacoes.aspx?id=21" target="_blank" className=" text-[#316994] text-center "> Consulta Simples Nacional</a>
                    <a href="https://www.sefaz.pe.gov.br/Legislacao/Tributaria/Documents/Legislacao/Tabelas/CFOP.htm" target="_blank" className=" text-[#316994] text-center"> Tabela de CFOP</a>
                    <a href="http://www.sintegra.gov.br/" target="_blank" className=" text-[#316994] text-center"> Consulta Sintegra</a>
                    <a href="http://www.nfce.se.gov.br/portal/painelMonitor.jsp" target="_blank" className=" text-[#316994] text-center"> Disponibilidade NFCE</a>
                </div>
                <div className="flex flex-row justify-center">
                    <div className={`${barra}`}></div>
                    <div className="lg:w-[10%]  w-[30%] text-center">
                        <h1 className={`lg:text-3xl text-xl roboto roboto-bold text-[#316994]`}>Suporte</h1>
                    </div>
                    <div className={`${barra}`}></div>
                </div>
                <div className="flex flex-col justify-center gap-2">
                    <a href="https://download.teamviewer.com/download/version_12x/TeamViewerQS.exe" target="_blank" className=" text-[#316994] text-center">Team ViewerQs (<strong className="text-[#A55820]"   >Novo</strong>)</a>
                    <a href="https://desk.bminformatica.com.br/rustdesk-1.2.0.exe" target="_blank" className=" text-[#316994] text-center "> Rust Desck (<strong className="text-[#A55820]">Win 8,9,10,11</strong>)</a>
                    <a href="http://download.bminformatica.com.br/downloads/bm_informatica/executaveis/LiberaNetUp.exe" target="_blank" className=" text-[#316994] text-center "> Liberanet</a>

                </div>
            </section>
        </section>
    );
}

export default pageLinks;