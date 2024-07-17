import Globals from "@/components/globals";
import Image from "next/image";
import Contacts from "@/components/contacts";

let input = "bg-[#3D808F] rounded p-2 flex flex-col w-full raleway-medium ";
let container_forms = "flex justify-center w-full";
let container_button = "flex justify-center mt-4";
let mensagem = "h-[100px] bg-[#3D808F] rounded p-2 flex flex-col w-full raleway-medium text-center";
let contato = "text-[#316994] roboto-bold text-center md:text-2xl";

const PageContact = () => {
    return (
        <section className="flex min-h-screen flex-col items-center pt-12 px-4">
            <section className="w-full flex flex-col justify-center gap-5">
                <div className="text-center">
                    <h1 className="font-bold text-4xl">Contato</h1>
                </div>
                <div className="raleway-medium text-[#316994]">
                    <h1 className="text-center">Envie sua mensagem:</h1>
                </div>
                <div className={container_forms}>
                    <form className="w-full max-w-md h-auto flex justify-center flex-col gap-5">
                        <input className={input} type="text" name="Empresa" placeholder="Empresa" />
                        <input className={input} type="text" name="Nome" placeholder="Nome" />
                        <input className={input} type="email" name="E-mail" placeholder="E-mail" />
                        <input className={input} type="text" name="Contato" placeholder="Contato" />
                        <input className={input} type="text" name="Assunto" placeholder="Assunto" />
                        <textarea className={mensagem} name="Mensagem" placeholder="Mensagem"></textarea>
                        <div className={container_button}>
                            <button className="bg-[#C55300] text-white rounded px-4 py-2">Enviar</button>
                        </div>
                    </form>
                </div>
            </section>

            <section className="flex flex-col justify-center pt-4 text-center">
                <div>
                    <h1 className="text-[#316994] roboto-bold">
                        Rua Padre Carapuceiro, 733 - Sala 1001<br />
                        Boa Viagem - Recife - PE<br />
                        E-mail: bm@bminformatica.com.br
                    </h1>
                </div>
                <Contacts/>
                {/* <div className="flex flex-row">
                    <div className={`lg:h-[5px] h-[3px] w-[60%] bg-[#A55820] rounded-[7px] mt-4`}></div>
                    <div className="w-[40%] text-center">
                        <h1 className={`lg:text-3xl text-3xl roboto roboto-bold`}>Fones</h1>
                    </div>
                    <div className={`lg:h-[5px] h-[3px] w-[60%] bg-[#A55820] rounded-[7px] mt-4`}></div>
                </div>
                <div className=" md:flex md:flex-row md:gap-4 md:justify-center grid grid-cols-2 gap-4">
                    <h1 className={`${contato}`}>São Paulo<br />
                        (11) 2626-1337</h1>
                    <h1 className={`${contato}`}>Pernambuco<br />
                        (81) 3126-2050</h1>
                    <h1 className={`${contato}`}>Alagoas<br />
                        (82) 3142-0562</h1>
                    <h1 className={`${contato}`}>Paraíba<br />
                        (83) 3142-0415</h1>
                </div> */}
            </section>
        </section>
    );
}

export default PageContact;
