import { FacebookLogo, GoogleLogo, InstagramLogo } from "phosphor-react";

export function AuthContent(){
    return(
        <div className="flex w-[100vw] h-[100vh] justify-center items-center">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg border-2">
                <h1>Entre através:</h1>

                <div className="flex flex-col items-center">
                    <button 
                        type="submit" 
                        className="flex flex-row items-center justify-center w-[200px] bg-zinc-400 hover:bg-red-600 text-zinc-50 p-3 rounded-3xl transition-colors mt-3"
                    ><GoogleLogo className="mr-2"/> Entrar com Google</button>
                    
                    <button 
                        type="submit" 
                        className="flex flex-row items-center justify-center w-[200px] bg-zinc-400 hover:bg-red-600 text-zinc-50 p-3 rounded-3xl transition-colors mt-3"
                    ><FacebookLogo className="mr-2"/> Entrar com Facebook</button>

                    <button 
                        type="submit" 
                        className="flex flex-row items-center justify-center w-[200px] bg-zinc-400 hover:bg-red-600 text-zinc-50 p-3 rounded-3xl transition-colors mt-3"
                    ><InstagramLogo className="mr-2"/> Entrar com Instagram</button>
                </div>
            </div>
        </div>
    )
}