// CoursesList.jsx
import React, { useState, useEffect } from "react";
import "./CoursesList.css";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../Config/Firebase";

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const allCourse = async () => {
    const coursedb = collection(db, "courses");
    const CoursesList = await getDocs(coursedb);
    const filteredCourses = CoursesList.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log(filteredCourses);
    setCourses(filteredCourses);
  };
  useEffect(()=>{
    allCourse();
  },[]);

  const handleAddCourse = () => {
    navigate("../AddCourse");
  };

  return (
    <div className="courses-list">
      <div className="Topp">
        <h2>Computer Courses</h2>
        <button onClick={handleAddCourse} className="Add-Course-Btn">
          Add Course
        </button>
      </div>

      <div className="courses-container">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.illustration} alt={course.illustration} />
            <h3>{course.name}</h3>
            <p>Duration: {course.duration}</p>
            <p>Fee: {course.fee}/-</p>
            <button>
              <Link to={`../EditCourse/${course.id}`}>Edit</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
