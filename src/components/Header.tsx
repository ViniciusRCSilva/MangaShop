import { BookOpen, Cards, CaretDown, Gear, House, List, MagnifyingGlass, Power, ShoppingCart, UserCircle } from "phosphor-react";
import { LinkTo } from "./LinksForHeader/LinkTo";
import { useState } from "react";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from "@chakra-ui/react";

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody
} from '@chakra-ui/react'

export function Header(){
    const [searchContent, setSearchContent] = useState('')

    return(
        <div className="fixed w-full bg-white dark:bg-slate-800 dark:text-zinc-50 font-['Quicksand']">
            <div className="flex flex-row items-center justify-between pl-6 pr-6 pt-6 pb-6 shadow-lg">
                <div className="flex flex-row items-center text-xl font-bold font-['Raleway'] text-red-600 hover:text-red-500 transition-colors">
                    <LinkTo linkPath={'/'} linkName={'mangáSHOP'} />
                    <BookOpen className="ml-1 italic"/>
                </div>

                <div className="hidden md:flex flex-row">
                    <input 
                        type="text" 
                        placeholder="Pesquise o nome do mangá..."
                        className="rounded-l-3xl flex w-[25vw] hover:border-red-600 focus:border-red-600 focus:ring-red-600 focus:ring-1 focus:outline-none placeholder:text-zinc-400" 
                        onChange={event => setSearchContent(event.target.value)}
                    />
                    <button 
                        type="button"
                        disabled={searchContent.length === 0}
                        className="rounded-r-3xl bg-red-600 pl-4 pr-4 hover:bg-red-500 text-zinc-50 transition-colors disabled:bg-zinc-400 disabled:opacity-50 disabled:hover:bg-zinc-400"
                    ><MagnifyingGlass/></button>
                </div>

                <div className="flex flex-row items-center md:hidden dark:bg-slate-800 dark:text-zinc-50">
                    <Popover>
                        <PopoverTrigger>
                            <MagnifyingGlass className="w-6 h-6 mr-6"/>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverBody>
                                <div className="flex flex-row mt-12 mr-3">
                                    <input 
                                        type="text" 
                                        placeholder="Pesquise o nome do mangá..."
                                        className="rounded-l-3xl flex w-[80vw] focus:border-red-600 focus:ring-red-600 focus:ring-1 focus:outline-none placeholder:text-zinc-400"  
                                        onChange={event => setSearchContent(event.target.value)}
                                    />
                                    <button 
                                        type="button"
                                        disabled={searchContent.length === 0}
                                        className="rounded-r-3xl bg-red-600 pl-4 pr-4 hover:bg-red-500 text-zinc-50 transition-colors disabled:bg-zinc-400 disabled:opacity-50 disabled:hover:bg-zinc-400"
                                    ><MagnifyingGlass/></button>                                
                                </div>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>

                    <Menu>
                        <MenuButton>
                            <List className="w-8 h-8"/>
                        </MenuButton>
                        <MenuList className="bg-white dark:bg-slate-800 dark:text-zinc-50 p-3 rounded-md border-2">
                            <MenuItem>
                                <div className="flex flex-row items-center mt-1 mr-5">
                                    <LinkTo linkPath={'/'} linkName={'Início'} />
                                    <House className="ml-1"/>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className="flex flex-row items-center mt-1 mr-5">
                                    <LinkTo linkPath={'/categorias'} linkName={'Categorias'} />
                                    <Cards className="ml-1"/>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className="flex flex-row items-center mt-1 mr-5">
                                    <LinkTo linkPath={'/carrinho'} linkName={'Carrinho'} />
                                    <ShoppingCart className="ml-1"/>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className="flex flex-row items-center mt-1 mr-5">
                                        <LinkTo linkPath={'/perfil'} linkName={'Meu perfil'} />
                                        <UserCircle className="ml-1"/>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className="flex flex-row items-center mt-3 text-red-600">
                                        <LinkTo linkPath={'/apresentacao'} linkName={'Sair'} />
                                        <Power className="ml-1"/>
                                </div>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </div>

                <div className="hidden flex-row md:flex">
                    <div className="flex flex-row items-center link link-underline link-underline-black mr-5">
                        <LinkTo linkPath={'/'} linkName={'Início'} />
                        <House className="ml-1"/>
                    </div>
                    <div className="flex flex-row items-center link link-underline link-underline-black mr-5">
                        <LinkTo linkPath={'/categorias'} linkName={'Categorias'} />
                        <Cards className="ml-1"/>
                    </div>
                    <div className="flex flex-row items-center link link-underline link-underline-black mr-5">
                        <LinkTo linkPath={'/carrinho'} linkName={'Carrinho'} />
                        <ShoppingCart className="ml-1"/>
                    </div>
                    <Menu>
                        <MenuButton>
                            <div className="flex flex-row items-center">
                                <span>Meu perfil</span>
                                <UserCircle className="ml-1"/>
                                <CaretDown/>
                            </div> 
                        </MenuButton>
                        <MenuList className="bg-white dark:bg-slate-800 dark:text-zinc-50 p-3 rounded-md border-2">
                            <MenuItem>
                                <div className="flex flex-row items-center mt-1 link link-underline link-underline-black">
                                    <LinkTo linkPath={'/perfil'} linkName={'Visualizar Perfil'} />
                                    <UserCircle className="ml-1"/>
                                </div>                        
                            </MenuItem>
                            <MenuItem>
                                <div className="flex flex-row items-center mt-1 link link-underline link-underline-black">
                                    <LinkTo linkPath={'/editarPerfil'} linkName={'Editar Perfil'} />
                                    <Gear className="ml-1"/>
                                </div>                        
                            </MenuItem>
                            <MenuItem>
                                <div className="flex flex-row items-center mt-3 text-red-500  link link-underline link-underline-black">
                                    <LinkTo linkPath={'/apresentacao'} linkName={'Sair'} />
                                    <Power className="ml-1"/>
                                </div>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </div>
        </div>
    )
}