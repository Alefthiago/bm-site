import { Toast, ToastToggle } from "flowbite-react";
import { HiCheck, HiExclamation, HiX } from "react-icons/hi";

const AlertForm = (props) => {
    return (
        <div className="fixed bottom-4 right-4 flex flex-col gap-4 z-50">
            {props.msgAlertaForm.tipo === 0 ? (
                <Toast>
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500"
                        onClick={() => props.setMsgAlertaForm({ msg: null, tipo: null })}>
                        <HiCheck className="h-5 w-5" />
                    </div>
                    <div className="ml-3 text-sm font-normal">
                        {props.msgAlertaForm.msg}
                    </div>
                    <ToastToggle />
                </Toast>
            ) : props.msgAlertaForm.tipo === 1 ? (
                <Toast>
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500"
                        onClick={() => props.setMsgAlertaForm({ msg: null, tipo: null })}>
                        <HiX className="h-5 w-5" />
                    </div>
                    <div className="ml-3 text-sm font-normal">
                        {props.msgAlertaForm.msg}
                    </div>
                    <ToastToggle />
                </Toast>
            ) : props.msgAlertaForm.tipo === 2 ? (
                <Toast>
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500"
                        onClick={() => props.setMsgAlertaForm({ msg: null, tipo: null })}>
                        <HiExclamation className="h-5 w-5" />
                    </div>
                    <div className="ml-3 text-sm font-normal">
                        {props.msgAlertaForm.msg}
                    </div>
                    <ToastToggle />
                </Toast>
            ) : null}
        </div>
    );
};

export default AlertForm;