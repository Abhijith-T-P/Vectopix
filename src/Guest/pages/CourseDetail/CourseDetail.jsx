import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import {  doc, getDoc } from "firebase/firestore";
import { db } from "../../../Config/Firebase";

const CourseDetail = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseDocRef = doc(db, "courses", courseId);
        const courseDocSnap = await getDoc(courseDocRef);

        if (courseDocSnap.exists()) {
          const courseData = courseDocSnap.data();
          setCourse(courseData);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching course: ", error);
      }
    };

    fetchCourse();
  }, [courseId]);

  if (!course) {
    return <Typography variant="body1">Loading...</Typography>;
  }

  const renderSyllabus = () => {
    if (course.syllabus) {
      const syllabusItems = course.syllabus.split(",").map((item, index) => (
        <li key={index}>{item.trim()}</li>
      ));
      return <ul>{syllabusItems}</ul>;
    }
    return null;
  };

  return (
    <div className="CourseDetail">
      <Typography variant="h1">{course.courseName}</Typography>
      <Typography variant="body1" className="description">
        {course.description}
      </Typography>
      <Typography variant="h2">Syllabus</Typography>
      {renderSyllabus()}
    </div>
  );
};

export default CourseDetail;
