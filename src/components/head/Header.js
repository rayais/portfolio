import React from "react";
import Nav from "./Nav";
import img1 from "../../asse/Octicons-mark-github.svg.png";
import img2 from "../../asse/images (1).png";
import wa from "../../asse/whatsapp.png"
import "./header.css";
import { FaSquarePhone } from "react-icons/fa6";

function Header() {
  return (
    <div>
      <Nav />
      <div className="hero">
        <div className="tr">
          <div className="theimg"></div>
          <h2 className="tit">JAVASCRIPT FULL STACK DEVELOPER</h2>
          <p className="bio">
            I am a JavaScript Full-Stack Developer (MERN) with strong skills
            honed through a comprehensive JavaScript Bootcamp featuring multiple
            projects, including a major one. Currently, I’m a second-year
            Bachelor’s student in Computer System Development at ISET Kairouan,
            studying online and on-site (C, Java, OracleDB, PHP, React ...).
          </p>
        </div>
        <div className="img"></div>
        <div className="pre">
          <h3>Rayen Ben Mansour</h3>
          <h4>rayen.ben.mansour@gmail.com</h4>
          <h4>
            <a
              href="https://wa.me/21623804911"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline"
            >
              <img className="wa" src={wa} alt="whatsapp" />
            </a>
          </h4>
          <h4>Hammam-Lif Tunis</h4>
          <h4>
            <a className="oor" href="tel:+21623804911">
              <strong className="strong"><FaSquarePhone /></strong> +2016 23 804 911
            </a>
          </h4>

          {/*  */}
          <div className="imgs">
            <a className="tel" href="https://github.com/rayais">
              <img src={img1} alt="githube" />
            </a>
            <a href="www.linkedin.com/in/rayen-ben-mansour" target="_blank">
              <img src={img2} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
