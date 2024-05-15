import React from "react";
import "./Notification.css";
import { Link } from "react-router-dom";

const notificationsData = [
  { id: 1, title: "New Assignment", message: "A new assignment has been posted.", timestamp: "2024-05-14 10:00 AM", read: false },
  { id: 2, title: "Course Update", message: "The course syllabus has been updated.", timestamp: "2024-05-13 08:30 AM", read: true },
  { id: 3, title: "Meeting Reminder", message: "Don't forget the team meeting at 3 PM.", timestamp: "2024-05-12 02:00 PM", read: false },
  // Add more notifications as needed
];

const Notification = () => {
  const markAsRead = (id) => {
    // Logic to mark notification as read
    console.log(`Notification ${id} marked as read`);
  };

  return (
    <div className="Notifications">
      <div className="Notifications-Container">
        <div className="Notifications-Content">
          <div className="User-Hi">
            <h2>Your Notifications</h2>
          </div>
          <div className="Notifications-List">
            {notificationsData.map((notification) => (
              <div key={notification.id} className={`Notification-Card ${notification.read ? "read" : "unread"}`}>
                <div className="Notification-Title">
                  <h3>{notification.title}</h3>
                </div>
                <div className="Notification-Message">
                  <p>{notification.message}</p>
                </div>
                <div className="Notification-Timestamp">
                  <span>{notification.timestamp}</span>
                </div>
                <button onClick={() => markAsRead(notification.id)} className="Mark-As-Read-Btn">
                  Mark as Read
                </button>
              </div>
            ))}
          </div>
          <div className="More-Btn">
            <Link to="../Dashboard">Back to Dashboard</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
