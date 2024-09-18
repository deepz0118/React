import React from "react";
import Navbar from "./components/Navbar";
const App=()=>{
    const Name="Deepika"
    return(
        <>
        <div className="h-screen w-screen flex flex-col justify-start items-start font-semibold">
            <Navbar Name={Name}/> 
        </div>
        </>
    )
 }
 export default App;