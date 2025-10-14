import React from "react";
import "./index.css";
import pnc from "./images/pnc.png";
import mainB from "./images/mainB.jpg";
import hain from "./images/hain.jpg";
import dimauanhan from "./images/dimauanhan.jpg";
import agoncilio from "./images/agoncilio.jpg";
import manabo from "./images/manabo.jpg";
import lambot from "./images/lambot.jpg";
import garcia from "./images/garcia.jpg";
import magbuhos from "./images/magbuhos.jpg";
import andaya from "./images/andaya.jpg";

function About() {
  return (
    <>
      <div className="tex">
        <img src={pnc} alt="" className="hed-pic" />
        <h1 className="history-title">HISTORY</h1>

        <div className="about-content">
          <div className="image-container">
            <img src={mainB} alt="Main Building" className="main-image" />
          </div>
          <div className="text-container">
            <p>
              In late 2002, there was a strong protest against the leadership of the
              LSPC president from faculty members and students of LSPC.
              The protest was headed by Charlemagne G. Laviña and supported by
              Rosalia B. Pre, George Barundia, Christian Hernandez, Melissa Dimaculangan
              and one non-teaching staff, and some students from LSPC - CABUYAO CAMPUS. <br /><br />
              The protest was found by the Sangguniang Bayan of Cabuyao to be true and
              based on facts, with the support by almost all students, most of whom were
              Cabuyeños. It resulted to the issuance of the Notice of Termination to the
              memorandum of agreement. The administration of the mayor was left with no
              option but to establish Cabuyao Community College.
            </p>
          </div>
        </div>

        <div className="about-content">
          <div className="text-container" style={{ marginTop: "0" }}>
            <p>
              Having anticipated the closure of LSPC-Cabuyao, faculty members headed by
              Charlemagne Lavina and Frank Parao assisted the office of the mayor and
              informed them that the Pamantasan ng Lungsod ng Maynila (PLM) is the model
              school for local college. Dr. Benjamin Tayabas, then PLM president, assisted
              Cabuyao municipality and personally attended to the work of putting up a
              university. He suggested that Pamantasan ng Cabuyao should be the name. On
              April 15, 2003 the Sanguniang Bayan enacted Municipal Ordinance No. 2003-059.
              The same was approved a day after by Mayor Proceso “Etok” D. Aguillo.
            </p>

            <p>
              Pamantasan ng Cabuyao was inaugurated on July 31, 2003, the birthday of its
              founding mayor, and it was personally inaugurated by no less than President
              Gloria Macapagal Arroyo on June 19, 2003 on the occasion of the 107th birthday
              of Dr. Jose Rizal. During the term of Mayor Isidro L. Hemedes, Jr. and the able
              assistance of Atty. Rommel Gecolea, whom succeeded him afterward by winning the
              2016 elections, education reforms have been introduced, new and better systems
              have been put in place, and old practices have been put into sound and solid
              written policies and procedures.
            </p>
          </div>
        </div>

        {/* Administrative Officers */}
        <h1 className="history-title">Administrative Officers</h1>
        <div
          className="about-content"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            justifyItems: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div>
            <img src={hain} alt="Hain" style={{ width: "120px", borderRadius: "8px", display: "block", margin: "0 auto" }} />
            <p><b>Hon. Dennis Felipe C. Hain</b><br />Chairman of the Board<br />City Mayor of Cabuyao, Laguna</p>
          </div>

          <div>
            <img src={dimauanhan} alt="Dimauanhan" style={{ width: "120px", borderRadius: "8px", display: "block", margin: "0 auto" }} />
            <p><b>Mr. Librado DG. Dimauanhan</b><br />OIC President</p>
          </div>

          <div>
            <img src={agoncilio} alt="Agoncilio" style={{ width: "120px", borderRadius: "8px", display: "block", margin: "0 auto" }} />
            <p><b>Dr. Roland Niño L. Agoncilio</b><br />University Administrator</p>
          </div>

          <div>
            <img src={manabo} alt="Manabo" style={{ width: "120px", borderRadius: "8px", display: "block", margin: "0 auto" }} />
            <p><b>Dr. Renelina D. Manabo</b><br />Executive Vice President</p>
          </div>

          <div>
            <img src={lambot} alt="Lambot" style={{ width: "120px", borderRadius: "8px", display: "block", margin: "0 auto" }} />
            <p><b>Dr. George V. Lambot</b><br />Vice President, Academics & Student Services</p>
          </div>

          <div>
            <img src={garcia} alt="Garcia" style={{ width: "120px", borderRadius: "8px", display: "block", margin: "0 auto" }} />
            <p><b>Mr. Colin B. Garcia</b><br />Vice President, Administration and Linkages</p>
          </div>

          <div>
            <img src={magbuhos} alt="Magbuhos" style={{ width: "120px", borderRadius: "8px", display: "block", margin: "0 auto" }} />
            <p><b>Ms. Dolores N. Magbuhos</b><br />BOR / University Secretary</p>
          </div>

          <div>
            <img src={andaya} alt="Andaya" style={{ width: "120px", borderRadius: "8px", display: "block", margin: "0 auto" }} />
            <p><b>Engr. Florante A. Andaya</b><br />Director of Student Affairs & Services</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
