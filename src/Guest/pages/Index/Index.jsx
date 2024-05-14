import React from "react";
import Banner_Img from "../../Assets/Banner/Hero-Banner-1.jpg";
import "./Index.css";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import img1 from "../../Assets/Images/why-hands-on.jpg";
import img2 from "../../Assets/Images/Why-industry-relevant.jpg";
import img3 from "../../Assets/Images/why-121.jpg";
import img4 from "../../Assets/Images/contact.jpg";
const Index = () => {
  return (
    <div className="Index">
      <div className="Hero Container Paper">
        <div className="Hero-Text">
          <h1 className="Hero-title">
            The journey to <br />a fulfilling career <br />
            never ends.
          </h1>
          <span>Keep learning and designing with Vectopix.</span>
        </div>
        <div className="Hero-Img">
          <img src={Banner_Img} alt="Hero Banner" />
        </div>
      </div>
      <div className="Why Txt">
        <div className="Why-Heading">
          <h2>Why Vectopix</h2>
          <p>
            With comprehensive courses, experienced instructors, and hands-on
            learning, excel in the digital age. Unleash your potential and join
            our vibrant community for continuous growth and success.
          </p>
        </div>
        <div className="Cources-Btn">
          <Link to="../Courses">Explore cources</Link>
        </div>
        <div className="Why-Card">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <div className="Card">
                <div className="Card-Img">
                  <img src={img1} alt="card-Img" />
                </div>
                <div className="Card-Text">
                  <h4>Hands-On Learning</h4>
                  <span>
                    Our courses emphasize practical, hands-on exercises and
                    real-world projects that allow you to apply what you've
                    learned in a meaningful way.
                  </span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div className="Card">
                <div className="Card-Img">
                  <img src={img2} alt="card-Img" />
                </div>
                <div className="Card-Text">
                  <h4>Flexible Learning Options</h4>
                  <span>
                    We understand that everyone's learning journey is unique.
                    That's why we offer flexible learning options to accommodate
                    your preferences.
                  </span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div className="Card">
                <div className="Card-Img">
                  <img src={img3} alt="card-Img" />
                </div>
                <div className="Card-Text">
                  <h4>Affordable Tuition</h4>
                  <span>
                    Vectopix offers competitive tuition rates and flexible
                    payment options to make our courses accessible to students
                    of all backgrounds.
                  </span>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="Index-Contact">
        <div className="Contact-Img">
          <img src={img4} alt="Simple illustration" />
        </div>
        <div className="Contact-Content">
          <div className="Contact-Text">
            <h2>
              Ready to level up <br />
              your skill
            </h2>
            <p>
              Join now and unlock endless opportunities for growth and success.
              Embrace learning, connect with experts, and transform your future
              with Vectopix. Don't miss out <br />
              <span>—start your journey today!</span>
            </p>
          </div>

          <div className="Cources-Btn">
          <Link to="../Contact">Contact now !</Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
