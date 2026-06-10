import Data from "./components/Data";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <h1>Hello world</h1>
      {/* <Data name= "Ade" role="software engineer"/> */}
      <Data>
            {/* <Data name= "Ade" role="software engineer" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzbKM6X1OUanGplE4k-Lf21WaMgISPXCwJFQ&s"/> */}
      </Data>
      <Data>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzbKM6X1OUanGplE4k-Lf21WaMgISPXCwJFQ&s" alt="" width={"50px"} />
        <p>Ade</p>
        <p>Software Engineer</p>
      </Data>
      <Data>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzbKM6X1OUanGplE4k-Lf21WaMgISPXCwJFQ&s" alt="" width={"50px"} />
        <p>Ade</p>
        <p>Software Engineer</p>
      </Data>
      <Footer />
    </>
  )
}

export default App;