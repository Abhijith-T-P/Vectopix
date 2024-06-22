 import React, { useState } from 'react';
import { storage, db } from '../../../Config/Firebase';
import './AddCourse.css';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';

const AddCourse = () => {
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [syllabus, setSyllabus] = useState('');
  const [fee, setFee] = useState('');
  const [duration, setDuration] = useState('');
  const [illustration, setIllustration] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (illustration) {
      setUploading(true);
      const illustrationRef = ref(storage, `illustrations/${illustration.name}`);
      await uploadBytesResumable(illustrationRef, illustration);
      const illustrationURL = await getDownloadURL(illustrationRef);

      try {
        
        await addDoc(collection(db, 'courses'), {
          courseName,
          description,
          syllabus,
          fee,
          duration,
          illustration: illustrationURL,
        });
        alert(`$course added successfully`);
        handleReset();
      } catch (error) {
        console.error('Error adding course:', error);
      }
      setUploading(false);
    } else {
      alert('Please upload an illustration');
    }
  };

  const handleReset = () => {
    setCourseName('');
    setDescription('');
    setSyllabus('');
    setFee('');
    setDuration('');
    setIllustration(null);
    document.getElementById('illustration').value = '';
    setUploading(false);
  };

  return (
    <div className="AddCourse">
      <div className="AddCourse-Container">
        <h2>Add Course</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="courseName">Course Name</label>
            <input
              type="text"
              id="courseName"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="syllabus">Syllabus</label>
            <textarea
              id="syllabus"
              rows="4"
              value={syllabus}
              onChange={(e) => setSyllabus(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="fee">Fee</label>
            <input
              type="number"
              id="fee"
              value={fee}
              onChange={(e) => setFee(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="duration">Duration (months)</label>
            <input
              type="number"
              id="duration"
              value={duration}
              onChange={(e) => {
                const value = parseInt(e.target.value, 10);
                if (value >= 1 && value <= 36) {
                  setDuration(value);
                } else {
                  setDuration('');
                }
              }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="illustration">Upload Illustration</label>
            <input
              type="file"
              id="illustration"
              onChange={(e) => setIllustration(e.target.files[0])}
              required
            />
          </div>
          <button type="submit" className="submit-btn" disabled={uploading}>
            {uploading ? 'Uploading...' : 'Submit'}
          </button>
          <button type="button" className="reset-btn" onClick={handleReset}>Reset</button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
