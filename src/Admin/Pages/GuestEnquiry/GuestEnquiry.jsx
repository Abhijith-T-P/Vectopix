import { Typography } from "@mui/material";
import React from "react";
import "./GuestEnquiry.css";

const GuestEnquiry = () => {
  const users = [
    {
      picture: "https://via.placeholder.com/150",
      name: "John Doe",
      contact: "8965845745",
      email: "johndoe@gmail.com"
    },
    {
      picture: "https://via.placeholder.com/150",
      name: "Jane Smith",
      contact: "1234567890",
      email: "janesmith@gmail.com"
    },
    {
      picture: "https://via.placeholder.com/150",
      name: "Alice Johnson",
      contact: "0987654321",
      email: "alicejohnson@gmail.com"
    },
    {
      picture: "https://via.placeholder.com/150",
      name: "Bob Brown",
      contact: "1122334455",
      email: "bobbrown@gmail.com"
    },
    {
      picture: "https://via.placeholder.com/150",
      name: "Charlie Black",
      contact: "5566778899",
      email: "charlieblack@gmail.com"
    },
    {
      picture: "https://via.placeholder.com/150",
      name: "Daisy Green",
      contact: "6677889900",
      email: "daisygreen@gmail.com"
    },
    {
      picture: "https://via.placeholder.com/150",
      name: "Ethan White",
      contact: "7788990011",
      email: "ethanwhite@gmail.com"
    },
    {
      picture: "https://via.placeholder.com/150",
      name: "Fiona Blue",
      contact: "8899001122",
      email: "fionablue@gmail.com"
    },
    // {
    //   picture: "https://via.placeholder.com/150",
    //   name: "George Red",
    //   contact: "9900112233",
    //   email: "georgered@gmail.com"
    // },
    // {
    //   picture: "https://via.placeholder.com/150",
    //   name: "Hannah Violet",
    //   contact: "1011121314",
    //   email: "hannahviolet@gmail.com"
    // }
  ];

  return (
    <div className="GuestEnquiry">
      <div className="EnquiryContainer">
        <div className="EnquiryHeading">
          <Typography variant="h3">Guest Enquiry</Typography>
        </div>
        <div className="EnquiryCards">
          {users.map((user, index) => (
            <div className="EnquiryCard-container" key={index}>
              <div className="Enquiry-Detail">
               
                <Typography variant="subtitle1">{user.name}</Typography>
                <p>
                  Contact <br /> {user.contact} <br />
                  {user.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuestEnquiry;
