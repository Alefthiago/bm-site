'use client';
import { useState } from "react";

// import { HiInformationCircle } from "react-icons/hi";
// import { Alert } from "flowbite-react";


const Form = (props) => {
    const [form, setForm] = useState({
        nome: '',
        sobreNome: '',
        email: '',
        documento: '',
        msg: ''
    });

    const changeForm = (e) => {
        let { name, value } = e.target;
        // console.log(value)
        setForm(prevSate => ({
            ...prevSate,
            [name]: value.length == 0 ? value.trim() : value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // form.nome = form.nome.trim();
        // form.sobreNome = form.sobreNome.trim();
        // form.email = form.email.trim();
        // form.documento = form.documento.trim();
        // form.msg = form.msg.trim();
        console.log(form);
    }

    return (
        <div className="p-4 py-6 rounded-lg md:p-8 bg-[#206BA5] invisible show-right">
            <h1 className="text-2xl text-[#F8F8F8] md:text-3xl inter-bold pt-5">Envie sua Mensagem</h1>
            
            <form className="pt-5 inter-regular" id="form-cadastro" onSubmit={handleSubmit}>
                <div className="-mx-2 md:items-center md:flex">
                    <div className="flex-1 px-2">
                        <label className="block mb-2 text-sm text-[#F8F8F8]">Nome</label>
                        <input type="text" placeholder="Nome" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" name="nome" value={form.nome} onChange={changeForm} />
                    </div>

                    <div className="flex-1 px-2 mt-4 md:mt-0">
                        <label className="block mb-2 text-sm text-[#F8F8F8]">Sobrenome</label>
                        <input type="text" placeholder="Sobrenome" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" name="sobreNome" value={form.sobreNome} onChange={changeForm} />
                    </div>
                </div>

                <div className="mt-4">
                    <label className="block mb-2 text-sm text-[#F8F8F8]">E-mail</label>
                    <input type="email" placeholder="E-mail" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" name="email" value={form.email} onChange={changeForm} />
                </div>

                <div className="mt-4">
                    <label className="block mb-2 text-sm text-[#F8F8F8]">CNPJ/CPF</label>
                    <input type="text" placeholder="Documento" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" name="documento" value={form.documento} onChange={changeForm} />
                </div>

                <div className="w-full mt-4">
                    <label className="block mb-2 text-sm text-[#F8F8F8]">Mensagem</label>
                    <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Mensagem" name="msg" value={form.msg} onChange={changeForm}></textarea>
                </div>

                <button type="submit" className="inter-bold w-full px-6 py-3 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#D67229] hover:bg-[#C55300] rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default Form;