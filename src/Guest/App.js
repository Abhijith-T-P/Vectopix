import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index/Index";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";
import Courses from "./pages/Courses/Courses";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import Signin from "./pages/Signin/Signin";
import Register from "./pages/Register/Register";

const App = () => {
  return (
    <div className="App">
      <Topbar />
      <div className="App-Content">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Terms&Conditions" element={<TermsAndConditions />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
