import React from "react";
import Star from "./Star";
import { ShoppingBagIcon } from "@heroicons/react/20/solid";
import { useState, useEffect, } from "react";
import { useParams, Link } from "react-router-dom";
export default function ProduitDetail(params) {
  const [detail, setDetail] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    fetch(`/api/vetements/${id}`)
      .then((response) => response.json())
      .then((data) => setDetail(data.vetement));
  }, []);
  if (detail === null) return <h1 className="flex justify-center items-center h-screen">Loading ...</h1>; // Affiche un message pendant le chargement

  return <>
    <Link to='..' relative="path">Back Up</Link>
    <div className=" flex gap-2 ">
      <img className="objet-cover w-1/4" src={detail.imageUrl} alt={detail.nom} />
      <div className="space-y-4">
        <p className="font-bold text-lg" >{detail.nom}</p>
        <Star />
        <p className="font-bold text-lg/7"> {detail.prix} €</p>
        <button className="flex items-center justify-center  bg-black text-white py-2 px-4 rounded-lg">
          <ShoppingBagIcon className="h-6 w-6 mr-2" />
          <span>Add Card</span>
        </button>
      </div>

    </div>
  </>
}