import React, {useEffect} from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({duration: 3000});
  }, []);
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info"><br /><br />
          Let's bring your idea(s) to life!<br /> <br /> 
          <span className="info-name" data-aos="zoom-in">I'm Tariqul Islam👨‍💻</span><br /> <br /> 
          As an aspiring Researcher & Full Stack Developer (MERN), I love experimenting & developing web applications therefore
          I've spent the bulk of my time learning, but i'm always excited to learn new technologies. 
          I'm looking for a team that allows me to perpetually get outside my comfort zone.
          My goal is to solve problems in society through technology and contribute to tech companies with bring value.<br /> 
        </div>
        <div className="about-photo">
          <img data-aos="zoom-in"
            src={require("../../../assets/image/Tariqul.png").default}
            className="picture"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
