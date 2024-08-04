"use client";

import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";

// let div_footer = ' pt-2 '
// let div_inner_footer = '  '
// let text_footer = 'color'
// let div_icons = 'text-zinc-50   '


const Footers = () => {
  return (
    <Footer container className="bg-[#206BA5] w-full">
      <div className="w-full">
        <div className="grid w-full justify-between md:justify-between md:flex md:grid-cols-1 gap-4">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src={'./lgbranco.svg'}
              alt={'Logo BM Informatica'}
              name={<span style={{ color: '#F8F8F8' }} className="font-mono" >BM informatica</span>}
            />
          </div>
          <div className="grid lg:grid-cols-4 gap-8 md:mt-4 md:grid-cols-2 md:gap-6" >
            <div>
              <Footer.Title title="Fones" className="text-[#F8F8F8] font-mono" />
              <Footer.LinkGroup col className="text-[#F8F8F8] font-sans">
                <Footer.Link target="_blank" href="#">
                  Pernambuco <br />
                  (81) 3126-2050
                </Footer.Link>
                <Footer.Link target="_blank" href="#">
                  Alagoas <br />
                  (82) 3142-0562
                </Footer.Link>
                <Footer.Link target="_blank" href="#">
                  Paraíba <br />
                  (83) 3142-0415
                </Footer.Link>
                <Footer.Link target="_blank" href="#">
                  São Paulo <br />
                  (11) 2626-1337
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="E-mails" className="text-[#F8F8F8] font-mono" />
              <Footer.LinkGroup col className="text-[#F8F8F8]  font-sans">
                <Footer.Link target="_blank" href="#">bm@bminformatica.com.br</Footer.Link>
                <Footer.Link target="_blank" href="#">comercial@bminformatica.com.br</Footer.Link>
                <Footer.Link target="_blank" href="#">suporte@bminformatica.com.br</Footer.Link>
                <Footer.Link target="_blank" href="#">analise@bminformatica.com.br</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Suporte" className="text-[#F8F8F8] font-mono" />
              <Footer.LinkGroup col className="text-[#F8F8F8]  font-sans">
                <Footer.Link target="_blank" href="https://download.teamviewer.com/download/version_12x/TeamViewerQS.exe" >Team ViewerQs (<strong className="text-[#D67229]">Suporte BM</strong>)</Footer.Link>

                <Footer.Link target="_blank" href="https://desk.bminformatica.com.br/rustdesk-1.2.0.exe"> Rust Desk (<strong className="text-[#D67229]">Win 8,9,10,11</strong>)</Footer.Link>
                <Footer.Link target="_blank" href="https://bit.ly/apkrustdesk1" >  Rust Desk (<strong className="text-[#D67229]">Android</strong>)</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Fiscal" className="text-[#F8F8F8] font-mono" />
              <Footer.LinkGroup col className="text-[#F8F8F8]  font-sans">
                <Footer.Link href="http://www.sintegra.gov.br/" >Consulta Sintegra</Footer.Link>

                <Footer.Link target="_blank" href="https://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=resumo&tipoConteudo=7PhJ+gAVw2g=&AspxAutoDetectCookieSupport=1"> Consulta (<strong className="text-[#D67229]">NF-e</strong>)</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="text-[#F8F8F8]" />
        <div className="w-full md:flex md:items-center md:justify-between">
          <Footer.Copyright target="_blank" href="#" by="BM Informática Ltda" year={2024} className="text-[#F8F8F8] font-mono" />

          <div className="mt-4 flex space-x-6 md:mt-0 md:justify-center  font-sans">
            <Footer.Icon target="_blank" href="https://www.facebook.com/bminformaticaoficial/?_rdr" icon={BsFacebook} className="text-[#F8F8F8]" />
            <Footer.Icon target="_blank" href="https://www.instagram.com/bminformaticaoficial/" icon={BsInstagram} className="text-[#F8F8F8]" />
            <Footer.Icon target="_blank" href="https://br.linkedin.com/company/bm-inform-tica-ltda" icon={FaLinkedinIn} className="text-[#F8F8F8]" />
          </div>
        </div>
      </div>
    </Footer>
    // <footer className={'w-full h-[70px]'}>
    //   <section className={'w-full h-full bg-[#206BA5] flex items-center justify-center '}>
    //     <section className={'flex justify-between'}>
    //       <div className={`${div_footer}`}>
    //         <div className={`${div_inner_footer}`}>
    //           <p className="text-zinc-50 md: text-sm  md: pt-1 " ><span >CopyRight © Todos os drives reservados</span></p>
    //         </div>
    //       </div>
    //       <div className={'flex justify-between pl-5'}>
    //         <div>
    //           <div className={' text-zinc-50 pb-1  '}>
    //             <a href="https://www.instagram.com/bminformaticaoficial/" target="_blank" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram  size-5  " viewBox="0 0 16 16">
    //               < path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
    //             </svg></a>
    //           </div>
    //           <div className={' text-zinc-50'}>
    //             <a href="comercial@bminformatica.com.br" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill size-5 " viewBox="0 0 16 16">
    //               <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
    //             </svg></a>
    //           </div>
    //         </div>
    //         <div className={' pl-2  '}>
    //           <div className={' text-zinc-50 pb-1'}>
    //             <a href="https://br.linkedin.com/company/bm-inform-tica-ltda" target="_blank" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin size-5" viewBox="0 0 16 16">
    //               <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
    //             </svg></a>
    //           </div>
    //           <div className={' text-zinc-50'}>
    //             <a href="https://www.facebook.com/bminformaticaoficial/?_rdr" target="_blank" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook cursor-pointer  size-5" viewBox="0 0 16 16">
    //               <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
    //             </svg></a>
    //           </div>

    //         </div>
    //       </div>
    //     </section>
    //   </section>
    // </footer>
  );
};

export default Footers;