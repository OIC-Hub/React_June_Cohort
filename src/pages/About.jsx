import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"

export const About = () => {

    const navigate = useNavigate();
    
    return(
        <>
        <Navbar/>
            <h1>
                Welcome to HALAFOODJOR
            </h1>

            <button onClick={() => navigate(-1)}>Back home</button>
        <Footer/>
        </>
    )
}