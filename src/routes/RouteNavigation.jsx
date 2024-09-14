import { Route, Routes, BrowserRouter, Outlet, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import About from "../Component/About"
import ProduitDetail from "../Component/ProduitDetail"
import Vetement, { loader as pageLoader} from "../Component/Vetement"
import Navigator from "./headerBare"
import ErrorPage from "../Component/erroPage"
import PageNotFound from "../Component/pageNotFound"
import Form from "../Component/form"
import Home from "../Component/home"
export default function RouteNav(params) {
    function Layout(params) {
        return <>
            <div>
                <Navigator />
                <Outlet />
            </div>
        </>
    }
    const router=createBrowserRouter(createRoutesFromElements(
        <Route element={<Layout />} >
                    <Route path="/" index element={<Home />} />
                    <Route path="about" element={<Home />} />
                    <Route path="produit" element={<Vetement />} loader={pageLoader}  errorElement= {<ErrorPage/>} />
                    <Route path="produit/:id"  element={<ProduitDetail/>} />
                    <Route path='*'element={<PageNotFound/>}  />
                    <Route path='sign'element={<Form/>}  />
                </Route>
    ))
    return  <RouterProvider router={router}/>
}
