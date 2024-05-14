import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Course from "./Pages/Course/Course";
import Notification from "./Pages/Notification/Notification";
import Profile from "./Pages/Profile/Profile";

const App = () => {
  return (
      <div>

      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
