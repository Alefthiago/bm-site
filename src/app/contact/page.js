import Globals from "@/components/globals";
import Image from "next/image";

let input = "bg-[#3D808F] rounded p-2 flex flex-col w-full raleway-medium";
let container_forms = "flex justify-center w-full";
let container_button = "flex justify-center mt-4";
let mensagem = "h-[100px] bg-[#3D808F] rounded p-2 flex flex-col w-full raleway-medium text-center";

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
                            <button className="bg-[#C55300] text-white rounded px-4 py-2">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </section>

            <section className="flex flex-col justify-center pt-4 gap-8 text-center">
                <div>
                    <h1 className="text-[#316994] roboto-bold">
                        Rua Padre Carapuceiro, 733 - Sala 1001<br />
                        Boa Viagem - Recife - PE<br />
                        E-mail: bm@bminformatica.com.br
                    </h1>
                </div>
                <div>
                    <h1 className="text-black roboto-bold text-4xl">Fones</h1>
                </div>
                <div className="flex flex-col  md:flex-row md:gap-4 justify-center">
                    <h1 className="text-[#316994] roboto-bold text-center text-2xl">São Paulo<br />
                    (11) 2626-1337</h1>
                    <h1 className="text-[#316994] roboto-bold text-center text-2xl">Pernambuco<br />
                    (81) 3126-2050</h1>
                    <h1 className="text-[#316994] roboto-bold text-center text-2xl">Alagoas<br />
                    (82) 3142-0562</h1>
                    <h1 className="text-[#316994] roboto-bold text-center text-2xl">Paraíba<br />
                    (83) 3142-0415</h1>
                </div>
            </section>
        </section>
    );
}

export default PageContact;
