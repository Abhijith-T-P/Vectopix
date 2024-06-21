import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./GuestEnquiry.css";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../../Config/Firebase";
import { Link } from "react-router-dom";

const GuestEnquiry = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEnquiry();
  }, []);

  const getEnquiry = async () => {
    try {
      const enquiryQuery = query(collection(db, "Guest_Contact"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(enquiryQuery);
      const filteredData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        timestamp: new Date(doc.data().timestamp.seconds * 1000).toLocaleString() // Format timestamp
      }));
      setEnquiries(filteredData);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error(error);
      setLoading(false); // Handle error case by setting loading to false
    }
  };

  return (
    <div className="GuestEnquiry">
      <div className="EnquiryContainer">
        <div className="EnquiryHeading">
          <Typography variant="h3">Guest Enquiry</Typography>
        </div>
        {loading ? (
          <Typography variant="body1">Loading enquiries...</Typography>
        ) : enquiries.length === 0 ? (
          <Typography variant="body1">No enquiries found.</Typography>
        ) : (
          <div className="EnquiryCards">
            {enquiries.map((user, index) => (
              <div className="EnquiryCard-container" key={index}>
                <div className="Enquiry-Detail">
                  <Typography variant="h4">{user.contactName}</Typography>
                  <p>
                     
                    <Link to={`tel:${user.contactNumber}`}>{user.contactNumber}</Link> <br />
                    <Link to={`mailto:${user.contactEmail}?subject=Response to Your Enquiry at Vectopix Institute of Computer Graphics&body=Thank you for reaching out to us at Vectopix Institute of Computer Graphics. We have received your enquiry and appreciate your interest in our services.`} target="_blank">
                      {user.contactEmail}
                    </Link>
                  </p>
                  <Typography>
                    Message: {user.contactMessage}
                  </Typography>
                  <Typography  variant="subtitle2" style={{ textAlign: "right" ,fontSize:".7rem"}}>
                    {user.timestamp}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GuestEnquiry;
