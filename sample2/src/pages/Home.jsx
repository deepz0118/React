import React from "react";
import Navbar from "../components/Navbar";
 const data=()=>{
    const Home1="Home"
    return(
        <>
        <div className="h-screen w-screen flex flex-col justify-start items-start font-semibold">
            <Navbar Home1={Home1}/>
        </div>
        </>
    )
}
export default data;