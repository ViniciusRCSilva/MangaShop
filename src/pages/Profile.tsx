import { Header } from "../components/Header";
import { ProfileContent } from "../components/ProfileContent";

export function Profile(){
    return(
        <div>
            <Header />

            <ProfileContent name={'teste'} nick={'teste'} address={'Rua exemplo 1'} number={'99999-9999'}/>
        </div>
    )
}