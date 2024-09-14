import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="flex gap-4 h-screen justify-center mt-4 ">
                <div className="w-1/2 ">
                    <p className="text-black text-lg">
                        Bienvenue chez <span className="text-xl text-blue-400">AbraShop</span>, votre destination privilégiée pour des sacs, chaussures et montres de qualité. 
                        Notre sélection soigneusement choisie allie élégance.
                    </p>
                    <button className="bg-black text-white py-2 px-4 rounded-lg mt-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                        <Link to='/produit'>Découvrir notre boutique</Link>
                    </button>
                </div>
                <div><img 
                    src="https://s.alicdn.com/@sc04/kf/H94dc32fa408043f3a2d6b30c09edf892E.jpg_64x64.jpg" 
                    alt="Produits AbraShop" 
                    className="object-cover w-52 h-auto " 
                /></div>
            </div>
        </>
    );
}