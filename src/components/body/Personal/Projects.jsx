//import "./certif.css";

function Projects() {
  const pros = [
    {
      titre: "Carpool web app",

      presentation:
        "LiftShare is a carpooling application built using the MERN stack (MongoDB, Express, React, Node.js) designed to connect drivers and passengers for shared rides. Key features include:"+

"Geonames API Integration: Dynamically loads location names for enhanced user experience."+
"Cloudinary Integration: Securely handles photo uploads for profile pictures and car images."+
"Backend: Developed with Express, incorporating robust CORS handling and essential security middleware."+
"Hosting: Fully deployed on Render, ensuring seamless accessibility",
      pic: "../../../asse/logolift.png",
      link: "",
    },
    {
      
      titre: "Geoفين",
      presentation:
        "GeoFeen started as an educational project initially developed using WordPress, but I decided to rebuild it using React to enhance my front-end development skills. This static website showcases:"+
"A modern, responsive design powered by React for a seamless user experience."+
"Custom components and reusable UI elements for scalability and maintainability."+
"A transition from WordPress to React, reflecting my journey to sharpen my front-end expertise.",
      pic: "../../../asse/logo1.png",
      link: "",
    },
  ];

  return (
    <>
      <h1 className="certit">Projects</h1>
      <div className="cers">
        <table>
          <tbody>
            {pros.map((ce, i) => (
              <tr key={i}>
                <td className="certext">
                  <ul>
                    <li>
                      <h2>{ce.titre}</h2>
                    </li>
                    
                    <li>
                      <p>{ce.presentation}</p>
                    </li>
                    <li>
                      <a href={ce.link} id="lin">
                        {ce.link ? "Show" : "in progress"}
                      </a>
                    </li>
                  </ul>
                </td>
                <td className="tdimg">
                  <img className="cerimg" src={ce.pic} alt="img" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Projects;
