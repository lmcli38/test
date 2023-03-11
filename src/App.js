import Navbar from './navbar';
import About from './pages/about';
import Contact from './pages/contact';
import Equations from './pages/equations';
import Gif from './pages/gif';
import Home from './pages/home'
import {Routes, Route} from "react-router-dom"

function App() {
 return (
 <>
   <Navbar />
   <div className="container">
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/equations" element={<Equations />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/gif" element={<Gif />} />
     </Routes>
   </div>
 </> 
 )
}


export default App;
