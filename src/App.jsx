import Vetement, { loader as pageLoader } from "./Component/Vetement.jsx";
import PageNotFound from "./Component/pageNotFound.jsx";
import ErrorPage from "./Component/erroPage.jsx";
import ProduitDetail from "./Component/ProduitDetail.jsx";
import Form from "./Component/form.jsx";
import { AuthProvider} from "./Contexte.jsx";
import Home from "./Component/home.jsx";
import Navigator from "./routes/headerBare.jsx";

import React from "react";
import {
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  redirect,
  Navigate
} from "react-router-dom";
import './mirage.js';
function Layout(params) {
// pour  autentification
  return <div>
    <Navigator/>
    <Outlet/>
  </div>
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path="home" element={<Home />} />
      <Route path="produit" element={<Vetement />} loader={pageLoader} errorElement={<ErrorPage />} />
      <Route path="produit/:id" element={<ProduitDetail />} />
      <Route path="sign" element={<Form />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )

);

const App = () => (
  <AuthProvider> 
    <RouterProvider router={router} />
  </AuthProvider>
);

export default App;