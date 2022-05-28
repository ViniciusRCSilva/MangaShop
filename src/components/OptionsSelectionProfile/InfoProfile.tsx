import { UserList } from 'phosphor-react'
import { ProfileContentProps } from '../../pages/Profile'

export function InfoProfile({ address, number }: ProfileContentProps) {
    return (
        <div className="flex flex-col h-full w-full items-start">
            <div className="flex flex-row items-center font-bold">
                <UserList className="text-lg" weight="bold"/>
                <span className="text-lg ml-1">Suas Informações:</span>
            </div>

            <div className="flex flex-col w-full h-full items-start mt-4 overflow-x-auto scrollbar-thumb-red-600 scrollbar-track-transparent scrollbar-thin">
                <span className="font-bold mr-2">Endereço: <span className="font-normal">{address}</span></span>
                <span className="font-bold mr-2">Número de contato: <span className="font-normal">{number}</span></span>   
            </div>
        </div>
    )
}