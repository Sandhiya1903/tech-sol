import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Aboutus from "./Components/Aboutus";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<Aboutus/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    
     
      
    </div>
  );
}

export default App;
