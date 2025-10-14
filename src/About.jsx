import React from "react";
import "./index.css";
import pnc from "./images/pnc.png";
import pncimg1 from "./images/pncimg1.jpg";
import drgima from "./images/drgima.png";
import sirochie from "./images/sirochie.png";
import mammagaling from "./images/mammagaling.png";
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
                    then Mayor Proceso “Etok” D. Aguillo, through the enactment
                    of Municipal Ordinance 2003-059 approved on April 16, 2003.
                    TO OUR UNIVERSITY
                  </p>

                  <p>
                    On April 16, 2003, then-municipal mayor Proceso D. Aguillo
                    signed Municipal Ordinance No. 2003-059, “Ordinance
                    Establishing the Pamantasan ng Cabuyao (University of
                    Cabuyao) and Other Purposes,” creating the Pamantasan ng
                    Cabuyao (PnC). The institution began offering classes in
                    business administration, information technology, education,
                    nursing, and midwifery in June 2003. Before the Pamantasan
                    ng Cabuyao was founded, the Laguna State Polytechnic
                    University (LSPU) had a satellite campus at the Cabuyao
                    National High School. A memorandum of understanding between
                    the mayor of Cabuyao Municipality and the LSPU president
                    served as the basis for the LSPU’s operations. The
                    LSPC-Cabuyao Campus began its operation in 1993 and ended on
                    March 31, 2003.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/* Administrative Officers */}
        <h1 className="history-title">Administrative Officers</h1>

        <div className="container px-5 py-4">
          <div className="row g-4 justify-content-center">
            {/* MANABO */}
            <div className="col-md-3 col-sm-6 d-flex align-items-stretch">
              <div
                className="card text-center w-100 shadow-sm"
                style={{
                  padding: "20px",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
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
                  <p
                    className="description px-3 mb-0"
                    style={{ fontSize: "15px" }}
                  >
                    Vice President, Academics & Student Services
                  </p>
                </div>
              </div>
            </div>

            {/* GARCIA */}
            <div className="col-md-3 col-sm-6 d-flex align-items-stretch">
              <div
                className="card text-center w-100 shadow-sm"
                style={{
                  padding: "20px",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
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
                  <p
                    className="description px-3 mb-0"
                    style={{ fontSize: "15px" }}
                  >
                    Vice President, Administration and Linkages
                  </p>
                </div>
              </div>
            </div>

            {/* MAGBUHOS */}
            <div className="col-md-3 col-sm-6 d-flex align-items-stretch">
              <div
                className="card text-center w-100 shadow-sm"
                style={{
                  padding: "20px",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
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
                  <p
                    className="description px-3 mb-0"
                    style={{ fontSize: "15px" }}
                  >
                    BOR / University Secretary
                  </p>
                </div>
              </div>
            </div>

            {/* ANDAYA */}
            <div className="col-md-3 col-sm-6 d-flex align-items-stretch">
              <div
                className="card text-center w-100 shadow-sm"
                style={{
                  padding: "20px",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
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
                  <p
                    className="description px-3 mb-0"
                    style={{ fontSize: "15px" }}
                  >
                    Director of Student Affairs & Services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/* DEAN AND CHAIRS */}
        <h1 className="history-title text-center mb-4">
          College of Computing Studies' Chairs and Dean
        </h1>

        <div className="container px-5 py-3 mt-3">
          <div className="row g-4 mb-5 justify-content-center">
            {/* SIROCHIE */}
            <div className="col-md-4 col-sm-6 d-flex align-items-stretch">
              <div
                className="card text-center w-100 shadow-sm"
                style={{
                  padding: "20px",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
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
                  <p
                    className="description px-3 mb-0"
                    style={{ fontSize: "15px" }}
                  >
                    Department Chair <br />
                    Bachelor of Science in Information Technology
                  </p>
                </div>
              </div>
            </div>

            {/* DRGIMA */}
            <div className="col-md-4 col-sm-6 d-flex align-items-stretch">
              <div
                className="card text-center w-100 shadow-sm"
                style={{
                  padding: "20px",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
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
                  <p
                    className="description px-3 mb-0"
                    style={{ fontSize: "15px" }}
                  >
                    Department Dean <br />
                    College of Computing Studies
                  </p>
                </div>
              </div>
            </div>

            {/* MAMMAGALING */}
            <div className="col-md-4 col-sm-6 d-flex align-items-stretch">
              <div
                className="card text-center w-100 shadow-sm"
                style={{
                  padding: "20px",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
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
                  <h5 className="fw-bold">
                    Asst. Prof. Evangelina A. Magaling
                  </h5>
                  <p
                    className="description px-3 mb-0"
                    style={{ fontSize: "15px" }}
                  >
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
