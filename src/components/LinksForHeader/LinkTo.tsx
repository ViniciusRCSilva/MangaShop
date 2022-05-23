import { Link, Path } from "react-router-dom";

interface LinkProps{
    linkPath?: Partial<Path> | String,
    linkName?: String
}

export function LinkTo(props: LinkProps){
    return(     
        <Link to={String(props.linkPath)}>
            <span>{props.linkName}</span>
        </Link>
    )
}