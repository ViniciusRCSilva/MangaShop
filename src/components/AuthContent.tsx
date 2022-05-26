import { FacebookLogo, GoogleLogo } from "phosphor-react";
import { Link } from "react-router-dom";
import { LinkTo } from "./LinksForHeader/LinkTo";

export function AuthContent(){
    return(
        <div className="flex w-[100vw] h-[100vh] justify-center items-center">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg border-2">
                <h1 className="mb-3">Autentique através:</h1>

                <div className="flex flex-col items-center">
                    <Link to="/">
                        <div className="flex flex-row items-center justify-center w-[200px] bg-red-600 md:bg-zinc-400 hover:bg-red-600 text-zinc-50 p-3 rounded-3xl transition-colors">
                            <GoogleLogo className="mr-2"/><span>Google</span>
                        </div>
                    </Link>
                {/* <button 
                        type="submit" 
                        className="flex flex-row items-center justify-center w-[200px] bg-red-600 md:bg-zinc-400 hover:bg-red-600 text-zinc-50 p-3 rounded-3xl transition-colors"
                    ><GoogleLogo className="mr-2"/> Google</button> */}
                    
                    <Link to="/">
                        <div className="flex flex-row items-center justify-center w-[200px] bg-red-600 md:bg-zinc-400 hover:bg-red-600 text-zinc-50 p-3 rounded-3xl transition-colors">
                            <FacebookLogo className="mr-2"/><span>Facebook</span>
                        </div>
                    </Link>
                {/* <button 
                            type="submit" 
                            className="flex flex-row items-center justify-center w-[200px] bg-red-600 md:bg-zinc-400 hover:bg-red-600 text-zinc-50 p-3 rounded-3xl transition-colors mt-3"
                    ><FacebookLogo className="mr-2"/> Facebook</button> */}
                </div>
            </div>
        </div>
    )
}