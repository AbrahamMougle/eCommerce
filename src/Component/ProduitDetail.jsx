import React, { useState, useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import Star from "./Star";
import { ShoppingBagIcon } from "@heroicons/react/20/solid";
import Loading from "./Loading";

export default function ProduitDetail() {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await fetch(`/api/vetements/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setDetail(data.vetement);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchDetail();
  }, [id]);

  if (detail === null) return <Loading />;

  return (
    <>
      <Link to='..' relative="path" className="text-blue-500 hover:underline">
        Back Up
      </Link>
      <div className="flex gap-2">
        <img
          className="object-cover w-1/4"
          src={detail.imageUrl}
          alt={detail.nom}
        />
        <div className="space-y-4 flex-1">
          <p className="font-bold text-lg">{detail.nom}</p>
          <Star />
          <p className="font-bold text-lg">{detail.prix} €</p>
          <button className="flex items-center justify-center bg-black text-white py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <ShoppingBagIcon className="h-6 w-6 mr-2" />
            <span>Add to Cart</span>
          </button>
          <div>{detail.description}</div>
        </div>
      </div>
    </>
  );
}