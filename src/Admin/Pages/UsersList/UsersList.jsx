import React, { useState, useEffect } from 'react';
import './UsersList.css';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users data from an API or a mock data source
    const mockUsers = [
      {
        id: 1,
        name: 'John Doe',
        picture: 'https://via.placeholder.com/150',
        course: 'Web Development',
      },
      {
        id: 2,
        name: 'Jane Smith',
        picture: 'https://via.placeholder.com/150',
        course: 'Graphic Design',
      },
      {
        id: 3,
        name: 'Bob Johnson',
        picture: 'https://via.placeholder.com/150',
        course: 'Digital Marketing',
      },
    ];
    setUsers(mockUsers);
  }, []);

  return (
    <div className="users-list">
      <h2>Users List</h2>
      <div className="users-container">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.picture} alt={user.name} />
            <h3>{user.name}</h3>
            <p>Course: {user.course}</p>
            <button>See More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
