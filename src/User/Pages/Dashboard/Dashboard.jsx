import React from "react";
import "./Dashboard.css";
import { ReactComponent as StackLogo } from "../../Assets/Icons/stack-alt-svgrepo-com.svg";
import image from "../../Assets/Images/test-image-course.jpg";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const progress = 50;
  return (
    <div className="Dashboard">
      <div className="Dashboard-Container">
        <div className="Dashboard-Content">
          <div className="User-Hi">
            <h2>Welcome User-name</h2>
          </div>
          <div className="Content-Card">
            <div className="Card Attendance-Card">
              <div className="Attendance-Title">
                <h2>Attendance</h2>
              </div>
              <div className="Attendance-Percentage">
                <div className="Percentage">
                  <span>75%</span>
                </div>
                <div className="Class-Count">
                  <span>Total Session :100</span>
                  <span>Total Present :75</span>
                  <span>Total absent :25</span>
                  <span>
                    <h4>Course Status :In Progress</h4>
                  </span>
                </div>
              </div>
              <br />
              <br />
              <div className="More-Btn">
                <Link to="../Attendance">See more</Link>
              </div>
            </div>
            <div className="Card Course-Card">
              <div className="Course-Title">
                <div className="Title-HomeImg">
                  <img src={image} alt="titleImage" />
                </div>
                <div className="Title-Text">
                  <h3>Computer Hardware</h3>
                </div>
              </div>
              <div className="Course-detail">
                <div className="Course-JoinDate">Join Date: 23/4/2025</div>
                <div className="Course-JoinDate">End Date : 23/7/2025</div>
                <div className="Course-Lessions">
                  <StackLogo />
                  <span>Total Lessons : 23</span>
                </div>
                <div className="Course-Lessions">
                  <StackLogo />
                  <span>Completed : 16</span>
                </div>

                <div className="Course-Progress">
                  <div
                    className="Progress-Bar"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="More-Btn">
                <Link to="../Course">See more</Link>
              </div>
            </div>
          </div>
          <div className="Content-Card"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
