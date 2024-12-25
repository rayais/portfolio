import React from 'react'
import './education.css'
function Education() {

    const edus = [
      {
        org: "High Institute of Technological Studies ISET(Kairouan)",
        year: "in progress",
        title: "Bachlor degree",
        disc: "I am currently enrolled at the Higher Institute of Technological Studies (ISET), where I take evening online courses during weekdays and attend on-site sessions during weekends. My studies focus on various programming languages, including Java, PHP, and JavaScript, while also exploring frameworks like React and PHP. Additionally, I am gaining experience with learning management systems and enhancing my skills in software development.",
        pic: "",
        link: "",
      },
      {
        org: "High Professional Institute of Tourism (El Kantaoui,Sousse)",
        year: "2017",
        title: "hight technician degree",
        disc: "Over three years at the Higher Institute of Professional Studies in Tourism (ISPT), I specialized in hotel management while also developing expertise in communication, foreign languages, and numerous soft skills. This comprehensive education provided me with a solid foundation in professional and interpersonal abilities.",
        pic: "",
        link: "",
      },
      {
        org: "Higher Institute of Computer Science (Ariana,Tunisia)",
        year: "2011",
        title: "first year non passed",
        disc: "After achieving excellent grades in my baccalaureate, I gained admission to the prestigious Higher Institute of Computer Science (ISI). Unfortunately, due to personal reasons, I was unable to complete my education there. Nevertheless, my time at ISI instilled in me a passion for technology and a commitment to continuous learning.",
        pic: "",
        link: "",
      },
      {
        org: "Bachir Nabhani High School  (HamamLif,Tunisia)",
        year: "2010",
        title: "Computer Science baccalaureate",
        disc: "",
        pic: "",
        link: "",
      },
    ];
  return (
    <div>
      <h1 className="certit">Education</h1>
      {edus.map((e, i) => (
        <div key={i} className="crd">
          <h1 className="crdorg">{e.org}</h1>
          <h2 className="crdtit">{e.title}</h2>
          <h3 className="crddate">{e.year}</h3>
          <p className="crddisc">{e.disc}</p>
        </div>
      ))}
    </div>
  );
}

export default Education