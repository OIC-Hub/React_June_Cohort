import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Ref from "../components/Ref"
import Memo from "../components/Memo"
import Greetings from "../components/Greetings"
import Second from "../components/Second"

export const Home = () => {
    return(
        <>
        <Navbar/>
        <div style={{height: "1000px"}}>
            <Ref/>
        <Memo/>
        <Greetings/>
        <h1>Grab your Food Waka</h1>
        </div>
        <Second/>
         <Footer/>

        </>
    )
}