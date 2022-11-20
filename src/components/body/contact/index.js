import React, {useEffect} from "react";
import "./contact.css";
import SocialContact from "../../common/social-contact/index";
import Separator from "../../common/separator/index";
import Aos from "aos";
import "aos/dist/aos.css";
import ContactForm from './MyContact';

const Contact = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
  return (
    <div className="contact">
      <Separator />
      <label className="contact-title">Contact ☏</label>
      <div className="contact-container">
        <div className="contact-left">
          <p data-aos="zoom-in">Don't be stranger! Contact me on any of the platform below⬇️</p>
          <div><SocialContact /></div>
        </div>
        <div className="download" data-aos="zoom-in-right">
          <a download href={require("../../../assets/resume.pdf").default}>
            CV Download <i class="fi-rr-cloud-download download-icon" />
          </a>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}

export default Contact;
