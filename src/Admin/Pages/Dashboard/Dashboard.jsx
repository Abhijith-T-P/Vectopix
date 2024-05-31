import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({});
  const [recentActivities, setRecentActivities] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Mock data for statistics
    const mockStats = {
      totalUsers: 120,
      activeUsers: 95,
      verifiedUsers: 80,
      courses: 10,
    };
    setStats(mockStats);

    // Mock data for recent activities
    const mockActivities = [
      { id: 1, activity: 'John Doe enrolled in Web Development' },
      { id: 2, activity: 'Jane Smith completed Graphic Design' },
      { id: 3, activity: 'Bob Johnson verified his account' },
    ];
    setRecentActivities(mockActivities);

    // Mock data for users
    const mockUsers = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        verified: true,
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        verified: false,
      },
      {
        id: 3,
        name: 'Bob Johnson',
        email: 'bob@example.com',
        verified: true,
      },
    ];
    setUsers(mockUsers);
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>{stats.totalUsers}</p>
        </div>
        <div className="stat-card">
          <h3>Active Users</h3>
          <p>{stats.activeUsers}</p>
        </div>
        <div className="stat-card">
          <h3>Verified Users</h3>
          <p>{stats.verifiedUsers}</p>
        </div>
        <div className="stat-card">
          <h3>Total Courses</h3>
          <p>{stats.courses}</p>
        </div>
      </div>
      <div className="recent-activities">
        <h2>Recent Activities</h2>
        <ul>
          {recentActivities.map((activity) => (
            <li key={activity.id}>{activity.activity}</li>
          ))}
        </ul>
      </div>
      <div className="users-list">
        <h2>Manage Users</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Verified</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.verified ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
