import { Header } from "../components/Header";

export function Profile(){
    return(
        <div>
            <Header />

            <div>
                <div className="bg-zinc-300 shadow-inner shadow-zinc-800 w-full h-28"></div>
                <div>
                    <div className="flex flex-col w-full h-full ml-6">
                        <div className="rounded-full bg-red-600 w-36 h-36">
                            <img src="" alt="" />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-lg font-bold">Teste</span>
                            <span className="text-sm">@teste</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}