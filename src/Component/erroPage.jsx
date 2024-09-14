import { useRouteError } from "react-router-dom"

export default function ErrorPage(params) {
    const error=useRouteError()
    console.log(error);
    
 return <h2 className=" flex justify-center items-center h-screen"> il y une erreur </h2>    
}