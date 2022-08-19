import { BookOpen } from "phosphor-react";
import { LinkTo } from "../LinksForHeader/LinkTo";

export function HeaderPresentation(){
    return(
        <div className="flex flex-row items-center justify-between pl-6 pr-6 pt-6 pb-6 shadow-lg">
            <div className="flex flex-row items-center text-xl font-bold font-['Raleway'] text-red-600 hover:text-red-500 transition-colors">
                <LinkTo linkPath={'/'} linkName={'mangáSHOP'} />
                <BookOpen className="ml-1 italic"/>
            </div>
        </div>
    )
}