'use client';
import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";

const Form = (props) => {
    const $btn = document.getElementById('btnForm');
    const [spinnerVisivel, setSpinnerVisivel] = useState(false);
    const [btnFormTextoVisivel, setBtnFormTextoVisivel] = useState(true);
    const [form, setForm] = useState({
        nome: '',
        sobreNome: '',
        email: '',
        contato: '',
        documento: '',
        msg: ''
    });

    const changeForm = (e) => {
        let { name, value } = e.target;
        // console.log(value)
        if (name === 'contato') {
            value = value.replace(/\D/g, '');
            if (value.length <= 10) {
                value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
            }
            else if (value.length > 10 && value.length <= 11) {
                value = value.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
            }
        } else if (name === 'documento') {
            value = value.replace(/\D/g, '');
            if (value.length <= 11) {
                value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
            }
            else if (value.length > 11 && value.length <= 14) {
                value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
            }
        }
        setForm(prevSate => ({
            ...prevSate,
            [name]: value
        }));
    }

    const eventoSubmit = async (e) => {
        e.preventDefault();
        $btn.disabled = true;
        setSpinnerVisivel(true);
        setBtnFormTextoVisivel(false);

        const formData = new FormData();
        formData.append('nome', form.nome);
        formData.append('sobreNome', form.sobreNome);
        formData.append('email', form.email);
        formData.append('contato', form.contato);
        formData.append('documento', form.documento);
        formData.append('msg', form.msg);

        fetch('https://webhooksweb.n8n.bmhelp.click/webhook/form-contato-site-bm', {
            method: 'POST',
            body: formData,
            // contentType: 'json',
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    props.setMsgAlertaForm({ msg: data.message, tipo: 0 });
                } else {
                    console.error('Error:', data.message);
                    props.setMsgAlertaForm({ msg: 'Houve um problema inesperado. Por favor, entre em contato com o suporte se precisar de ajuda', tipo: 2 });
                }
                setForm({ nome: '', sobreNome: '', email: '', contato: '', documento: '', msg: '' });
            })
            .catch(error => {
                console.error('Error:', error);
                props.setMsgAlertaForm({ msg: 'Houve um problema inesperado. Por favor, entre em contato com o suporte se precisar de ajuda', tipo: 1 });
            })
            .finally(() => {
                $btn.disabled = false;
                setSpinnerVisivel(false);
                setBtnFormTextoVisivel(true);
            });
    }

    //      Remove espaços em branco.        //
    const eventoBlur = (e) => {
        const valorCampo = e.target.value.trim();
        // console.log(valorCampo)
        // console.log(e.target.name);
        setForm(prevState => ({
            ...prevState,
            [e.target.name]: valorCampo
        }));
    };
    
    //      Remove espaços em branco.        //

    return (
        <div className="p-4 py-6 rounded-lg md:p-8 bg-[#206BA5] invisible show-right">
            <h1 className="text-2xl text-[#F8F8F8] md:text-3xl inter-bold pt-5">Envie sua Mensagem</h1>

            <form className="pt-5 inter-regular" id="formContato" onSubmit={eventoSubmit}>
                <div className="-mx-2 md:items-center md:flex">
                    <div className="flex-1 px-2">
                        <label className="block mb-2 text-sm text-[#F8F8F8]">Nome <span className="text-red-600">*</span></label>
                        <input type="text" placeholder="Nome" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" name="nome" value={form.nome} onChange={changeForm} onBlur={eventoBlur} required />
                    </div>

                    <div className="flex-1 px-2 mt-4 md:mt-0">
                        <label className="block mb-2 text-sm text-[#F8F8F8]">Sobrenome <span className="text-red-600">*</span></label>
                        <input type="text" placeholder="Sobrenome" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" name="sobreNome" value={form.sobreNome} onChange={changeForm} onBlur={eventoBlur} required />
                    </div>
                </div>

                <div className="mt-4">
                    <label className="block mb-2 text-sm text-[#F8F8F8]">E-mail <span className="text-red-600">*</span></label>
                    <input type="email" placeholder="E-mail" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" name="email" value={form.email} onChange={changeForm} onBlur={eventoBlur} required />
                </div>

                <div className="mt-4">
                    <label className="block mb-2 text-sm text-[#F8F8F8]">
                        Contato
                    </label>
                    <input
                        type="text"
                        placeholder="Apenas Números"
                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        name="contato"
                        value={form.contato}
                        onChange={changeForm}
                        onBlur={eventoBlur}
                        maxLength={16}
                        minLength={14}
                    />
                    <small className="block mt-1 text-xs text-[#F8F8F8]">
                        Insira o número no formato: (00) 0 0000-0000
                    </small>
                </div>

                <div className="mt-4">
                    <label className="block mb-2 text-sm text-[#F8F8F8]">CNPJ/CPF <span className="text-red-600">*</span></label>
                    <input type="text" placeholder="Apenas Números" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" name="documento" value={form.documento} onChange={changeForm} onBlur={eventoBlur} required maxLength={18} minLength={14} />
                </div>

                <div className="w-full mt-4">
                    <label className="block mb-2 text-sm text-[#F8F8F8]">Mensagem <span className="text-red-600">*</span></label>
                    <textarea placeholder="Mensagem" className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" name="msg" value={form.msg} onChange={changeForm} onBlur={eventoBlur} required></textarea>
                </div>

                <button type="submit" id="btnForm" className="inter-bold w-full px-6 py-3 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#D67229] hover:bg-[#C55300] rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    <Spinner id="spinner" className={`${spinnerVisivel === false ? 'hidden' : ''}`} aria-label="Carregando" size="md" />
                    <span id="btnFormTexto" className={`pl-1 ${btnFormTextoVisivel === false ? 'hidden' : ''}`}>Enviar</span>
                </button>
            </form>
        </div>
    )
}

export default Form;