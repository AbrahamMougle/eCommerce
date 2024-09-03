import { NavLink ,} from "react-router-dom"
export default function NavProduit(params) {
     const styleNav=({isActive})=>isActive ? '. style' : 'bg-white'
    
    return <> 
    <nav className="space-x-2 mt-4" >
        <NavLink className={styleNav} to='description'>Description</NavLink>
        <NavLink className={styleNav} to='review'>Rewieux</NavLink>
        <NavLink className={styleNav} to='discussion'>Discussion</NavLink>
    </nav>

    </>
}