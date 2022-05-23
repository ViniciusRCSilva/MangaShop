import { CaretRight, CheckCircle } from "phosphor-react";
import { useState } from "react";

export function RegisterContent(){
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [tel, setTel] = useState('')

    return(
        <div className="flex w-[100vw] h-[100vh] justify-center items-center">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg border-2">
                <h1 className="mb-2">Cadastrar</h1>
                <form className="flex flex-col items-center" action="">
                    <div className="flex flex-row items-center mt-2 mb-2">
                        <CaretRight />
                        <input 
                            placeholder="Nome" 
                            className="w-[245px] border-1 rounded-3xl focus:border-red-600 focus:ring-red-600 focus:ring-1 focus:outline-none" 
                            type="text"
                            onChange={event => setName(event.target.value)}
                        />
                    </div>

                    <div className="flex flex-row items-center mt-2 mb-2">
                        <CaretRight/>
                        <input 
                            placeholder="Endereço" 
                            className="w-[245px] border-1 rounded-3xl focus:border-red-600 focus:ring-red-600 focus:ring-1 focus:outline-none" 
                            type="text"
                            onChange={event => setAddress(event.target.value)}
                        />
                    </div>

                    <div className="flex flex-row items-center mt-2 mb-2">
                        <CaretRight/>
                        <div className="bg-red-600 text-zinc-50 pt-2 pb-2.5 pl-1 pr-1 rounded-l-3xl">
                            <p>+55</p>
                        </div>
                        <input 
                            placeholder="9999-9999" 
                            className="border-1 rounded-r-3xl focus:border-red-600 focus:ring-red-600 focus:ring-1 focus:outline-none" 
                            type="tel"
                            pattern="[0-9]{4}-[0-9]{4}"
                            maxLength={9}
                            onChange={event => setTel(event.target.value)}
                        />
                    </div>

                    <button 
                        type="submit"
                        disabled={name.length === 0 || address.length === 0 || tel.length === 0}
                        className="flex flex-row items-center mt-6 text-zinc-50 bg-red-600 hover:bg-red-500 transition-all p-2 rounded-xl disabled:opacity-50 disabled:bg-transparent disabled:text-black"
                    >Finalizar Cadastro <CheckCircle className="ml-1"/></button>
                </form>
            </div>
        </div>
    )
}