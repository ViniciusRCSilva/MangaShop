import { LinkTo } from "../LinksForHeader/LinkTo";

export function HeaderPresentation(){
    return(
        <div className="flex flex-row items-center justify-between pl-6 pr-6 pt-6 pb-6 shadow-lg">
            <div className="text-xl font-bold font-['Kaushan_Script'] bg-red-600 hover:bg-red-500 transition-colors text-zinc-50 p-3 rounded-xl">
                <LinkTo linkPath={'/apresentacao'} linkName={'MANGÁ SHOP'} />
            </div>
        </div>
    )
}