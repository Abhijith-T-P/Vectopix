// CoursesList.jsx
import React, { useState, useEffect } from 'react';
import './CoursesList.css';
import { Link, useNavigate } from 'react-router-dom';

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const mockCourses = [
      {
        id: 1,
        image: 'https://via.placeholder.com/150',
        name: 'Web Development Bootcamp',
        duration: '3 months',
        fee: 499.99,
      },
      {
        id: 2,
        image: 'https://via.placeholder.com/150',
        name: 'Python for Data Science',
        duration: '6 weeks',
        fee: 299.99,
      },
      {
        id: 3,
        image: 'https://via.placeholder.com/150',
        name: 'Cyber Security Fundamentals',
        duration: '2 months',
        fee: 399.99,
      },
    ];
    setCourses(mockCourses);
    
  }, []);

  const handleAddCourse=()=>{
    navigate("../AddCourse");
  }

  return (
    <div className="courses-list">
      <div className="Topp">
      <h2>Computer Courses</h2>
      <button onClick={handleAddCourse} className='Add-Course-Btn'>Add Course</button>

      </div>

      <div className="courses-container">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.name} />
            <h3>{course.name}</h3>
            <p>Duration: {course.duration}</p>
            <p>Fee: ${course.fee}</p>
            <button><Link to="../EditCourse" >Edit</Link></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
