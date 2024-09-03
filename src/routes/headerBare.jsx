 import { NavLink} from "react-router-dom"
 export default function Navigator(params) {
    const styleNav=({isActive})=>isActive ? '. style' : 'bg-black text-white'
   
    return <>
      <header className=" flex  justify-between bg-black">
        <NavLink className={styleNav}  to='/'> #AbraShop</NavLink>
        <nav className="">
          <NavLink className={styleNav} to='About'>About</NavLink>
          <NavLink className={styleNav} to='produit'>Produit</NavLink>
        </nav>
      </header>
    </>
  }