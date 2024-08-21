"use client";
//      UTIL.       //
import { Modal } from "flowbite-react";
import { FaClock } from "react-icons/fa6";
import { Tabs } from "flowbite-react";
import { List } from "flowbite-react";
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

import React, { useState, useEffect } from 'react';
//     /UTIL.       //

const ModalHorarios = (props) => {
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
                        <div className="flex justify-center pt-5">
                            <Tabs aria-label="Pills" variant="pills">
                                <Tabs.Item active title="Comercial - Administrativo">
                                    <Timeline>
                                        <Timeline.Item>
                                            <Timeline.Point icon={FaClock} />
                                            <Timeline.Content className="text-left">
                                                <Timeline.Time>Dias Úteis</Timeline.Time>
                                                <Timeline.Title>08:00 às 12:00 - 14:00 às 18:00</Timeline.Title>
                                                <Timeline.Body>
                                                    Para atendimentos fora do horário informado, consulte a disponibilidade.
                                                </Timeline.Body>
                                                <Button color="gray">
                                                    Entrar em Contato
                                                </Button>
                                            </Timeline.Content>
                                        </Timeline.Item>
                                    </Timeline>
                                </Tabs.Item>

                                <Tabs.Item title="Suporte">
                                    <Timeline>
                                        <Timeline.Item>
                                            <Timeline.Point icon={FaClock} />
                                            <Timeline.Content className="text-left">
                                                <Timeline.Time>Dias Úteis</Timeline.Time>
                                                <Timeline.Title>08:00 às 12:00</Timeline.Title>
                                            </Timeline.Content>

                                            <Timeline.Content className="text-left">
                                                <Timeline.Title>12:00 às 14:00 Plantão (APENAS URGÊNCIAS)</Timeline.Title>
                                            </Timeline.Content>

                                            <Timeline.Content className="text-left">
                                                <Timeline.Title>14:00 às 18:00</Timeline.Title>
                                            </Timeline.Content>

                                            <Timeline.Content className="text-left">
                                                <Timeline.Title>18:00 às 20:00 (APENAS URGÊNCIAS)</Timeline.Title>
                                            </Timeline.Content>
                                        </Timeline.Item>

                                        <Timeline.Item>
                                            <Timeline.Point icon={FaClock} />
                                            <Timeline.Content className="text-left">
                                                <Timeline.Time>Sabado</Timeline.Time>
                                                <Timeline.Title>08:00 às 18:00 (APENAS URGÊNCIAS)</Timeline.Title>
                                            </Timeline.Content>

                                        </Timeline.Item>

                                        <Timeline.Item>
                                            <Timeline.Point icon={FaClock} />
                                            <Timeline.Content className="text-left">
                                                <Timeline.Time>Domingo e Feriados</Timeline.Time>
                                                <Timeline.Title>08:00 às 17:00 (APENAS URGÊNCIAS)</Timeline.Title>
                                            </Timeline.Content>
                                        </Timeline.Item>
                                    </Timeline>
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