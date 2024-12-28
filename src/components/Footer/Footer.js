// Footer.js
import React from "react";
import prof from '../../prof-pic.jpg';
import "./footer.css";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="profile-section">
          <img src={prof} alt="Profile" className="profile-picture" />
          <div className="social-icons">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="icon github-icon"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
              className="icon whatsapp-icon"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <form
          className="email-form"
          action="mailto:rayen.ben.mansour@example.com"
          method="post"
          enctype="text/plain"
        >
          {" "}
            <h3>Contact Me</h3>
          <div className="ins">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="form-input"
            /> 
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="form-input"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="form-textarea"
          ></textarea>
          <button type="submit" className="form-button">
            Send Email
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
