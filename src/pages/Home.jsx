import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Ref from "../components/Ref"
import Memo from "../components/Memo"
import Greetings from "../components/Greetings"

export const Home = () => {
    return(
        <>
        <Navbar/>
        <Ref/>
        <Memo/>
        <Greetings/>
        <h1>Grab your Food Waka</h1>
         <Footer/>

        </>
    )
}