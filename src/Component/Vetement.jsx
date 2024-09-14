//import { useState, useEffect } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import fetchData from "./callApi";
import { useAuth } from "../Contexte";
export async function loader(params) {
   const data= await fetchData()
   return data
  }
  
  
export default function Vetement() {
  
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('type');
 const data =useLoaderData()
 const tabs =data.vetements;
 const filterTab= filter ? tabs.filter(vetement =>
  vetement.categorie.toUpperCase().includes(filter.toUpperCase())
)
: tabs;
if (!Array.isArray(tabs)) {
  return null
}


  const handleParam = (key, value) => {
    setSearchParams(params => {
      if (value === null) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      return params;
    });
  };

  return (
    <> 
      <h1 className="text-center">Explorer notre boutique</h1>
      <div className="space-x-2 px-2 ">
        
        {['sac', 'Basket', 'Montre'].map(type => (
          <button 
            key={type}
            className="bg-black text-white px-2" 
            onClick={() => handleParam("type", type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
        {filter && (
          <button 
            className="bg-black text-white px-2" 
            onClick={() => handleParam('type', null)}
          >
            Clear filter
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2 justify-center items-center mt-2 ">
        {filterTab.map(vetement => (
          <div key={vetement.id}>
            <Link to={`${vetement.id}`} state={{ type: filter }}>
              <img 
                className="size-48 rounded-lg border border-black object-cover" 
                src={vetement.imageUrl} 
                alt={vetement.nom} 
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}