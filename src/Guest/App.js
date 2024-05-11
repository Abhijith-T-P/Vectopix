import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index/Index";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>

    <Topbar/>

    <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
      

    </Routes>
    <Footer/>
    </div>
  );
};

export default App;
