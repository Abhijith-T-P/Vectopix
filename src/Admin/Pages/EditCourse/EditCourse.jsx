import React, { useState, useEffect } from 'react';
import './EditCourse.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../../../Config/Firebase';

const EditCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({
    courseName: '',
    description: '',
    duration: '',
    fee: '',
    illustration: '',
    syllabus: '',
  });
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseRef = doc(db, 'courses', id);
        const courseDoc = await getDoc(courseRef);
        if (courseDoc.exists()) {
          setCourse(courseDoc.data());
        } else {
          setError('No such course found!');
        }
      } catch (error) {
        setError('Error fetching course details: ' + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setError('');
    setSuccess('');

    try {
      let illustrationURL = course.illustration;

      if (e.target.illustration.files.length > 0) {
        const file = e.target.illustration.files[0];
        
        if (course.illustration) {
          const oldImageRef = ref(storage, course.illustration);
          await deleteObject(oldImageRef);
        }

        const illustrationRef = ref(storage, `illustrations/${file.name}`);
        await uploadBytesResumable(illustrationRef, file);
        illustrationURL = await getDownloadURL(illustrationRef);
      }

      const courseRef = doc(db, 'courses', id);
      await updateDoc(courseRef, {
        courseName: course.courseName,
        description: course.description,
        duration: course.duration,
        fee: course.fee,
        illustration: illustrationURL,
        syllabus: course.syllabus,
      });

      setSuccess('Course updated successfully!');
    } catch (error) {
      setError('Error updating course: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        const courseRef = doc(db, 'courses', id);
        await deleteDoc(courseRef);

        if (course.illustration) {
          const imageRef = ref(storage, course.illustration);
          await deleteObject(imageRef);
        }

        navigate('../CoursesList');
      } catch (error) {
        setError('Error deleting course: ' + error.message);
      }
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="edit-course">
      
      <h2>Edit Course</h2>
      <div className="BackToCourse-btn">
        <Link to="../CoursesList">&lt; Back to courses</Link>
      </div>
      {success && <div className="success-message">{success}</div>}
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="illustration">Course Image</label>
          <input
            type="file"
            id="illustration"
            name="illustration"
            accept="image/*"
          />
          {uploading && <p>Uploading...</p>}
          {course.illustration && (
            <img src={course.illustration} alt="Course illustration" style={{maxWidth: '200px'}} />
          )}
        </div>
        <div className="form-group">
          <label htmlFor="courseName">Course Name</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={course.courseName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={course.description}
            onChange={handleChange}
            required
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
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fee">Fee</label>
          <input
            type="text"
            id="fee"
            name="fee"
            value={course.fee}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="syllabus">Syllabus</label>
          <textarea
            id="syllabus"
            name="syllabus"
            value={course.syllabus}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={uploading}>
          {uploading ? 'Updating...' : 'Save Changes'}
        </button>
        <button type="button" onClick={handleDelete} className="delete-btn">
          Delete Course
        </button>
      </form>
    </div>
  );
};

export default EditCourse;