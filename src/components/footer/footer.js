// "use client";
//    UTIL.   //
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
//   /UTIL.   //

const Footers = () => {
  return (
    <Footer container className="bg-[#206BA5] w-full">
      <div className="w-full">
        {/* <div className="grid w-full justify-between md:justify-between md:flex md:grid-cols-1 gap-4"> */}
        <div className="w-full flex justify-center items-center">
          <div>
            <Footer.Brand
              href="/bm-site"
              src={'./bm/lgbranco.svg'}
              alt={'Logo BM Informática Ltda'}
              name={<span style={{ color: '#F8F8F8' }} className="inter-bold" >BM Informática</span>}
            />
          </div>
          {/* <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Footer.Title title="Contatos" className="text-[#F8F8F8] inter-bold" />
              <Footer.LinkGroup className="text-[#F8F8F8] raleway-regular font-sans grid md:grid-cols-5 grid-cols-2 gap-5">
                <Footer.Link>
                  Pernambuco<br />
                  (81) 3126-2050
                </Footer.Link>

                <Footer.Link>
                  São Paulo<br />
                  (11) 2626-1337
                </Footer.Link>

                <Footer.Link>
                  Alagoas<br />
                  (82) 3142-0562
                </Footer.Link>

                <Footer.Link>
                  Paraíba<br />
                  (83) 3142-0415
                </Footer.Link>

                <Footer.Link href="https://wa.me/558131262050" target="_blank">
                  Whatsapp <br />
                  (81) 3126-2050
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="E-mails" className="text-[#F8F8F8] inter-bold" />
              <Footer.LinkGroup row className="text-[#F8F8F8] raleway-regular">
                <Footer.Link href="mailto:bm@bminformatica.com.br">bm@bminformatica.com.br</Footer.Link>
                <Footer.Link href="mailto:comercial@bminformatica.com.br">comercial@bminformatica.com.br</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div> */}
        </div>
        {/* <Footer.Divider className="text-[#F8F8F8]" /> */}
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <div className="mt-2 flex space-x-6 justify-center">
            <Footer.Icon target="_blank" href="https://www.facebook.com/bminformaticaoficial/?_rdr" icon={BsFacebook} className="text-[#F8F8F8]" />
            <Footer.Icon target="_blank" href="https://www.instagram.com/bminformaticaoficial/" icon={BsInstagram} className="text-[#F8F8F8]" />
            <Footer.Icon target="_blank" href="https://br.linkedin.com/company/bm-inform-tica-ltda" icon={FaLinkedinIn} className="text-[#F8F8F8]" />
          </div>

          <Footer.Copyright target="_blank" href="#" by="BM Informática Ltda" year={2024} className="text-[#F8F8F8] inter-bold" />
        </div>
      </div>
    </Footer>
  );
};

export default Footers;