import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../Config/Firebase";
import { Typography } from "@mui/material";
import "./CourseDetail.css";

const CourseDetail = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourseDetail = async () => {
      try {
        const courseDoc = await getDoc(doc(db, "courses", courseId));
        if (courseDoc.exists()) {
          setCourse(courseDoc.data());
        } else {
          console.log("No such course!");
        }
      } catch (error) {
        console.error("Error fetching course details: ", error);
      }
    };

    fetchCourseDetail();
  }, [courseId]);

  if (!course) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <div className="CourseDetail">
      <div className="BackToCourse-btn">
        <Link to="/Courses">&lt; Back to courses</Link>
      </div>
      <div className="CourseDetail-Image">
        <img src={course.illustration} alt={course.courseName} />
      </div>
      <div className="CourseDetail-Title">
        <Typography variant="h2" className="CourseDetail-Title">{course.courseName}</Typography>
      </div>
      <div className="CourseDetail-Content">
        <Typography variant="body1" className="CourseDetail-Description">{course.description}</Typography>
        <Typography variant="h5">Duration: <span>{course.duration} months</span></Typography>
        <Typography variant="h5">Fee: <span>{course.fee}</span></Typography>
        <Typography variant="h5">Syllabus:</Typography>
        <ul className="CourseDetail-Syllabus">
          {course.syllabus.split(", ").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="General-Info">
          <Typography variant="body1">
           For more details, please <Link to = "/contact">contact</Link\> our administration office.
          </Typography>\
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
