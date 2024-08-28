// "use client";
//    UTIL.   //
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import Alerts from "@/components/alert";
//   /UTIL.   //

const Footers = () => {
  return (
    <Footer container className="bg-[#206BA5] w-full">
      <Alerts />
      <div className="w-full">
        <div className="grid w-full justify-between md:justify-between md:flex md:grid-cols-1 gap-4">
          <div>
            <Footer.Brand
              href="#"
              src={'./bm/lgbranco.svg'}
              alt={'Logo BM Informatica'}
              name={<span style={{ color: '#F8F8F8' }} className="inter-bold" >BM Informática</span>}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8" >
            <div>
              <Footer.Title title="Fones" className="text-[#F8F8F8] inter-bold" />
              <Footer.LinkGroup className="text-[#F8F8F8] raleway-regular font-sans grid md:grid-cols-2 grid-cols-2 gap-5">
                <Footer.Link href="#">
                  Central <br />
                  (81) 3126-2050
                </Footer.Link>

                <Footer.Link href="#">
                  Central <br />
                  (81) 3439-5259
                </Footer.Link>

                <Footer.Link href="#">
                  Central <br />
                  (81) 2011-2754
                </Footer.Link>

                <Footer.Link href="#">
                  Comercial (Whatsapp) <br />
                  (81) 9 8804-9715
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="E-mails" className="text-[#F8F8F8] inter-bold" />
              <Footer.LinkGroup col className="text-[#F8F8F8] raleway-regular">
                <Footer.Link href="#">bm@bminformatica.com.br</Footer.Link>
                <Footer.Link href="#">comercial@bminformatica.com.br</Footer.Link>
                <Footer.Link href="#">suporte@bminformatica.com.br</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="text-[#F8F8F8]" />
        <div className="w-full md:flex md:items-center md:justify-between">
          <Footer.Copyright target="_blank" href="#" by="BM Informática Ltda" year={2024} className="text-[#F8F8F8] inter-bold" />

          <div className="mt-4 flex space-x-6 md:mt-0 md:justify-center">
            <Footer.Icon target="_blank" href="https://www.facebook.com/bminformaticaoficial/?_rdr" icon={BsFacebook} className="text-[#F8F8F8]" />
            <Footer.Icon target="_blank" href="https://www.instagram.com/bminformaticaoficial/" icon={BsInstagram} className="text-[#F8F8F8]" />
            <Footer.Icon target="_blank" href="https://br.linkedin.com/company/bm-inform-tica-ltda" icon={FaLinkedinIn} className="text-[#F8F8F8]" />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Footers;