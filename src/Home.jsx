import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pnc from "./images/pnc6.jpg";
import p from "./images/pamantasan.png";
import { departmentData } from "./Department";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";


import slide1 from "./images/slide1.jpeg";
import slide2 from "./images/slide2.jpeg";
import slide3 from "./images/slide3.jpeg";
import slide4 from "./images/slide4.jpeg";
import slide5 from "./images/slide5.jpeg";
import slide6 from "./images/sliide6.jpeg";
import slide7 from "./images/slide7.jpeg";
import slide8 from "./images/slide8.jpeg";

function Home() {
  const navigate = useNavigate();
  const [flippedCard, setFlippedCard] = useState(null);

  const DepartmentCard = ({ deptKey, data }) => {
    const isFlipped = flippedCard === deptKey;

    return (
      <div className="col-md-4 mb-4">
        <div
          className="position-relative cursor-pointer"
          style={{ height: "320px", perspective: "1000px" }}
          onMouseEnter={() => setFlippedCard(deptKey)}
          onMouseLeave={() => setFlippedCard(null)}
          onClick={() => navigate(`/${deptKey}`)}
        >
          <div
            className="position-relative w-100 h-100 transition-transform"
            style={{
              transformStyle: "preserve-3d",
              transition: "transform 0.7s",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Front of card */}
            <div
              className="position-absolute w-100 h-100"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div
                className="card h-100 shadow-sm text-center d-flex flex-column justify-content-center align-items-center"
                style={{
                  padding: "30px 20px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    height: "290px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src={data.image}
                    alt={data.name}
                    style={{
                      maxHeight: "250px",
                      width: "auto",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </div>

                <h5
                  className="card-title fw-bold px-3 mt-2"
                  style={{
                    fontSize: "1.2rem",
                    color: "#1d1d1d",
                    lineHeight: "1.3",
                    wordWrap: "break-word",
                  }}
                >
                  {data.name}
                </h5>
              </div>
            </div>

            {/* Back of card */}
            <div
              className="position-absolute w-100 h-100"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div
                className={`card h-100 shadow-lg border-0 text-white ${data.color}`}
              >
                <div className="card-body p-4 d-flex flex-column justify-content-center">
                  <h6 className="fw-bold mb-3">{data.name}</h6>
                  <p className="small mb-3">{data.summary}</p>
                  <button className="btn btn-light btn-sm mt-auto">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* HERO BANNER */}
      <div
        className="banner position-relative d-flex justify-content-center align-items-center"
        style={{
          width: "100%",
          height: "80vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={pnc}
          alt="pnc"
          className="pnc-banner img-fluid"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        <div className="overlay-text position-absolute text-center text-white">
          <h1 className="display-1 fw-bold">University of Cabuyao</h1>
          <p className="lead">
            Dangal ng Bayan, bringing pride and honor to the nation
          </p>
          <button className="btn py-2 btn-light">ENROLL NOW</button>
        </div>
      </div>

      {/* PROGRAM SECTION */}
      <div className="program-container mt-3">
        <div className="container text-center">
          <div className="d-flex justify-content-center align-items-center py-3">
            <img src={p} alt="University Logo" />
          </div>

          <hr />
          <h1 className="fw-bold mb-2 mt-5">Discover Our Programs</h1>
          <p className="mb-5 text-muted">
            Explore our academic programs designed to inspire learning, growth,
            and success for every student.
          </p>

          {/* Program Cards */}
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

      {/* MISSION / VISION SECTION */}
      <div className="mv-section container my-5">
        <h1>Our Commitment</h1>

        <Row className="mb-4">
          <Col md={6}>
            <Card className="mv-card h-100">
              <Card.Body>
                <Card.Title>Mission</Card.Title>
                <Card.Text>
                  An institution of higher learning committed to equip
                  individuals with knowledge, skills, and values that will
                  enable them to achieve professional goals and provide
                  leadership and service for national development.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="mv-card h-100">
              <Card.Body>
                <Card.Title>Vision</Card.Title>
                <Card.Text>
                  An institution of higher learning in Region IV, developing
                  globally-competitive and value-laden professionals and leaders
                  instrumental to community development and nation building.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <Card className="mv-card h-100">
              <Card.Body>
                <Card.Title>Quality Policy</Card.Title>
                <Card.Text>
                  Pamantasan ng Cabuyao commits to adhering to statutory and
                  regulatory requirements, promoting high levels of customer
                  engagement, and maintaining an effective quality management
                  system through periodic review and communication of quality
                  objectives for continuous improvement of quality services in
                  instruction, research, and extension.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="mv-card h-100">
              <Card.Body>
                <Card.Title>CORE VALUES</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  As a God-fearing institution respecting multi-faith of people,
                  PnC adheres to the following core values:
                  <div className="mt-2 text-center">
                    <h6>Personal Dignity</h6>
                    <h6>Nurturing Community</h6>
                    <h6>Commitment to Excellence</h6>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <hr />

      {/* DEPARTMENTS */}
      <div className="department py-5">
        <div className="container text-center">
          <h1 className="fw-bold mb-3">College Departments</h1>
          <p className="mb-5 text-muted">
            Click on any department to discover our programs. Hover to see more
            details.
          </p>

          <div className="row mt-5">
            {Object.entries(departmentData).map(([key, data]) => (
              <DepartmentCard key={key} deptKey={key} data={data} />
            ))}
          </div>
        </div>
      </div>

      <hr />

      <div className="slides featured-slides container mt-5">
        <div className="container text-center">
          <h1 className="fw-bold text-center mb-3">Featured Moments</h1>
          <p className="text-muted mb-5">
            A glimpse into our university’s most memorable events, activities,
            and celebrations that showcase the true spirit of Cabuyeños.
          </p>
        </div>

        <Carousel fade interval={4000} pause="hover">
          <Carousel.Item>
            <img
              className="d-block w-100 rounded-4 shadow"
              src={slide2}
              alt="Slide 2"
              style={{ height: "500px", objectFit: "cover" }}
            />{" "}
            <Carousel.Caption>
              <h3>Campus Life</h3>
              <p>Experience vibrant student life at the heart of the city.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded-4 shadow"
              src={slide1}
              alt="Slide 1"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 rounded-4 shadow"
              src={slide3}
              alt="Slide 3"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 rounded-4 shadow"
              src={slide4}
              alt="Slide 4"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 rounded-4 shadow"
              src={slide5}
              alt="Slide 5"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 rounded-4 shadow"
              src={slide6}
              alt="Slide 6"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 rounded-4 shadow"
              src={slide7}
              alt="Slide 7"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 rounded-4 shadow"
              src={slide8}
              alt="Slide 8"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <style>{`
        .cursor-pointer { cursor: pointer; }
        .carousel-caption {
          background: rgba(0,0,0,0.5);
          border-radius: 10px;
          padding: 1rem 2rem;
        }
      `}</style>
    </>
  );
}

export default Home;
