import { Link } from "react-router-dom"
export default function About(params) {
  return <>
    <div>
      <div className=" flex justify-between">
        <img className="size-48 rounded-lg" src="https://s.alicdn.com/@sc04/kf/H6a07aead03884220accf61c229114ca5L.jpg_64x64.jpg" alt="" />
        <img className="size-48 rounded-lg" src="https://s.alicdn.com/@sc04/kf/H94dc32fa408043f3a2d6b30c09edf892E.jpg_64x64.jpg" alt="" />
        <img className="size-48 rounded-lg" src="https://s.alicdn.com/@sc04/kf/H0538b0cfdeef4f438aa485909a6b227aR.jpg_64x64.jpg" alt="" />
      </div>
      <Link to='/produit'><button className="px-2 mt-4 text-center  rounded-xl bg-black  w-44 h-14 text-lg text-amber-50 hover:bg-slate-50 hover:text-black hover:border-2 hover:border-black">Decouvrir</button></Link>

    </div>
  </>
}