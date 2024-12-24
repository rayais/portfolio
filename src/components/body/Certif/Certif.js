
import './certif.css'


function Certif() {
    
    const cer = [
      {
        org: "Higher Institute of Technological Studies of Kairouan ISET",
        titre: "Computer System Development Bachelor",
        date: "2025",
        presentation:
          "I am currently pursuing my Bachelor’s degree in Computer System Development," +
          "attending remote evening sessions during weekdays" +
          "(starting at 7 PM) and on-site sessions during weekends." +
          "In my second year, I have been learning a variety of new " +
          "concepts and technologies, including C, Java, PHP, and OracleDB.." +
          "I am also gaining hands-on experience with tools like IntelliJ IDEA, VS Code, and Postman." +
          "My education is guided by highly professional and dedicated professors, providing me with a " +
          "solid foundation in both theory and practice.",
        pic: "../../../asse/dsi.png",
        link: "",
      },
      {
        org: "GoMyCode",
        titre: "JavaScript FullStack",
        date: "2024",
        presentation:
          "Over the course of several months, I participated in a Fullstack JavaScript Bootcamp at GoMyCode. During this program, I was guided and mentored to complete various mini-projects, allowing me to explore all aspects of the MERN stack. This experience empowered me to confidently build and deploy my own personal projects, strengthening my skills in web development and problem-solving.",
        pic: "../../../asse/gomycode.png",
        link: "https://drive.google.com/file/d/16cFmXbi19SLayytfENRIazxCwvcGTXpz/view?usp=sharing",
      },
      {
        org: "Microsoft",
        titre: "Asure Fundamental",
        date: "2024",
        presentation:
          "I was honored by my institute, which provided me with the resources and time to prepare for and earn the Microsoft Azure Fundamentals Certification. This opportunity allowed me to dive deeply into the world of cloud hosting on Azure." +
          "Through this certification, I gained insights into key Azure concepts such as resource groups, subscriptions, and accounts. Additionally, I developed an understanding of critical cloud principles like scalability, elasticity, and cost optimization, enabling me to appreciate how Azure supports modern cloud solutions.",
        pic: "../../../asse/Asurefundamentale.png",
        link: "https://drive.google.com/file/d/1vNXZWivm3-ZYqgrpa5ZIyRqmJNg0OS-Y/view?usp=sharing",
      },
      {
        org: "Microsoft",
        titre: "Asure Data",
        date: "2024",
        presentation:
          "Building on my experience with Azure, I pursued the Microsoft Azure Data Fundamentals Certification. This certification expanded my knowledge of Azure’s data services and solutions." +
          "I learned about fundamental concepts such as data management, relational and non-relational databases, and data analytics. The program also introduced me to Azure services like Azure SQL Database, Cosmos DB, and Azure Synapse Analytics, giving me a comprehensive understanding of how Azure handles big data and advanced analytics in scalable and efficient ways.",
        pic: "../../../asse/asuredata.png",
        link: "https://drive.google.com/file/d/1Fx53KL4h40FTwMiPwfRvNkLDSvfg5rGD/view?usp=sharing",
      },
    ];
    
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
                      <a href={ce.link} id="lin">
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