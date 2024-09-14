 import { NavLink} from "react-router-dom"
 import { UserCircleIcon,ShoppingCartIcon, HomeIcon } from "@heroicons/react/20/solid"
 export default function Navigator(params) {
    const styleNav=({isActive})=>isActive ? '. style' : ' text-white'
   
    return <>
      <header className=" flex  justify-between items-center bg-black px-2 ">
        <NavLink className={styleNav}  to='/'> #AbraShop</NavLink>
        <nav className=" space-x-2">
        <NavLink className={styleNav} to='/'><HomeIcon className="size-5 inline-block"/></NavLink>

          <NavLink className={styleNav} to='produit'> <ShoppingCartIcon className="size-5 inline-block"/> </NavLink>
          <NavLink className={styleNav} to='/sign'> <UserCircleIcon className="size-5 inline-block"/> </NavLink>
        </nav>
      </header>
    </>
  }