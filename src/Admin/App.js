import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import UsersList from "./Pages/UsersList/UsersList";
import Topbar from "./Components/Topbar/Topbar";
import CoursesList from "./Pages/CoursesList/CoursesList";
import EditCourse from "./Pages/EditCourse/EditCourse";

const App = () => {
  return (
    <div className="App">
      <Topbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/UsersList" element={<UsersList />} />
        <Route path="/CoursesList" element={<CoursesList />} />
        <Route path="/EditCourse" element={<EditCourse />} />
        
      </Routes>
    </div>
  );
};

export default App;
