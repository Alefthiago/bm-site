'use client';
// Util //
import Globals from "@/components/globals";
import { useState, useEffect } from "react";
import CardSolucoes from "@/components/cards/cardSolucoes";
import DatacashModal from "@/components/modals/datacash";
// Util. //

const PaginaSolucoes = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [modalDatacash, setModalDatacash] = useState(false);


    useEffect(() => {
        setInterval(() => setIsLoading(false), 500);
    }, []);

    useEffect(() => {
        Globals.observer(setIsLoading);
    }, [isLoading]);


    return (
        <section className="flex min-h-screen flex-col items-center pt-12 gap-4 ">
            {isLoading ? (
                <div className="flex justify-center items-center min-h-screen absolute">
                    <svg width="100" height="100" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-jump animate-infinite animate-duration-1000 animate-delay-500">
                        <path d="M157.176 4.55984C79.5307 22.1808 19.2564 84.9109 3.38029 161.347C-0.993846 182.415 -1.14817 221.375 3.06502 241.245C10.7793 277.628 27.6144 309.953 52.6179 336.391C92.9905 379.074 141.732 400.039 200.507 400C230.903 399.98 246.769 397.032 275.348 386.1C333.654 363.791 380.065 310.283 396.073 246.916C401.81 224.199 401.153 174.169 394.81 151.049C384.018 111.697 358.185 72.0998 327.141 47.3241C308.941 32.7981 273.659 12.5151 252.318 6.6706C223.777 -1.14538 179.683 -2.40663 157.176 4.55984ZM243.744 62.4187C263.899 72.2638 279.713 94.441 279.828 113.02C279.874 120.746 280.108 120.958 289.998 122.301C311.701 125.254 331.31 139.137 342.051 159.161C346.225 166.937 347.087 171.922 347.085 188.233C347.078 217.637 345.746 219.507 274.993 289.396C220.561 343.165 213.945 349.001 207.41 349.001C196.947 349.001 187.279 338.919 187.279 328.009C187.279 320.196 190.119 316.976 247.053 260.248C304.483 203.026 306.864 200.32 307.804 191.181C309.049 179.053 302.79 168.503 291.597 163.864C274.801 156.902 273.313 157.941 208.094 222.314C149.468 280.174 148.28 281.194 139.393 281.194C132 281.194 129.306 279.965 124.641 274.463C112.674 260.353 112.809 260.152 177.111 195.983C209.108 164.05 236.391 135.775 237.74 133.148C243.223 122.463 238.829 105.732 228.69 98.6866C223 94.7297 206.817 94.172 199.811 97.6914C197.163 99.0212 168.995 125.794 137.217 157.186C83.2787 210.467 78.9156 214.262 71.5674 214.262C60.7665 214.262 51.9102 205.476 51.9102 194.76C51.9102 187.456 55.8368 183.043 112.429 126.743C145.716 93.6317 176.655 64.6236 181.181 62.2853C201.352 51.8693 222.235 51.9131 243.744 62.4187Z" fill="#206BA5" />
                    </svg>

                </div>
            ) : (
                <>
                    <section className="flex flex-col justify-center gap-10 w-full max-w-7xl px-4">
                        <div className="w-full">
                            <div className="w-full text-center">
                                <h1 className="text-4xl font-semibold font-sans text-[#0E0E0E] invisible show-right inter-bold">
                                    Soluções para a sua Empresa
                                </h1>

                                <p className="mt-3 text-gray-600 font-sans invisible show-left inter-regular">
                                    Com quase 20 anos no mercado, a BM Informática desenvolve softwares para os mais diversos segmentos.
                                    <br />
                                    Clique no seu segmento e verifique o que a BM Informática tem a oferecer
                                </p>
                            </div>
                        </div>
                    </section>
                    <div className="container px-6 py-10 mx-auto flex justify-center">
                        <CardSolucoes modalDatacash={modalDatacash} setModalDatacash={setModalDatacash} />
                        <DatacashModal modalDatacash={modalDatacash} setModalDatacash={setModalDatacash} />
                    </div>
                </>
            )}
        </section>
    );
}

export default PaginaSolucoes;