import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"
import {FaBeer, FaHome} from "react-icons/fa"
export const About = () => {

    const navigate = useNavigate();
    
    return(
        <>
        <Navbar/>
            <h1>
                Welcome to HALAFOODJOR <FaBeer/> <FaHome/>
            </h1>

            <button onClick={() => navigate(-1)}>Back home</button>
        <Footer/>
        </>
    )
}