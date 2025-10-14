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
import drgima from "./images/drgima.png";
import sirochie from "./images/sirochie.png";
import mammagaling from "./images/mammagaling.png";

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

{/* ADMINISTRATIVE OFFICERS */}
<h1 className="history-title text-center mb-4">
  Administrative Officers
</h1>

<div className="container px-5 py-3 mt-3">
  <div className="row g-4 mb-5 justify-content-center">

    {/* HAIN */}
    <div className="col-md-3 col-sm-6 d-flex align-items-stretch">
      <div className="card text-center w-100 shadow-sm" style={{ padding: "20px" }}>
        <img
          src={hain}
          alt="Hain"
          className="card-img-top mx-auto mt-3"
          style={{
            width: "180px",
            height: "180px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <div className="card-body d-flex flex-column justify-content-center mt-3">
          <h5 className="fw-bold">Hon. Dennis Felipe C. Hain</h5>
          <p className="description px-3 mb-0" style={{ fontSize: "15px" }}>
            Chairman of the Board <br />
            City Mayor of Cabuyao, Laguna
          </p>
        </div>
      </div>
    </div>

    {/* DIMAUNAHAN */}
    <div className="col-md-3 col-sm-6 d-flex align-items-stretch">
      <div className="card text-center w-100 shadow-sm" style={{ padding: "20px" }}>
        <img
          src={dimauanhan}
          alt="Dimauanhan"
          className="card-img-top mx-auto mt-3"
          style={{
            width: "180px",
            height: "180px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <div className="card-body d-flex flex-column justify-content-center mt-3">
          <h5 className="fw-bold">Mr. Librado DG. Dimauanhan</h5>
          <p className="description px-3 mb-0" style={{ fontSize: "15px" }}>
            OIC President
          </p>
        </div>
      </div>
    </div>

    {/* AGONCILIO */}
    <div className="col-md-3 col-sm-6 d-flex align-items-stretch">
      <div className="card text-center w-100 shadow-sm" style={{ padding: "20px" }}>
        <img
          src={agoncilio}
          alt="Agoncilio"
          className="card-img-top mx-auto mt-3"
          style={{
            width: "180px",
            height: "180px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <div className="card-body d-flex flex-column justify-content-center mt-3">
          <h5 className="fw-bold">Dr. Roland Niño L. Agoncilio</h5>
          <p className="description px-3 mb-0" style={{ fontSize: "15px" }}>
            University Administrator
          </p>
        </div>
      </div>
    </div>

    {/* MANABO */}
    <div className="col-md-3 col-sm-6 d-flex align-items-stretch">
      <div className="card text-center w-100 shadow-sm" style={{ padding: "20px" }}>
        <img
          src={manabo}
          alt="Manabo"
          className="card-img-top mx-auto mt-3"
          style={{
            width: "180px",
            height: "180px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <div className="card-body d-flex flex-column justify-content-center mt-3">
          <h5 className="fw-bold">Dr. Renelina D. Manabo</h5>
          <p className="description px-3 mb-0" style={{ fontSize: "15px" }}>
            Executive Vice President
          </p>
        </div>
      </div>
    </div>

    {/* LAMBOT */}
    <div className="col-md-3 col-sm-6 d-flex align-items-stretch">
      <div className="card text-center w-100 shadow-sm" style={{ padding: "20px" }}>
        <img
          src={lambot}
          alt="Lambot"
          className="card-img-top mx-auto mt-3"
          style={{
            width: "180px",
            height: "180px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <div className="card-body d-flex flex-column justify-content-center mt-3">
          <h5 className="fw-bold">Dr. George V. Lambot</h5>
          <p className="description px-3 mb-0" style={{ fontSize: "15px" }}>
            Vice President, Academics & Student Services
          </p>
        </div>
      </div>
    </div>

    {/* GARCIA */}
    <div className="col-md-3 col-sm-6 d-flex align-items-stretch">
      <div className="card text-center w-100 shadow-sm" style={{ padding: "20px" }}>
        <img
          src={garcia}
          alt="Garcia"
          className="card-img-top mx-auto mt-3"
          style={{
            width: "180px",
            height: "180px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <div className="card-body d-flex flex-column justify-content-center mt-3">
          <h5 className="fw-bold">Mr. Colin B. Garcia</h5>
          <p className="description px-3 mb-0" style={{ fontSize: "15px" }}>
            Vice President, Administration and Linkages
          </p>
        </div>
      </div>
    </div>

    {/* MAGBUHOS */}
    <div className="col-md-3 col-sm-6 d-flex align-items-stretch">
      <div className="card text-center w-100 shadow-sm" style={{ padding: "20px" }}>
        <img
          src={magbuhos}
          alt="Magbuhos"
          className="card-img-top mx-auto mt-3"
          style={{
            width: "180px",
            height: "180px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <div className="card-body d-flex flex-column justify-content-center mt-3">
          <h5 className="fw-bold">Ms. Dolores N. Magbuhos</h5>
          <p className="description px-3 mb-0" style={{ fontSize: "15px" }}>
            BOR / University Secretary
          </p>
        </div>
      </div>
    </div>

    {/* ANDAYA */}
    <div className="col-md-3 col-sm-6 d-flex align-items-stretch">
      <div className="card text-center w-100 shadow-sm" style={{ padding: "20px" }}>
        <img
          src={andaya}
          alt="Andaya"
          className="card-img-top mx-auto mt-3"
          style={{
            width: "180px",
            height: "180px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <div className="card-body d-flex flex-column justify-content-center mt-3">
          <h5 className="fw-bold">Engr. Florante A. Andaya</h5>
          <p className="description px-3 mb-0" style={{ fontSize: "15px" }}>
            Director of Student Affairs & Services
          </p>
        </div>
      </div>
    </div>

  </div>
</div>


    

{/* DEAN AND CHAIRS */}
<h1 className="history-title text-center mb-4">
  College of Computing Studies' Chairs and Dean
</h1>

<div className="container px-5 py-3 mt-3">
  <div className="row g-4 mb-5 justify-content-center">

    {/* QUIATCHON */}
    <div className="col-md-4 col-sm-6 d-flex align-items-stretch">
      <div className="card text-center w-100 shadow-sm" style={{ padding: "20px" }}>
        <img
          src={sirochie}
          alt="Quiatchon"
          className="card-img-top mx-auto mt-3"
          style={{
            width: "180px",
            height: "180px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <div className="card-body d-flex flex-column justify-content-center mt-3">
          <h5 className="fw-bold">Asst. Prof. Arcelito C. Quiatchon</h5>
          <p className="description px-3 mb-0" style={{ fontSize: "15px" }}>
            Department Chair <br />
            Bachelor of Science in Information Technology
          </p>
        </div>
      </div>
    </div>

    {/* MONTECILLO */}
    <div className="col-md-4 col-sm-6 d-flex align-items-stretch">
      <div className="card text-center w-100 shadow-sm" style={{ padding: "20px" }}>
        <img
          src={drgima}
          alt="Montecillo"
          className="card-img-top mx-auto mt-3"
          style={{
            width: "180px",
            height: "180px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <div className="card-body d-flex flex-column justify-content-center mt-3">
          <h5 className="fw-bold">Dr. Gima B. Montecillo</h5>
          <p className="description px-3 mb-0" style={{ fontSize: "15px" }}>
            Department Dean <br />
            College of Computing Studies
          </p>
        </div>
      </div>
    </div>

    {/* MAGALING */}
    <div className="col-md-4 col-sm-6 d-flex align-items-stretch">
      <div className="card text-center w-100 shadow-sm" style={{ padding: "20px" }}>
        <img
          src={mammagaling}
          alt="Magaling"
          className="card-img-top mx-auto mt-3"
          style={{
            width: "180px",
            height: "180px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <div className="card-body d-flex flex-column justify-content-center mt-3">
          <h5 className="fw-bold">Asst. Prof. Evangelina A. Magaling</h5>
          <p className="description px-3 mb-0" style={{ fontSize: "15px" }}>
            Department Chair <br />
            Bachelor of Science in Computer Science
          </p>
        </div>
      </div>
    </div>

  </div>
</div>


</div>


        
    </>
  );
}



export default About;
