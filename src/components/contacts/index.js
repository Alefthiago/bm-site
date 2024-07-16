"use client";
// UTIL //
import { Clipboard } from "flowbite-react";
// UTIL. //

const Contacts = () => {

    return (
        <>
            <div className={`w-full mt-[100px] flex items-center gap-5`}>
                <div className={`lg:h-[10px] h-[8px] w-[60%] bg-[#A55820] rounded-[7px]`}></div>
                <div className="w-[40%] text-center">
                    <h1 className={`lg:text-3xl text-3xl roboto-bold`}>Contatos</h1>
                </div>
                <div className={`lg:h-[10px] h-[8px] w-[60%] bg-[#A55820] rounded-[7px]`}></div>
            </div>

            <div className={'w-full mt-[30px] grid grid-cols-2 gap-4 place-content-center text-center text-2xl text-[#316994] roboto-bold'}>
                <div className="relative flex justify-center">
                    <p>
                        Pernambuco <br/>
                        (81) 3126-2050
                    </p>
                    <Clipboard.WithIconText valueToCopy="npm install flowbite-react" />
                </div>
                <div>
                    Alagoas <br />
                    (82) 3142-0562
                </div>
                <div>
                    Paraíba <br />
                    (83) 3142-0415
                </div>
                <div>
                    São Paulo <br />
                    (11) 2626-1337
                </div>
            </div>
        </>
    );
};

export default Contacts;