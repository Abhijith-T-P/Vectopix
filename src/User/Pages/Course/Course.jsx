import React from "react";
import "./Course.css";
import { ReactComponent as StackLogo } from "../../Assets/Icons/stack-alt-svgrepo-com.svg";
import image from "../../Assets/Images/test-image-course.jpg";
import { Link } from "react-router-dom";

const Course = () => {
  const progress = 70; // Example progress value

  return (
    <div className="Course">
      <div className="Course-Container">
        <div className="Course-Content">
          <div className="User-Hi">
            <h2>Current Course Details</h2>
          </div>
          <div className="Content-Card">
            <div className="Card Course-Card">
              <div className="Course-Title">
                <div className="Title-Img">
                  <img src={image} alt="Course Image" />
                </div>
                <div className="Title-Text">
                  <h3>Computer Hardware</h3>
                </div>
              </div>
              <div className="Course-detail">
                <div className="Course-JoinDate">Join Date: 23/4/2025</div>
                <div className="Course-EndDate">End Date: 23/7/2025</div>
                <div className="Course-Lessions">
                  <StackLogo />
                  <span>Total lessons : 24</span>
                </div><div className="Course-Lessions">
                  <StackLogo />
                  <span>Lessons completed : 17</span>
                </div>
                <div className="Course-Progress">
                  <div
                    className="Progress-Bar"
                    style={{ width: `${progress}%` }}
                  ></div>
                  <span>{progress}% Completed</span>
                </div>
                <div className="Course-Description">
                  <p>
                    This course covers the fundamentals of computer hardware, including
                    the architecture, components, and operation of modern computers. You'll
                    learn about processors, memory, storage, and peripheral devices.
                  </p>
                </div>
                <div className="More-Btn">
                  <Link to="../Lessons">View Lessons</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="Content-Card">
            <div className="Card Course-Card">
              <div className="Other-Details">
                <h3>Instructor</h3>
                <p>John Doe</p>
                <h3>Prerequisites</h3>
                <p>Basic knowledge of computers and operating systems.</p>
                <h3>Course Materials</h3>
                <ul>
                  <li>Textbook: "Computer Hardware Basics"</li>
                  <li>Online Resources: Tutorials and videos</li>
                  <li>Lab Exercises</li>
                </ul>
                <h3>Assessment</h3>
                <p>
                  The course includes quizzes, assignments, and a final exam to evaluate
                  your understanding and skills.
                </p>
              </div>
              <div className="More-Btn">
                <Link to="../Dashboard">Back to Dashboard</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
