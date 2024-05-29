import React, { useState } from "react";
import "./AdminVerifyUsers.css";

const AdminVerifyUsers = () => {
  const [users, setUsers] = useState([
    { id: "1", name: "Alice Johnson", email: "alice@example.com", verified: false },
    { id: "2", name: "Bob Smith", email: "bob@example.com", verified: false },
    { id: "3", name: "Charlie Brown", email: "charlie@example.com", verified: true },
  ]);

  const handleVerify = (userId) => {
    setUsers(users.map(user => user.id === userId ? { ...user, verified: true } : user));
  };

  const handleReject = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className="AdminVerifyUsers">
      <div className="AdminVerifyUsers-Container">
        <h2>Verify Users</h2>
        {users.length > 0 ? (
          <table className="Users-Table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {!user.verified && (
                      <button
                        className="Verify-Btn"
                        onClick={() => handleVerify(user.id)}
                      >
                        Verify
                      </button>
                    )}
                    {!user.verified && (
                      <button
                        className="Reject-Btn"
                        onClick={() => handleReject(user.id)}
                      >
                        Reject
                      </button>
                    )}
                    {user.verified && <span className="Verified-Text">Verified</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users to verify.</p>
        )}
      </div>
    </div>
  );
};

export default AdminVerifyUsers;
