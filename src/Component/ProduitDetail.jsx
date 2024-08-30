 import React from "react";
 import { useState,useEffect, } from "react";
 import { useParams } from "react-router-dom";
 import { StarIcon } from "@heroicons/react/20/solid";
 export default function ProduitDetail(params) {
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