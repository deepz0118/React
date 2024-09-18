const Navbar = ({ Name }) => {

    console.log(Name)
const Navbar =({Home1})=>{
    console.log(Home1)
    return (
        <>
        <div className="w-full h-[15vh] bg-teal-300 text-black flex justify-start items-start gap-4 font-medium font-serif ">
            {Name}
        </div>
        <div className="text-black flex justify-start items-start gap-4 font-medium font-serif ">
            {Home1}
        </div>
        </>
    )
}
}
export default Navbar;