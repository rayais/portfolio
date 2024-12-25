
import './certif.css'
import dsi from "../../../asse/dsi.png";
import gomycode from "../../../asse/gomycode.png";
import asureFundamentale from "../../../asse/Asurefundamentale.png";
import asureData from "../../../asse/asuredata.png";

const cer = [
  {
    org: "Higher Institute of Technological Studies of Kairouan ISET",
    titre: "Computer System Development Bachelor",
    date: "2025",
    presentation:
      "I am currently pursuing my Bachelor’s degree in Computer System Development..." +
      "solid foundation in both theory and practice.",
    pic: dsi,
    link: "",
  },
  {
    org: "GoMyCode",
    titre: "JavaScript FullStack",
    date: "2024",
    presentation:
      "Over the course of several months, I participated in a Fullstack JavaScript Bootcamp..." +
      "strengthening my skills in web development and problem-solving.",
    pic: gomycode,
    link: "https://drive.google.com/file/d/16cFmXbi19SLayytfENRIazxCwvcGTXpz/view?usp=sharing",
  },
  {
    org: "Microsoft",
    titre: "Asure Fundamental",
    date: "2024",
    presentation:
      "I was honored by my institute, which provided me with the resources..." +
      "how Azure supports modern cloud solutions.",
    pic: asureFundamentale,
    link: "https://drive.google.com/file/d/1vNXZWivm3-ZYqgrpa5ZIyRqmJNg0OS-Y/view?usp=sharing",
  },
  {
    org: "Microsoft",
    titre: "Asure Data",
    date: "2024",
    presentation:
      "Building on my experience with Azure, I pursued the Microsoft Azure Data..." +
      "advanced analytics in scalable and efficient ways.",
    pic: asureData,
    link: "https://drive.google.com/file/d/1Fx53KL4h40FTwMiPwfRvNkLDSvfg5rGD/view?usp=sharing",
  },
];

function Certif() {
    
    
  return (
    <>
      <h1 className="certit">CERTIFICATES</h1>
      <div className="cers">
        <table>
          <tbody>
            {cer.map((ce, i) => (
              <tr key={i}>
                <td className="tdimg">
                  <img className="cerimg" src={ce.pic} alt="img" />
                </td>
                <td className="certext">
                  <ul>
                    <li>
                      <h2>{ce.titre}</h2>
                    </li>
                    <li>
                      <h4>{ce.org}</h4>
                    </li>
                    <li>
                      <p>{ce.presentation}</p>
                    </li>
                    <li>
                      {ce.date}
                      <a href={ce.link} id="lin" target="_blank">
                        {ce.link ? "Show" : "in progress"}
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Certif