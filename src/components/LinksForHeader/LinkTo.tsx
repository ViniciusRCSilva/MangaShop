import { Link, Path } from "react-router-dom";

interface LinkProps{
    linkPath?: Partial<Path> | String,
    linkName?: String
}

export function LinkTo({ linkPath, linkName }: LinkProps){
    return(     
        <Link to={String(linkPath)}>
            <span>{linkName}</span>
        </Link>
    )
}