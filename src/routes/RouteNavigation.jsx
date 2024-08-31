import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom"
import About from "../Component/About"
import ProduitDetail from "../Component/ProduitDetail"
import Vetement from "../Component/Vetement"
import Navigator from "./headerBare"
function Layout(params) {
    return <>
        <div>
            <Navigator />
            <Outlet />
        </div>
    </>
}
export default function RouteNav(params) {
    return <>
        <BrowserRouter>

            <Routes>
                <Route element={<Layout />} >
                    <Route path="/" index element={<About />} />
                    <Route path="about" element={<About />} />
                    <Route path="produit" element={<Vetement />} />
                    <Route path="produit/produit/:id" element={<ProduitDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
}

