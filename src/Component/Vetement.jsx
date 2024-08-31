
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
 export default function Vetement() {
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