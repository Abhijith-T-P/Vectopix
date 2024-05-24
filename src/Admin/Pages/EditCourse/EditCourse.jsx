// EditCourse.jsx
import React, { useState, useEffect } from 'react';
import './EditCourse.css';

const EditCourse = ({ match }) => {
  const [course, setCourse] = useState({
    id: '',
    image: '',
    name: '',
    duration: '',
    fee: '',
  });

  useEffect(() => {
    // Fetch course data from an API or a mock data source based on the course ID
    const courseId = match.params.id;
    const mockCourse = {
      id: courseId,
      image: 'https://via.placeholder.com/150',
      name: 'Web Development Bootcamp',
      duration: '3 months',
      fee: 499.99,
    };
    setCourse(mockCourse);
  }, [match.params.id]);

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and update the course data
    console.log('Updated course:', course);
  };

  return (
    <div className="edit-course">
      <h2>Edit Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={course.image}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Course Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={course.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={course.duration}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fee">Fee</label>
          <input
            type="number"
            id="fee"
            name="fee"
            value={course.fee}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditCourse;
