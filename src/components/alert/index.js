'use client';
//      UTIL.       //
import { useState } from "react";
import { Toast } from "flowbite-react";
import { FaClock } from "react-icons/fa6";
import ModalHorarios from "@/components/modalHorarios";
//     /UTIL.       //

const Alerts = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Toast className="fixed bottom-4 right-4 flex items-center">
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500">
                    <FaClock className="h-5 w-5" />
                </div>
                <div className="ml-3 text-sm font-normal">Consulte nossos horários <span onClick={() => {setOpenModal(true)}} className="text-blue-500 hover:cursor-pointer">aqui!</span></div>
                <Toast.Toggle />
            </Toast>
            <ModalHorarios setOpenModal={setOpenModal} openModal={openModal}/>
        </>

    );
}

export default Alerts;