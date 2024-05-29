import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Course from "./Pages/Course/Course";
import Notification from "./Pages/Notification/Notification";
import Profile from "./Pages/Profile/Profile";
import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";
import Attendance from "./Pages/Attendance/Attendance";
import Lessons from "./Pages/Lessons/Lessons";
import EditProfile from "./Pages/EditProfile/EditProfile";
import NotFound from "./404";

const App = () => {
  return (
      <div>
<Topbar/>
<div className="User-Content">

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Attendance" element={<Attendance />} />
        <Route path="/Lessons" element={<Lessons />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/*" element={<NotFound />} />

        
      </Routes>
      </div>

      <Footer/>
    </div>
  );
};

export default App;
