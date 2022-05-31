import { UserCircle, UserCirclePlus, FacebookLogo, GoogleLogo, InstagramLogo } from "phosphor-react";
import { HeaderPresentation } from "../components/HeaderForPresentation/HeaderPresentation";
import { LinkTo } from "../components/LinksForHeader/LinkTo";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Presentation(){
    return(
        <>
            <HeaderPresentation/>

            <div className="flex flex-row items-center justify-center">
                <div className="hidden md:flex w-[50%] h-[89.5vh]">
                    <img src="../src/img/wallpaper.jpg" alt="wallpaper" className="border-red-600 border-r-4 shadow-xl shadow-red-600" />
                </div>

                <div className="flex flex-col w-full md:w-[50%] h-[85vh] md:h-auto justify-center items-center font-['Akshar']">
                    <h1 className="text-5xl md:text-8xl font-bold">Sejam Bem-Vindos!</h1>
                    <div className="flex flex-col items-center text-2xl md:text-3xl mt-5">
                        <p>Aqui você encontrará o Mangá</p>
                        <p>de sua</p>
                        <b>Preferência</b>
                    </div>

                <div className="flex flex-row mt-6">
                    <Menu>
                        <MenuButton>
                            <div className="flex flex-row items-center text-xl link link-underline link-underline-black mr-10">
                                <span>Entrar</span>
                                <UserCircle className="w-6 h-6 ml-1"/>
                            </div>
                        </MenuButton>
                        <MenuList className="border-2 p-3 rounded-lg">
                            <MenuItem>
                                <Link to="/">
                                    <div className="flex flex-row items-center justify-center w-[200px] bg-red-600 md:bg-zinc-400 hover:bg-red-600 text-zinc-50 p-3 rounded-3xl mb-3 transition-colors">
                                        <GoogleLogo className="mr-2"/><span>Google</span>
                                    </div>
                                </Link>
                            {/* <button 
                                    type="submit" 
                                    className="flex flex-row items-center justify-center w-[200px] bg-red-600 md:bg-zinc-400 hover:bg-red-600 text-zinc-50 p-3 rounded-3xl transition-colors"
                                ><GoogleLogo className="mr-2"/> Google</button> */}
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">
                                    <div className="flex flex-row items-center justify-center w-[200px] bg-red-600 md:bg-zinc-400 hover:bg-red-600 text-zinc-50 p-3 rounded-3xl transition-colors">
                                        <FacebookLogo className="mr-2"/><span>Facebook</span>
                                    </div>
                                </Link>
                            {/* <button 
                                    type="submit" 
                                    className="flex flex-row items-center justify-center w-[200px] bg-red-600 md:bg-zinc-400 hover:bg-red-600 text-zinc-50 p-3 rounded-3xl transition-colors mt-3"
                                ><FacebookLogo className="mr-2"/> Facebook</button> */}
                            </MenuItem>
                        </MenuList>
                    </Menu>
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