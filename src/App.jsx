import React, { useState, useEffect } from "react"
import { BrowserRouter, Route, Link, Routes, useParams } from "react-router-dom";
import './mirage.js';
import { StarIcon } from "@heroicons/react/20/solid";

function Vetement() {
  const [vetements, setVetements] = useState([]);

  useEffect(() => {
    fetch('/api/vetements')
      .then((response) => response.json())
      .then((data) => setVetements(data.vetements));
  }, []);

  return (
    <div className="flex flex-wrap gap-1 justify-center items-center">

      {vetements.map((vetement) => (
        <div key={vetement.id}>
          <Link to={`produit/${vetement.id}`}>
            <img className="size-48 border  border-black" src={vetement.imageUrl} alt={vetement.nom} />
            <h2>{vetement.nom}</h2>
          </Link>
        </div>
      ))}

    </div>
  );
}

function About(params) {
  return <>
    <div className=" px-2">
      <img className="object-cover h-80 w-full" src="https://s.alicdn.com/@sc04/kf/H0538b0cfdeef4f438aa485909a6b227aR.jpg_64x64.jpg" alt="" />
    </div>
    <div className="px-2">
      <h1 className="text-left">Élégance au Quotidien avec Sacs et Chaussures</h1>
      <p className="text-lg/8">Explorez notre sélection de sacs et chaussures, alliant style et fonctionnalité. Chaque article est conçu pour vous accompagner dans votre vie quotidienne tout en ajoutant une touche d’élégance à votre tenue.</p>
    </div>
    <div className="flex justify-center items-center gap-4 pt-4 ">
      <img className="size-48 rounded-lg" src="https://s.alicdn.com/@sc04/kf/H6a07aead03884220accf61c229114ca5L.jpg_64x64.jpg" alt="" />
      <img className="size-48 rounded-lg" src="https://s.alicdn.com/@sc04/kf/H94dc32fa408043f3a2d6b30c09edf892E.jpg_64x64.jpg" alt="" />
      <img className="size-48 rounded-lg" src="https://s.alicdn.com/@sc04/kf/H0538b0cfdeef4f438aa485909a6b227aR.jpg_64x64.jpg" alt="" />
    </div>
    <Link to='/produit'><button className="px-2 mt-4 text-center  rounded-xl bg-black  w-44 h-14 text-lg text-amber-50 hover:bg-slate-50 hover:text-black hover:border-2 hover:border-black">Decouvrir</button></Link>

  </>
}
function Home(params) {
  return <h1>this my About</h1>
}
function Produit(params) {
  return <h1>this my Produit</h1>
}
function Navigator(params) {
  return <>
    <header className="flex justify-between px-3">
      <h1 className="text-lg"> #AbraShop</h1>
      <nav className="space-x-9 text-blue-600">
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/produit'>Produit</Link>

      </nav>
    </header>
  </>
}
function ProduitDetail(params) {
  const [detail, setDetail] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    fetch(`/api/vetements/${id}`)
      .then((response) => response.json())
      .then((data) => setDetail(data.vetement));
  }, [id]);
  console.log(detail);
  if (!detail) return <h1>Loading</h1>; // Affiche un message pendant le chargement
  
  return <div className="w-1/3 mx-auto">
    
    <h1>{detail.nom}</h1>
    <img className="objet-cover" src={detail.imageUrl} alt={detail.nom} />
    <p>{detail.description}</p>
    <p>Prix : {detail.prix} €</p>
    <div className="flex">
    <StarIcon className="size-6 text-yellow-600"/>
    <StarIcon className="size-6 text-yellow-600"/>
    <StarIcon className="size-6 text-yellow-600"/>
    <StarIcon className="size-6 text-yellow-600"/>
    <StarIcon className="size-6 text-black"/>
    </div>
    
  </div>


}

function RouteNav() {
  return <>
    <BrowserRouter>
      <Navigator />

      <Routes>
        <Route path="/" element={<Vetement />} />
        <Route path="/about" element={<About />} />
        <Route path="/produit" element={<Produit />} />
        <Route path="/produit/:id" element={<ProduitDetail />} />


      </Routes>
    </BrowserRouter>
  </>
}
function App(params) {
  return <>
    <RouteNav />

  </>



}
export default App