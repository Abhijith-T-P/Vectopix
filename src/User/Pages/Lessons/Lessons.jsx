import React from "react";
import "./Lessons.css";
import { Link } from "react-router-dom";

const lessonsData = [
  { title: "Introduction to Computer Hardware", description: "Overview of computer hardware components.", completed: true },
  { title: "Understanding Processors", description: "In-depth look at CPU architecture and function.", completed: false },
  { title: "Memory and Storage", description: "Differences between RAM, ROM, and various storage devices.", completed: false },
  { title: "Peripheral Devices", description: "Introduction to various peripheral devices and their functions.", completed: false },
  // Add more lessons as needed
];

const Lessons = () => {
  return (
    <div className="Lessons">
      <div className="Lessons-Container">
        <div className="Lessons-Content">
          <div className="User-Hi">
            <h2>Lessons for Computer Hardware</h2>
          </div>
          <div className="Lessons-List">
            {lessonsData.map((lesson, index) => (
              <div key={index} className={`Lesson-Card ${lesson.completed ? "completed" : ""}`}>
                <div className="Lesson-Title">
                  <h3>{lesson.title}</h3>
                </div>
                <div className="Lesson-Description">
                  <p>{lesson.description}</p>
                </div>
                <div className="Lesson-Status">
                  <span>{lesson.completed ? "Completed" : "Incomplete"}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="More-Btn">
            <Link to="../Course">Back to Course</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
