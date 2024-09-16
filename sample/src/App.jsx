import { Loader } from "lucide-react";
const App=()=>{
    return(
        <>
        <div className="h-screen w-screen bg-teal-200 flex justify-center items-center">
            <div className="h-4/6 w-[30%] bg-black rounded-md shadow-md flex  justify-center items-center">
            <form className="h-[80%] w-[80%] flex flex-col gap-4 justify-center items-center">
                <input type="text" name="" id="" placeholder="Name" className="bg-white p-3 w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-pink-400"/>
                <input type="text" name="" id="" placeholder="Email" className="bg-white p-3 w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-pink-400"/>
                <input type="number" name="" id="" placeholder="Phone" className="bg-white p-3 w-full font-bold  outline-none active:outline-none focus:border-b-2 hover:border-pink-400"/>
                <input type="password" name="" id="" placeholder="Password" className="bg-white p-3 w-full font-bold outline-none  active:outline-none focus:border-b-2 hover:border-pink-400"/>
                <button type="submit" name="" id="" placeholder="Register" className="w-full  bg-teal-200 text-black p-3"> <Loader className="animate-spin"/>Register</button>
            </form>
            </div>
        </div>
        </>
    )
}
export default App;