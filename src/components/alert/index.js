'use client';
//      UTIL.       //
import { Toast } from "flowbite-react";
import { FaClock } from "react-icons/fa6";
import React, { useState, useEffect } from 'react';
//     /UTIL.       //

const Alerts = () => {
    // const [openModal, setOpenModal] = useState(false);
    const [situacao, setSituacao] = useState('Carregando...');
    const [corSituacao, setCorSituacao] = useState('');

    useEffect(() => {
        const updateSituacao = () => {
            const hora_atual = new Date().getHours();
            const dia_atual = new Date().getDay(); // 0 (Domingo) - 6 (Sábado)

            if (dia_atual >= 1 && dia_atual <= 5) { // Verifica se é um dia útil (segunda a sexta)
                if (hora_atual >= 8 && hora_atual < 12) {
                    setSituacao('Aberto');
                    setCorSituacao('text-green-500');
                } else if (hora_atual >= 12 && hora_atual < 14) {
                    setSituacao('Plantão (APENAS URGÊNCIAS)');
                    setCorSituacao('text-yellow-500');
                } else if (hora_atual >= 14 && hora_atual < 18) {
                    setSituacao('Aberto');
                    setCorSituacao('text-green-500');
                } else if (hora_atual >= 18 && hora_atual < 20) {
                    setSituacao('Plantão (APENAS URGÊNCIAS)');
                    setCorSituacao('text-yellow-500');
                } else {
                    setSituacao('Fechado');
                    setCorSituacao('text-red-500');
                }
            } else if (dia_atual == 6) { // Verifica se é Sábado
                if (hora_atual >= 8 && hora_atual < 18) {
                    setSituacao('Aberto (APENAS URGÊNCIAS)');
                    setCorSituacao('text-yellow-500');
                } else {
                    setSituacao('Fechado');
                    setCorSituacao('text-red-500');
                }
            } else if (dia_atual == 6) { // Verifica se é Domingo
                if (hora_atual >= 8 && hora_atual < 17) {
                    setSituacao('Aberto (APENAS URGÊNCIAS)');
                    setCorSituacao('text-yellow-500');
                } else {
                    setSituacao('Fechado');
                    setCorSituacao('text-red-500');
                }
            }
        };

        updateSituacao();
        const intervalId = setInterval(updateSituacao, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <Toast className="w-auto fixed bottom-4 right-4 flex items-center">
                <div className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 ${corSituacao}`}>
                    <FaClock className="h-5 w-5" />
                </div>
                <div className={`ml-3 text-sm font-normal ${corSituacao}`}>{situacao}</div>
                <Toast.Toggle />
            </Toast>
        </>

    );
}

export default Alerts;