import React from "react"
import { BrowserRouter, Route, Link, Routes, useParams } from "react-router-dom";
import './mirage.js';
import ProduitDetail from "./Component/ProduitDetail.jsx";


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