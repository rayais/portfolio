import "./certif.css";

function Projects() {
  const pros = [
    {
      titre: "Carpool web app",

      presentation:
        "",
      pic: "../../../asse/dsi.png",
      link: "",
    },
    {
      
      titre: "Geoفين",
      presentation:
        "",
      pic: "../../../asse/gomycode.png",
      link: "",
    },
  ];

  return (
    <>
      <h1 className="certit">Projects</h1>
      <div className="cers">
        <table>
          <tbody>
            {Pros.map((ce, i) => (
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
