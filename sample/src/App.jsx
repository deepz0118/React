import Navbar from "./components/NavBar";
const App =() =>{
    const Appname="DEEPI"
    return(
        <>
        <div className="h-screen w-screen flex flex-col">
        <Navbar appname={Appname}/>
        </div>
        </>
    )
}
export default App;