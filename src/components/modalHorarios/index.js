"use client";
//      UTIL.       //
import { Modal } from "flowbite-react";
import { FaClock } from "react-icons/fa6";

import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
//     /UTIL.       //

const ModalHorarios = (props) => {

    return (
        <>
            <Modal show={props.openModal} size="xl" onClose={() => props.setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <FaClock className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Nossos horários
                            
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Tabs aria-label="Tabs with icons" variant="underline">
                                <Tabs.Item active title="Comercial" icon={HiUserCircle}>
                                    This is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
                                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                                    control the content visibility and styling.
                                </Tabs.Item>
                                <Tabs.Item title="Administrativo" icon={MdDashboard}>
                                    This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
                                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                                    control the content visibility and styling.
                                </Tabs.Item>
                                <Tabs.Item title="Suporte" icon={HiAdjustments}>
                                    This is <span className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</span>.
                                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                                    control the content visibility and styling.
                                </Tabs.Item>
                            </Tabs>
                            {/* <Button color="failure" onClick={() => setOpenModal(false)}>
                                {"Yes, I'm sure"}
                            </Button>
                            <Button color="gray" onClick={() => setOpenModal(false)}>
                                No, cancel
                            </Button> */}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalHorarios;