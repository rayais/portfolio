import "./projects.css";
import go from '../../../asse/logolift.png'
import geo from "../../../asse/logo1.png"

function Projects() {
  const pros = [
    {
      titre: "ShareLift",

      presentation:
        "ShareLift is a carpooling application built using the MERN stack (MongoDB, Express, React, Node.js) designed to connect drivers and passengers for shared rides. Key features include:" +
        "Geonames API Integration: Dynamically loads location names for enhanced user experience." +
        "Cloudinary Integration: Securely handles photo uploads for profile pictures and car images." +
        "Backend: Developed with Express, incorporating robust CORS handling and essential security middleware." +
        "Hosting: Fully deployed on Render, ensuring seamless accessibility",
      pic: go,
      link: "https://covoituragetunisie.onrender.com/",
    },
    {
      titre: "Geoفين",
      presentation:
        "GeoFeen started as an educational project initially developed using WordPress, but I decided to rebuild it using React to enhance my front-end development skills. This static website showcases:" +
        "A modern, responsive design powered by React for a seamless user experience." +
        "Custom components and reusable UI elements for scalability and maintainability." +
        "A transition from WordPress to React, reflecting my journey to sharpen my front-end expertise.",
      pic: geo,
      link: "",
    },
  ];

  return (
    <>
      <h1 className="certit" id="per">
        Projects
      </h1>
      <div className="cards">
        {pros.map((ce, i) => (
          <a key={i} href={ce.link} className="card" target="_blank">
            <div>
              <img className="cardimg" src={ce.pic} alt="img" />
              <ul className="ulcard">
                <li>
                  <h2>{ce.titre}</h2>
                </li>

                <li>
                  <p>{ce.presentation}</p>
                </li>
                <li>
                  <a href={ce.link} id="li" target="_blank ">
                    {ce.link ? "Show" : "in progress"}
                  </a>
                </li>
              </ul>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default Projects;
