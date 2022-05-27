import { ProfileContentProps } from '../ProfileContent'

export function InfoProfile({ address, number }: ProfileContentProps) {
    return (
        <>
            <span className="font-bold mr-2">Endereço: <span className="font-normal">{address}</span></span>
            <span className="font-bold mr-2">Número de contato: <span className="font-normal">{number}</span></span>
        </>
    )
}