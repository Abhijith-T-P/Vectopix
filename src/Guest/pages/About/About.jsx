import React from "react";
import "./About.css";
import AboutImg1 from "../../Assets/Images/AboutIllu1.png";
import AboutImg2 from "../../Assets/Images/AboutIllu2.png";
import AboutImg3 from "../../Assets/Images/AboutIllu3.jpg";
const About = () => {
  return (
    <div className="About">
      <div className="About-Container">
        <div className="About-Card">
        <div className="About-Img">
            <img src={AboutImg1} alt="Mission_image" />
          </div>
          <div className="About-Text">
            <h1>About Vectopix</h1>
            <p>
              Vectopix is a renowned educational institution dedicated to
              empowering individuals with essential skills in technology and
              design. With a focus on excellence and innovation, we strive to
              provide top-quality education and cultivate a vibrant learning
              community. Our comprehensive programs and experienced instructors
              ensure that students receive the knowledge and tools they need to
              succeed in today's dynamic digital landscape.
            </p>
          </div>
          
        </div>
        <div className="About-Card">
          
          <div className="About-Text">
            <h2>Mission</h2>
            <p>
              Our mission at Vectopix is to equip individuals with the
              knowledge, skills, and confidence to thrive in the digital age. We
              are committed to delivering comprehensive, practical education
              that empowers learners to achieve their goals, advance their
              careers, and make a positive impact in the world. With a
              student-centered approach and a passion for innovation, we aim to
              inspire and transform lives through education.
            </p>
          </div>
          <div className="About-Img">
            <img src={AboutImg2} alt="Mission_image" />
          </div>
        </div>
        <div className="About-Card">
        <div className="About-Img">
            <img src={AboutImg3} alt="Mission_image" />
          </div>
          <div className="About-Text">
            <h2>Vision</h2>
            <p>
              At Vectopix, our vision is ambitious yet attainable. We aspire to
              be the premier destination for technology and design education,
              renowned for our excellence in teaching, cutting-edge curriculum,
              and unwavering dedication to student success. By fostering a
              culture of innovation, collaboration, and lifelong learning, we
              aim to empower individuals to realize their full potential and
              drive positive change in the world.
            </p>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default About;
