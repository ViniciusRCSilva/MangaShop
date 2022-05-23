import { UserCircle, UserCirclePlus } from "phosphor-react";
import { HeaderPresentation } from "../components/HeaderForPresentation/HeaderPresentation";
import { LinkTo } from "../components/LinksForHeader/LinkTo";

export function Presentation(){
    return(
        <>
            <HeaderPresentation/>

            <div className="flex flex-row items-center justify-center">
                <div className="hidden md:flex w-[50%] h-[85vh]">
                    <img src="../src/img/wallpaper_cortado.png" alt="" />
                </div>

                <div className="flex flex-col w-full md:w-[50%] h-[85vh] md:h-auto justify-center items-center font-['Akshar']">
                    <h1 className="text-5xl md:text-8xl font-bold">Sejam Bem-Vindos!</h1>
                    <div className="flex flex-col items-center text-2xl md:text-3xl mt-5">
                        <p>Aqui você encontrará o Mangá</p>
                        <p>de sua</p>
                        <b>Preferência</b>
                    </div>

                <div className="flex flex-row mt-6">
                    <div className="flex flex-row items-center text-xl link link-underline link-underline-black mr-10">
                        <LinkTo linkPath={'/autenticacao'} linkName={'Entrar'} />
                        <UserCircle className="w-6 h-6 ml-1"/>
                    </div>
                    <div className="flex flex-row items-center text-xl link link-underline link-underline-black">
                        <LinkTo linkPath={'/autenticacao'} linkName={'Cadastrar'} />
                        <UserCirclePlus className="w-6 h-6 ml-1"/>
                    </div>
                </div>

                </div>
            </div>
        </>
    )
}