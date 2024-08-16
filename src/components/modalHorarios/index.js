"use client";
//      UTIL.       //
import { Modal } from "flowbite-react";
import { FaClock } from "react-icons/fa6";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import React, { useState, useEffect } from 'react';
//     /UTIL.       //

const ModalHorarios = (props) => {
    const [situacao, setSituacao] = useState('Aberto');
    const [corSituacao, setCorSituacao] = useState('text-green-500');

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
            <Modal show={props.openModal} size="xl" onClose={() => props.setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <FaClock className={`mx-auto mb-4 h-14 w-14 ${corSituacao}`} />
                        <h3 className="text-lg font-normal text-gray-500">
                            Nossos horários
                        </h3>
                        <p id="horario-situacao" className={corSituacao}>
                            {situacao}
                        </p>
                        <div className="flex justify-center gap-4">
                            <Tabs aria-label="Tabs with icons" variant="underline">
                                <Tabs.Item active title="Comercial" icon={HiUserCircle}>
                                    This is <span className="font-medium text-gray-800">Profile tab's associated content</span>.
                                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                                    control the content visibility and styling.
                                </Tabs.Item>
                                <Tabs.Item title="Administrativo" icon={MdDashboard}>
                                    This is <span className="font-medium text-gray-800">Dashboard tab's associated content</span>.
                                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                                    control the content visibility and styling.
                                </Tabs.Item>
                                <Tabs.Item title="Suporte" icon={HiAdjustments}>
                                    This is <span className="font-medium text-gray-800">Settings tab's associated content</span>.
                                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                                    control the content visibility and styling.
                                </Tabs.Item>
                            </Tabs>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalHorarios;