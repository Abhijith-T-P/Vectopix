import React, { useState, useEffect } from 'react';
import './EditProfile.css';

const EditProfile = () => {
  // State for form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    // Fetch current profile data from an API or a mock data source
    const mockProfileData = {
      fullName: 'John Doe',
      email: 'admin@example.com',
      phone: '(123) 456-7890',
    };

    // Set the state with the fetched data
    setFullName(mockProfileData.fullName);
    setEmail(mockProfileData.email);
    setPhone(mockProfileData.phone);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated:', { fullName, email, phone });
    console.log('Profile updated:', { fullName, email, phone });
    // navigate('./AdminProfile');
  };

  return (
    <div className="EditProfile">
      <div className="EditProfile-Container">
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="save-btn">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
