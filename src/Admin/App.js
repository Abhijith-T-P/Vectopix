import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import UsersList from "./Pages/UsersList/UsersList";
import Topbar from "./Components/Topbar/Topbar";
import CoursesList from "./Pages/CoursesList/CoursesList";
import EditCourse from "./Pages/EditCourse/EditCourse";
import NotFound from "./404";
import AdminVerifyUsers from "./Pages/AdminVerifyUsers/AdminVerifyUsers";
import AdminProfile from "./Pages/AdminProfile/AdminProfile";
import EditProfile from "./Pages/EditProfile/EditProfile";
import AddCourse from "./Pages/AddCourse/AddCourse";
import GuestEnquiry from "./Pages/GuestEnquiry/GuestEnquiry";

const App = () => {
  return (
    <div className="App">
      <Topbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/UsersList" element={<UsersList />} />
        <Route path="/CoursesList" element={<CoursesList />} />
        <Route path="/EditCourse" element={<EditCourse />} />
        <Route path="/AdminVerifyUsers" element={<AdminVerifyUsers />} />
        <Route path="/AdminProfile" element={<AdminProfile />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/AddCourse" element={<AddCourse />} />
        <Route path="/GuestEnquiry" element={<GuestEnquiry />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
