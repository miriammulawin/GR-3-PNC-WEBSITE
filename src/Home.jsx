import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pnc from "./images/pnc6.jpg";
import p from "./images/pamantasan.png";
import { departmentData } from "./Department";

function Home() {
  const navigate = useNavigate();
  const [flippedCard, setFlippedCard] = useState(null);

  // Flippable department card with department color theme on back
  const DepartmentCard = ({ deptKey, data, index }) => {
    const isFlipped = flippedCard === index;

    // Department color mapping (same as Department.jsx)
    const deptColors = {
      ccs: "#ff8800",   // Orange
      cbaa: "#ffd600",  // Yellow
      coed: "#0d6efd",  // Bootstrap blue
      cas: "#800000",   // Maroon
      chas: "#388e3c",  // Green
      coe: "#d32f2f",   // Red
    };
    const backColor = deptColors[deptKey] || "#d1e7dd";
    // Use dark text for yellow/blue, white for others
    const backTextColor = ["cbaa", "coed"].includes(deptKey) ? "#222" : "#fff";

    return (
      <div className="col-md-4 mb-4">
        <div
          className={`department-flip-card`}
          tabIndex={0}
          onMouseEnter={() => setFlippedCard(index)}
          onMouseLeave={() => setFlippedCard(null)}
          onFocus={() => setFlippedCard(index)}
          onBlur={() => setFlippedCard(null)}
        >
          <div className={`department-flip-inner${isFlipped ? " flipped" : ""}`}>
            {/* Front */}
            <div
              className="department-flip-front card h-100 border-0 text-center"
              style={{
                background: "#fff",
                color: "#0b5133",
                maxWidth: "420px",
                width: "100%",
                margin: "0 auto",
                boxShadow: "0 8px 24px 0 rgba(33,136,91,0.13), 0 1.5px 8px 0 rgba(33,136,91,0.09)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "320px"
              }}
              onClick={() => navigate(`/${deptKey}`)}
            >
              <div className="card-body d-flex flex-column align-items-center text-center p-4">
                <img
                  src={data.image}
                  alt={data.name}
                  style={{
                    height: "90px",
                    width: "90px",
                    objectFit: "contain",
                    background: "#fff",
                    borderRadius: "50%",
                    padding: "10px",
                    marginBottom: "1rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                />
                <h5 className="card-title fw-bold mb-2">{data.name}</h5>
              </div>
            </div>
            {/* Back */}
            <div
              className="department-flip-back card h-100 border-0 text-center"
              style={{
                background: backColor,
                color: backTextColor,
                maxWidth: "420px",
                width: "100%",
                margin: "0 auto",
                boxShadow: "0 16px 40px 0 rgba(33,136,91,0.18), 0 1.5px 8px 0 rgba(33,136,91,0.13)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "320px"
              }}
              onClick={() => navigate(`/${deptKey}`)}
            >
              <div className="card-body d-flex flex-column align-items-center text-center p-4">
                <h5 className="card-title fw-bold mb-3">{data.name}</h5>
                <p className="card-text mb-3" style={{ color: backTextColor }}>{data.summary}</p>
                <button
                  className="btn btn-light px-4"
                  style={{
                    background: backTextColor,
                    color: backColor,
                    border: "none"
                  }}
                  onClick={e => {
                    e.stopPropagation();
                    navigate(`/${deptKey}`);
                  }}
                >
                  View Programs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="banner position-relative">
        <img src={pnc} alt="pnc" className="pnc-banner image-fluid" />

        <div className="overlay-text position-absolute start-50 top-50 translate-middle text-center text-white">
          <h1 className="display-1 fw-bold">University of Cabuyao</h1>
          <p className="lead">
            Dangal ng Bayan, bringing pride and honor to the nation
          </p>
          <button className="btn py-2">ENROLL NOW</button>
        </div>
      </div>

      <div className="program-container mt-3">
        <div className="container text-center">
          <img src={p} alt="" className="py-3" />
          <hr />
          <h1 className="fw-bold mb-2 mt-5">Discover Our Programs</h1>
          <p className="mb-5 text-muted">
            Explore our academic programs designed to inspire learning, growth,
            and success for every student.
          </p>

          <div className="row g-5">
            <div className="program col-md-6">
              <div className="under-grad card h-100">
                <div className="card-title text-center mt-4 fw-bold">
                  Under Graduate
                </div>
                <div className="card-body text-center px-5">
                  <p>Bachelor of Science in Accountancy</p>
                  <p>
                    Bachelor of Science in Business Administration Major in
                    Financial Management
                  </p>
                  <p>
                    Bachelor of Science in Business Administration Major in
                    Marketing Management
                  </p>
                  <p>Bachelor of Science in Computer Science</p>
                  <p>Bachelor of Science in Information Technology</p>
                  <p>Bachelor of Science in Nursing</p>
                  <p>Bachelor of Science in Psychology</p>
                  <p>Bachelor of Science in Computer Engineering</p>
                  <p>Bachelor of Science in Electronics Engineering</p>
                  <p>Bachelor of Science in Industrial Engineering</p>
                </div>
              </div>
            </div>

            <div className="program col-md-6">
              <div className="grad card h-100">
                <div className="card-title text-center mt-4 fw-bold">
                  Graduate
                </div>
                <div className="card-body text-center px-5">
                  <p>
                    Master of Arts in Education Major in Administration and
                    Supervision
                  </p>
                  <p>Master of Arts in Education Major in English</p>
                  <p>Master of Arts in Education Major in Filipino</p>
                  <p>Master of Arts in Education Major in Mathematics</p>
                  <p>Master of Arts in Education Major in Social Studies</p>
                  <p>Master of Arts in Business Administration</p>
                  <p>Master of Arts in Information Technology</p>
                  <p>Master of Arts in Psychology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <hr />
      </div>

      <div className="department py-5">
        <div className="container text-center">
          <h1 className="fw-bold mb-3">College Departments</h1>
          <p className="mb-5 text-muted">
            Click on any department to discover our programs. Hover to see more
            details.
          </p>

          <div className="row mt-5">
            {Object.entries(departmentData).map(([key, data], idx) => (
              <DepartmentCard key={key} deptKey={key} data={data} index={idx} />
            ))}
          </div>
          <br />
          <br />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <img
                src={p}
                alt="University Logo"
                style={{ height: "60px" }}
                className="mb-3"
              />
              <h5 className="fw-bold mb-3">University of Cabuyao</h5>
              <p className="text-muted">
                Dangal ng Bayan - Pride and honor of the nation
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h6 className="fw-bold mb-3">Quick Links</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-white text-decoration-none">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-decoration-none">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-decoration-none">
                    Admissions
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-decoration-none">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h6 className="fw-bold mb-3">Contact Information</h6>
              <p className="text-muted mb-2">
                Katapatan Subdivision, Banay Banay
              </p>
              <p className="text-muted mb-2">Cabuyao City, Laguna 4025</p>
              <p className="text-muted mb-2">Phone: (049) 531-1858</p>
              <p className="text-muted mb-2">Email: info@pamantasan.edu.ph</p>
            </div>
          </div>
          <hr className="my-4 bg-secondary" />
          <div className="row">
            <div className="col-12 text-center">
              <p className="mb-0 text-muted">
                © 2025 University of Cabuyao. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .department-flip-card {
          perspective: 1200px;
          min-height: 320px;
        }
        .department-flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s cubic-bezier(.4,2,.6,1);
          transform-style: preserve-3d;
        }
        .department-flip-inner.flipped {
          transform: rotateY(180deg);
        }
        .department-flip-front,
        .department-flip-back {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0; left: 0;
          backface-visibility: hidden;
          border-radius: 1rem;
        }
        .department-flip-back {
          transform: rotateY(180deg);
        }
        .department-flip-card:focus-within {
          outline: none;
        }
        @media (max-width: 767px) {
          .department-flip-card {
            min-height: 260px;
          }
          .department-flip-front,
          .department-flip-back {
            min-height: 260px;
          }
        }
      `}</style>
    </>
  );
}

export default Home;