import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UsersList.css";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const mockUsers = [
      {
        id: 1,
        name: "John Doe",
        picture: "https://via.placeholder.com/150",
        course: "Web Development",
        verified: false,
      },
      {
        id: 2,
        name: "Jane Smith",
        picture: "https://via.placeholder.com/150",
        course: "Graphic Design",
        verified: true  ,
      },
      {
        id: 3,
        name: "Bob Johnson",
        picture: "https://via.placeholder.com/150",
        course: "Digital Marketing",
        verified: true,
      },
    ];
    setUsers(mockUsers);
  }, []);

  const verifiedUsers = users.filter((user) => user.verified);

  return (
    <div className="users-list">
      <div className="header">
        <h2>Verified Users List</h2>
      </div>
      <Link to="../AdminVerifyUsers" className="admin-verify-link">
          Go to Admin Verify Users
        </Link>
      <div className="users-container">
        {verifiedUsers.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.picture} alt={user.name} />
            <h3>{user.name}</h3>
            <p>Course: {user.course}</p>
            <span className="verified-text">Verified</span>
            <button>See More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
