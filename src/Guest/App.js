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
import NotFound from "../404";
import CourseDetail from "./pages/CourseDetail/CourseDetail";

const App = () => {
  return (
    <div className="App">
      <Topbar />
      <div className="App-Content">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
