import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../Config/Firebase";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCourses();
  }, [search]);

  const fetchCourses = async () => {
    try {
      const courseRef = collection(db, "courses");
      const courseSnapshot = await getDocs(courseRef);
      const coursesList = courseSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const filteredCourses = coursesList.filter((course) =>
        course.courseName.toLowerCase().includes(search.toLowerCase())
      );
      setCourses(filteredCourses);
    } catch (error) {
      console.error("Error fetching courses: ", error);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="Courses">
      <div className="Courses-Text">
        <Typography variant="h1">Explore Our Courses</Typography>
        <Typography variant="body1">
          We offer a diverse range of courses designed to equip individuals with
          essential skills in technology, design, and more. Whether you're
          looking to enhance your career prospects, explore a new passion, or
          stay ahead in the digital age, we have something for everyone.
        </Typography>
      </div>
      <div className="Courses-Container">
        <div className="Courses-Search">
          <label htmlFor="course-search">Search</label>
          <input
            type="text"
            name="course-search"
            id="course-search"
            placeholder="What shall we learn today"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <div className="Courses-Grid">
          <Grid container spacing={2}>
            {courses.length > 0 ? (
              courses.map((course) => (
                <Grid item xs={12} md={6} lg={4} key={course.id}>
                  <div className="Course-Card">
                    <div className="Course-Image">
                      <img src={course.illustration} alt="Course_Image" />
                    </div>
                    <div className="course-name">
                    <Typography
                        variant="h4"
                        style={{ textTransform: "uppercase" }}
                      >
                        {course.courseName}
                      </Typography>
                    </div>
                    <div className="Course-Detail">
                     
                      <Typography variant="body1" className="description">
                        {course.description.split(" ").slice(0, 30).join(" ")}...
                      </Typography>
                      <div className="Know-Btn">
                        <Link to={`/course/${course.id}`}>
                          <button>Know more</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Grid>
              ))
            ) : (
              <Typography variant="body1">
                No courses available at the moment.
              </Typography>
            )}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Courses;
