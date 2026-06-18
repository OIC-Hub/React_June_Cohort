// import Data from "./components/Data";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Notfound } from "./pages/NotFound";
import { Params } from "./pages/Params";
// import EdenFiImg from "./assets/edenfi.jpg"
// import Counter from "./components/Counter";
// import Toggle from "./components/Toggle";
// import Greetings from "./components/Greetings";
// import Timer from "./components/Timer";

function App() {

  return (
    <>
      
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<Notfound/>}/>
          <Route path="/users/:id" element={<Params/>}></Route>
      </Routes>
      
    </>
  )
}

export default App;