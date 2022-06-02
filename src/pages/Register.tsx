import { CaretRight, CheckCircle } from "phosphor-react";
import { useState } from "react";

export function Register(){
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [birth, setBirth] = useState('')
    const [cep, setCep] = useState('')
    const [address, setAddress] = useState('')
    const [complement, setComplement] = useState('')
    const [tel1, setTel1] = useState('')
    const [tel2, setTel2] = useState('')

    return(
        <div className="flex w-[100vw] h-[100vh] justify-center items-center">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg border-2">
                <h1 className="mb-2">Cadastro</h1>

                <span>Dados pessoais</span>
                <form className="flex flex-col items-center" action="">

                    <div className="flex flex-row items-center mt-2 mb-2">
                        <CaretRight />
                        <input 
                            placeholder="Nome" 
                            className="w-[245px] border-1 hover:border-red-600 rounded-3xl focus:border-red-600 focus:ring-red-600 focus:ring-1 focus:outline-none" 
                            type="text"
                            onChange={event => setName(event.target.value)}
                        />
                    </div>

                    <div className="flex flex-row items-center mt-2 mb-2">
                        <CaretRight />
                        <input 
                            placeholder="CPF" 
                            className="w-[245px] border-1 hover:border-red-600 rounded-3xl focus:border-red-600 focus:ring-red-600 focus:ring-1 focus:outline-none" 
                            type="text"
                            onChange={event => setCpf(event.target.value)}
                        />
                    </div>

                    <span className="flex md:hidden">Data de Aniversário</span>
                    <div className="flex flex-row items-center mt-2 mb-2">
                        <CaretRight />
                        <input 
                            className="w-[245px] border-1 hover:border-red-600 rounded-3xl focus:border-red-600 focus:ring-red-600 focus:ring-1 focus:outline-none" 
                            type="date"
                            onChange={event => setBirth(event.target.value)}
                        />
                    </div>

                    <span>Dados de endereço</span>
                    <div className="flex flex-row items-center mt-2 mb-2">
                        <CaretRight/>
                        <input 
                            placeholder="CEP" 
                            className="w-[245px] border-1 hover:border-red-600 rounded-3xl focus:border-red-600 focus:ring-red-600 focus:ring-1 focus:outline-none" 
                            type="text"
                            onChange={event => setCep(event.target.value)}
                        />
                    </div>

                    <div className="flex flex-row items-center mt-2 mb-2">
                        <CaretRight/>
                        <input 
                            placeholder="Endereço" 
                            className="w-[245px] border-1 hover:border-red-600 rounded-3xl focus:border-red-600 focus:ring-red-600 focus:ring-1 focus:outline-none" 
                            type="text"
                            onChange={event => setAddress(event.target.value)}
                        />
                    </div>

                    <div className="flex flex-row items-center mt-2 mb-2">
                        <CaretRight/>
                        <input 
                            placeholder="Complemento" 
                            className="w-[245px] border-1 hover:border-red-600 rounded-3xl focus:border-red-600 focus:ring-red-600 focus:ring-1 focus:outline-none" 
                            type="text"
                            onChange={event => setComplement(event.target.value)}
                        />
                    </div>

                    <span>Dados de contato</span>
                    <div className="flex flex-row items-center mt-2 mb-2">
                        <CaretRight/>
                        <div className="bg-red-600 text-zinc-50 pt-2 pb-2.5 pl-1 pr-1 rounded-l-3xl">
                            <p>+55</p>
                        </div>
                        <input 
                            placeholder="9999-9999" 
                            className="border-1 rounded-r-3xl hover:border-red-600 focus:border-red-600 focus:ring-red-600 focus:ring-1 focus:outline-none" 
                            type="tel"
                            pattern="[0-9]{4}-[0-9]{4}"
                            maxLength={9}
                            onChange={event => setTel1(event.target.value)}
                        />
                    </div>

                    <div className="flex flex-row items-center mt-2 mb-2">
                        <CaretRight/>
                        <div className="bg-red-600 text-zinc-50 pt-2 pb-2.5 pl-1 pr-1 rounded-l-3xl">
                            <p>+55</p>
                        </div>
                        <input 
                            placeholder="9999-9999" 
                            className="border-1 rounded-r-3xl hover:border-red-600 focus:border-red-600 focus:ring-red-600 focus:ring-1 focus:outline-none" 
                            type="tel"
                            pattern="[0-9]{4}-[0-9]{4}"
                            maxLength={9}
                            onChange={event => setTel2(event.target.value)}
                        />
                    </div>

                    <button 
                        type="submit"
                        disabled={name.length === 0 || cpf.length === 0 || birth.length === 0 || cep.length === 0 || address.length === 0 || complement.length === 0 || tel1.length === 0}
                        className="flex flex-row items-center mt-6 text-zinc-50 bg-red-600 hover:bg-red-500 transition-all p-2 rounded-xl disabled:opacity-50 disabled:bg-transparent disabled:text-black"
                    >Finalizar Cadastro <CheckCircle className="ml-1"/></button>

                </form>
            </div>
        </div>
    )
}