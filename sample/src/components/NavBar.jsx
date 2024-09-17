const Navbar=({appname})=>{
    console.log(appname)
    return(
    <div className="w-full h-[3vh] grad-blue-bg text-white flex justify-center">
    {appname}
    </div>
    )
}
export default Navbar;