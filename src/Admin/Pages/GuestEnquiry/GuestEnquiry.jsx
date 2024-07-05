import { Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useEffect, useState } from "react";
import "./GuestEnquiry.css";
import { collection, getDocs, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../Config/Firebase";
import { Link } from "react-router-dom";


const GuestEnquiry = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

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

  const handleDeleteClick = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedEnquiry(null);
  };

  const handleDeleteConfirm = async () => {
    try {
      await deleteDoc(doc(db, "Guest_Contact", selectedEnquiry.id));
      setEnquiries(enquiries.filter(enquiry => enquiry.id !== selectedEnquiry.id));
      handleClose();
    } catch (error) {
      console.error("Error deleting enquiry: ", error);
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
                  <Typography variant="subtitle2" className="Timestamp">
                    {user.timestamp}
                  </Typography>
                  <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => handleDeleteClick(user)}>
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this enquiry?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="info">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default GuestEnquiry;
