import React from "react";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="Dashboard-Container">
        <div className="Dashboard-Content">
          <div className="Content-Card">
            <div className="Card Attendance-Card">
              <div className="Attendance-Title">
                <h3>Attendance</h3>
              </div>
              <div className="Attendance-Percentage">
                <span>100%</span>
              </div>
            </div>
            <div className="Card Course-Card">
              <div className="Course-Title">
                <div className="Title-Img">
                  <img src="qwer" alt="title Image" />
                </div>
                <div className="Title-Text">

                <h3> Computer Hardware</h3>{" "}
                </div>
              </div>
              <div className="Course-detail">
                <div className="Course-JoinDate">23/4/2025</div>
                <div className="Course-Lessions">
                  <img src="2345" alt="lession Stack" />
                  <span>23 Lessions</span>{" "}
                </div>
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
