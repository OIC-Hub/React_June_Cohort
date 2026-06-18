import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/edenfi.jpg"


function Navbar(){
    return (
        <>
        <Link to={"/"}><img src={Logo} alt="" width={"70px"} /></Link>
    <Link to={"/"}>Home</Link>
        {/* <Link to={"/about"}>About</Link> */}

        <NavLink to={"/about"} 
        style={({ isActive }) => ({
            color: isActive ? "red" : "black",
            textDecoration: isActive ? "underline" : "none"
        })}>
            About
        </NavLink>
        </>
    )
}

export default Navbar;