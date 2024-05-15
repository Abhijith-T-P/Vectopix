import React from "react";
import "./Attendance.css"; // Create and use a separate CSS file for Attendance page styling
import { Link } from "react-router-dom";

const Attendance = () => {
  const attendanceDetails = [
    { date: "01/01/2025", status: "Present" },
    { date: "02/01/2025", status: "Absent" },
    { date: "03/01/2025", status: "Present" },
    // Add more records as needed
  ];

  return (
    <div className="AttendancePage">
      <div className="AttendancePage-Container">
        <div className="AttendancePage-Header">
          <h2>Attendance Details</h2>
          <Link to="../Dashboard">
            <button className="Back-Btn">Back to Dashboard</button>
          </Link>
        </div>
        <div className="AttendancePage-Content">
          <div className="Attendance-Overview">
            <h3>Overview</h3>
            <div className="Overview-Details">
              <span>Total Sessions: 100</span>
              <span>Present: 75</span>
              <span>Absent: 25</span>
              <span>Attendance Percentage: 75%</span>
            </div>
          </div>
          <div className="Attendance-Records">
            <h3>Daily Attendance Records</h3>
            <div className="Records-Table">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceDetails.map((record, index) => (
                    <tr key={index}>
                      <td>{record.date}</td>
                      <td>{record.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
