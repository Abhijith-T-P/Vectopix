import React from "react";
import "./Courses.css";
import { Grid } from "@mui/material";
import img1 from "../../Assets/Images/test-image-course.jpg";
import { Link } from "react-router-dom";
const Courses = () => {
  return (
    <div className="Courses">
      <div className="Courses-Text">
        <h1>Explore Our Courses</h1>
        <p>
          We offer a diverse range of courses designed to equip individuals with
          essential skills in technology, design, and more. Whether you're
          looking to enhance your career prospects, explore a new passion, or
          stay ahead in the digital age, we have something for everyone.
        </p>
      </div>
      <div className="Courses-Container">
        <div className="Courses-Search">
            <label htmlFor="course-search">Search</label>
          <input type="text" name="course-search" id="course-search" placeholder="MS Office"/>
        </div>
        <div className="Courses-Grid">
          <Grid container spacing={2}>
           
          <Grid item xs={12} md={6} lg={4}>
              <div className="Course-Card">
                <div className="Course-Image">
                  <img src={img1} alt="Course_Image" />
                </div>
                <div className="Course-Detail">
                  <h3>Computer Hardware</h3>
                  <p>
                    Understand the inner workings of computers and peripherals
                    with our courses on computer hardware basics, hardware
                    installation, and maintenance.
                  </p>
                  <div className="Know-Btn">

                  <Link><button>Know more.</button> </Link>
                  </div>
                </div>
              </div>
            </Grid><Grid item xs={12} md={6} lg={4}>
              <div className="Course-Card">
                <div className="Course-Image">
                  <img src={img1} alt="Course_Image" />
                </div>
                <div className="Course-Detail">
                  <h3>Computer Hardware</h3>
                  <p>
                    Understand the inner workings of computers and peripherals
                    with our courses on computer hardware basics, hardware
                    installation, and maintenance.
                  </p>
                  <div className="Know-Btn">

                  <Link><button>Know more.</button> </Link>
                  </div>
                </div>
              </div>
            </Grid><Grid item xs={12} md={6} lg={4}>
              <div className="Course-Card">
                <div className="Course-Image">
                  <img src={img1} alt="Course_Image" />
                </div>
                <div className="Course-Detail">
                  <h3>Computer Hardware</h3>
                  <p>
                    Understand the inner workings of computers and peripherals
                    with our courses on computer hardware basics, hardware
                    installation, and maintenance.
                  </p>
                  <div className="Know-Btn">

                  <Link><button>Know more.</button> </Link>
                  </div>
                </div>
              </div>
            </Grid><Grid item xs={12} md={6} lg={4}>
              <div className="Course-Card">
                <div className="Course-Image">
                  <img src={img1} alt="Course_Image" />
                </div>
                <div className="Course-Detail">
                  <h3>Computer Hardware</h3>
                  <p>
                    Understand the inner workings of computers and peripherals
                    with our courses on computer hardware basics, hardware
                    installation, and maintenance.
                  </p>
                  <div className="Know-Btn">

                  <Link><button>Know more.</button> </Link>
                  </div>
                </div>
              </div>
            </Grid><Grid item xs={12} md={6} lg={4}>
              <div className="Course-Card">
                <div className="Course-Image">
                  <img src={img1} alt="Course_Image" />
                </div>
                <div className="Course-Detail">
                  <h3>Computer Hardware</h3>
                  <p>
                    Understand the inner workings of computers and peripherals
                    with our courses on computer hardware basics, hardware
                    installation, and maintenance.
                  </p>
                  <div className="Know-Btn">

                  <Link><button>Know more.</button> </Link>
                  </div>
                </div>
              </div>
            </Grid><Grid item xs={12} md={6} lg={4}>
              <div className="Course-Card">
                <div className="Course-Image">
                  <img src={img1} alt="Course_Image" />
                </div>
                <div className="Course-Detail">
                  <h3>Computer Hardware</h3>
                  <p>
                    Understand the inner workings of computers and peripherals
                    with our courses on computer hardware basics, hardware
                    installation, and maintenance.
                  </p>
                  <div className="Know-Btn">

                  <Link><button>Know more.</button> </Link>
                  </div>
                </div>
              </div>
            </Grid><Grid item xs={12} md={6} lg={4}>
              <div className="Course-Card">
                <div className="Course-Image">
                  <img src={img1} alt="Course_Image" />
                </div>
                <div className="Course-Detail">
                  <h3>Computer Hardware</h3>
                  <p>
                    Understand the inner workings of computers and peripherals
                    with our courses on computer hardware basics, hardware
                    installation, and maintenance.
                  </p>
                  <div className="Know-Btn">

                  <Link><button>Know more.</button> </Link>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Courses;
