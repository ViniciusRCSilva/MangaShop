import { ClockCounterClockwise, Gear, Heart, ShoppingBagOpen, Tag, UserList } from "phosphor-react";
import { useState } from "react";
import { Header } from "../components/Header";
import { LinkTo } from "../components/LinksForHeader/LinkTo";
import { CouponProfile } from "../components/OptionsSelectionProfile/CouponProfile";
import { FavProfile } from "../components/OptionsSelectionProfile/FavProfile";
import { InfoProfile } from "../components/OptionsSelectionProfile/InfoProfile";
import { OrderedProfile } from "../components/OptionsSelectionProfile/OrderedProfile";
import { ViewsProfile } from "../components/OptionsSelectionProfile/ViewsProfile";

export interface ProfileContentProps {
    name?: String,
    nick?: String,
    address?: String,
    number?: String,
}

export function Profile({ name, nick, address, number }: ProfileContentProps) {
    const [contentView, setContentView] = useState<'info' | 'favorites' | 'views' | 'coupons' | 'ordered'>('info')

    function handleChangeView(view: 'info' | 'favorites' | 'views' | 'coupons' | 'ordered') {
        setContentView(view)
    }

    return (
        <div>
            <Header />

            <div className="flex flex-col items-start md:items-center justify-around mt-10 w-full h-[80vh]">

                <div className="flex flex-row justify-between w-[90%] ml-6 md:w-[50%] md:ml-0">

                    <div className="flex flex-row">
                        <div className="rounded-full bg-red-600 w-36 h-36">
                            <img src="" alt="" />
                        </div>

                        <div className="flex flex-col ml-6">
                            <span className="text-xl font-bold">{name}</span>
                            <span className="text-sm">@{nick}</span>
                        </div>
                    </div>

                    <div className="flex flex-row h-7 link link-underline link-underline-black">
                        <Gear className="text-2xl mr-2" />
                        <div className="hidden md:flex">
                            <LinkTo linkPath={'/perfil'} linkName={'Editar'}></LinkTo>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-full md:w-[50%] h-full rounded-xl p-6">

                    <div className="flex flex-col mt-3">
                        <div className="flex flex-row items-center justify-between w-full">

                            <div onClick={() => handleChangeView("info")} className="flex flex-col items-center hover:text-red-600 cursor-pointer transition-colors">
                                <UserList className="text-4xl" />
                                <span className="hidden md:flex">Informações</span>
                            </div>

                            <div onClick={() => handleChangeView("favorites")} className="flex flex-col items-center hover:text-red-600 cursor-pointer transition-colors">
                                <Heart className="text-4xl" />
                                <span className="hidden md:flex">Favoritos</span>
                            </div>

                            <div onClick={() => handleChangeView("views")} className="flex flex-col items-center hover:text-red-600 cursor-pointer transition-colors">
                                <ClockCounterClockwise className="text-4xl" />
                                <span className="hidden md:flex">Visualizados</span>
                            </div>

                            <div onClick={() => handleChangeView("coupons")} className="flex flex-col items-center hover:text-red-600 cursor-pointer transition-colors">
                                <Tag className="text-4xl" />
                                <span className="hidden md:flex">Cupons</span>
                            </div>

                            <div onClick={() => handleChangeView("ordered")} className="flex flex-col items-center hover:text-red-600 cursor-pointer transition-colors">
                                <ShoppingBagOpen className="text-4xl" />
                                <span className="hidden md:flex">Pedidos</span>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col border-2 mt-3 rounded-lg h-full p-4">
                        {contentView === 'info' && (
                            <InfoProfile address={address} number={number} />
                        )}
                        {contentView === 'favorites' && (
                            <FavProfile />
                        )}
                        {contentView === 'views' && (
                            <ViewsProfile />
                        )}
                        {contentView === 'coupons' && (
                            <CouponProfile />
                        )}
                        {contentView === 'ordered' && (
                            <OrderedProfile />
                        )}
                    </div>

                </div>
            </div>

        </div>
    )
}