import { Link } from "react-router-dom";
import Logo from "../assets/edenfi.jpg"

function Navbar(){
    return (
        <>
        <Link to={"/"}><img src={Logo} alt="" width={"70px"} /></Link>
    <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        </>
    )
}

export default Navbar;