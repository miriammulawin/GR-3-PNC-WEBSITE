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
import pncimg1 from "./images/pncimg1.jpg";

function About() {
  return (
    <>
      <div className="tex">
        <img src={pnc} alt="" className="hed-pic" />
        <h1 className="history-title">HISTORY</h1>

        <div className="photo-container py-4 px-5">
                <div className="row g-0">
                  <div className="col-md-6">
                    <div className="photo card h-100 border-0 shadow">
                      <img src={pncimg1} alt="" />
                    </div>
                  </div>
        
                  <div className="col-md-6">
                    <div className="caption card h-100 rounded-0 shadow">
                      <div className="card-body px-5 py-5">
                        <p>
                          The Pamantasan ng Cabuyao is a university in the city of
                          Cabuyao, province of Laguna, Philippines. It was founded by
                          then Mayor Proceso “Etok” D. Aguillo, through the enactment of
                          Municipal Ordinance 2003-059 approved on April 16, 2003. TO
                          OUR UNIVERSITY
                        </p>
        
                        <p>
                          On April 16, 2003, then-municipal mayor Proceso D. Aguillo
                          signed Municipal Ordinance No. 2003-059, “Ordinance
                          Establishing the Pamantasan ng Cabuyao (University of Cabuyao)
                          and Other Purposes,” creating the Pamantasan ng Cabuyao (PnC).
                          The institution began offering classes in business
                          administration, information technology, education, nursing,
                          and midwifery in June 2003. Before the Pamantasan ng Cabuyao
                          was founded, the Laguna State Polytechnic University (LSPU)
                          had a satellite campus at the Cabuyao National High School. A
                          memorandum of understanding between the mayor of Cabuyao
                          Municipality and the LSPU president served as the basis for
                          the LSPU’s operations. The LSPC-Cabuyao Campus began its
                          operation in 1993 and ended on March 31, 2003.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <hr />
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
