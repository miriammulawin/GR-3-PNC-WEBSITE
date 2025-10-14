import { useParams, useNavigate } from "react-router-dom";
import p from "./images/pamantasan.png";
import CHAS from "./images/CHAS.png";
import CAS from "./images/CAS.png";
import COED from "./images/COED.png";
import COE from "./images/COE.png";
import CCS from "./images/CCS.png";
import CBAA from "./images/CBAA1.png";

export const departmentData = {
  ccs: {
    name: "College of Computing Studies",
    acronym: "CCS",
    image: CCS,
    color: "bg-orange",
    summary:
      "Empowering the next generation of technology leaders through innovative computing education and cutting-edge research.",
    description:
      "The College of Computing Studies is dedicated to producing globally competitive IT professionals equipped with technical expertise and ethical values. Our programs blend theoretical knowledge with hands-on experience in software development, systems analysis, and emerging technologies.",
    programs: [
      {
        name: "Bachelor of Science in Computer Science",
        description:
          "Focuses on software development, algorithms, artificial intelligence, and computational theory. Students learn programming languages, data structures, and system design.",
      },
      {
        name: "Bachelor of Science in Information Technology",
        description:
          "Emphasizes practical application of technology in business environments, network administration, web development, and IT project management.",
      },
    ],
    image1:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400",
    image2:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400",
  },
  cbaa: {
    name: "College of Business, Accountancy and Administration",
    acronym: "CBAA",
    image: CBAA,
    color: "bg-yellow",
    summary:
      "Developing future business leaders and finance professionals with strong analytical skills and ethical business practices.",
    description:
      "CBAA prepares students for successful careers in business, finance, and management. Through comprehensive curriculum and real-world applications, we cultivate entrepreneurial mindsets and strategic thinking.",
    programs: [
      {
        name: "Bachelor of Science in Accountancy",
        description:
          "Prepares students for CPA licensure with comprehensive training in financial reporting, auditing, taxation, and management accounting.",
      },
      {
        name: "BS in Business Administration - Financial Management",
        description:
          "Focuses on financial analysis, investment strategies, corporate finance, and risk management for careers in banking and finance.",
      },
      {
        name: "BS in Business Administration - Marketing Management",
        description:
          "Develops expertise in market research, consumer behavior, branding, and digital marketing strategies.",
      },
    ],
    image1:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
    image2:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400",
  },
  coed: {
    name: "College of Education",
    acronym: "COED",
    image: COED,
    color: "bg-info",
    summary:
      "Shaping passionate educators who inspire lifelong learning and contribute to educational excellence.",
    description:
      "The College of Education produces highly qualified teachers committed to transformative education. Our programs combine pedagogical theory with extensive teaching practice to prepare educators for diverse learning environments.",
    programs: [
      {
        name: "Master of Arts in Education - Administration and Supervision",
        description:
          "Advanced program for educational leaders focusing on school management, curriculum development, and educational policy.",
      },
      {
        name: "Master of Arts in Education - Major in English",
        description:
          "Specialization in English language teaching, literature, and linguistics for secondary and tertiary education.",
      },
      {
        name: "Master of Arts in Education - Major in Filipino",
        description:
          "Focuses on Filipino language pedagogy, literature, and cultural studies.",
      },
      {
        name: "Master of Arts in Education - Major in Mathematics",
        description:
          "Advanced mathematics education focusing on innovative teaching methods and curriculum design.",
      },
      {
        name: "Master of Arts in Education - Major in Social Studies",
        description:
          "Develops expertise in teaching history, geography, and social sciences with critical thinking emphasis.",
      },
    ],
    image1:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400",
    image2:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400",
  },
  cas: {
    name: "College of Arts and Science",
    acronym: "CAS",
    image: CAS,
    color: "bg-maroon",
    summary:
      "Fostering critical thinking and understanding of human behavior through comprehensive psychological education.",
    description:
      "The College of Arts and Science offers rigorous programs that explore human behavior, mental processes, and social dynamics. Our psychology program prepares students for careers in counseling, research, and human services.",
    programs: [
      {
        name: "Bachelor of Science in Psychology",
        description:
          "Comprehensive study of human behavior, cognitive processes, developmental psychology, and research methods. Prepares students for careers in counseling, HR, and graduate studies.",
      },
      {
        name: "Master of Arts in Psychology",
        description:
          "Advanced program in clinical psychology, organizational psychology, and psychological research methodologies.",
      },
    ],
    image1:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400",
    image2:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400",
  },
  chas: {
    name: "College of Health and Allied Science",
    acronym: "CHAS",
    image: CHAS,
    color: "bg-green",
    summary:
      "Preparing compassionate healthcare professionals dedicated to promoting health and wellness in communities.",
    description:
      "CHAS is committed to excellence in nursing education, producing competent and caring nurses ready to serve in diverse healthcare settings. Our program emphasizes clinical competence, evidence-based practice, and patient-centered care.",
    programs: [
      {
        name: "Bachelor of Science in Nursing",
        description:
          "Comprehensive nursing program covering anatomy, pharmacology, clinical practice, and patient care. Prepares students for nursing licensure and professional practice in hospitals, clinics, and community health.",
      },
    ],
    image1:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400",
    image2:
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=400",
  },
  coe: {
    name: "College of Engineering",
    acronym: "COE",
    image: COE,
    color: "bg-red",
    summary:
      "Building innovative engineers who design solutions for tomorrow's technological challenges.",
    description:
      "The College of Engineering provides world-class engineering education through state-of-the-art laboratories and industry partnerships. We develop problem-solvers who apply scientific principles to real-world challenges.",
    programs: [
      {
        name: "Bachelor of Science in Computer Engineering",
        description:
          "Integrates computer science and electrical engineering, focusing on hardware-software integration, embedded systems, and computer architecture.",
      },
      {
        name: "Bachelor of Science in Electronics Engineering",
        description:
          "Covers electronic circuits, telecommunications, microelectronics, and signal processing for careers in electronics design and communications.",
      },
      {
        name: "Bachelor of Science in Industrial Engineering",
        description:
          "Focuses on process optimization, operations management, quality control, and systems design for manufacturing and service industries.",
      },
    ],
    image1:
      "https://images.unsplash.com/photo-1581092160607-ee67e78e8f84?w=400",
    image2:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400",
  },
};

function Department() {
  const { department } = useParams();
  const navigate = useNavigate();

  if (!department || !departmentData[department]) {
    navigate("/");
    return null;
  }

  const data = departmentData[department];

  const arrangePrograms = (programs) => {
    const count = programs.length;
    if (count === 3 || count === 5) {
      const arranged = [...programs];
      const lastItem = arranged.pop();
      const middleIndex = Math.floor(count / 2);
      arranged.splice(middleIndex, 0, lastItem);
      return arranged;
    }
    return programs;
  };

  const arrangedPrograms = arrangePrograms(data.programs);

  // Make CBAA page slightly up, CHAS page slightly down
  const mainDivStyle =
    department === "cbaa"
      ? { marginTop: "20px" }
      : department === "chas"
      ? { marginTop: "40px" }
      : {};

  return (
    <div className="min-vh-100 bg-light" style={mainDivStyle}>
      {/* ✅ Colored header section with college logo on the left */}
      <div
        className={`${data.color} text-white d-flex flex-column justify-content-center align-items-center`}
        style={{
          width: "100vw",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          marginTop: "0px",
          height: "250px",
          marginBottom: "40px",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-auto d-flex justify-content-center mb-3 mb-md-0">
              <img
                src={data.image}
                alt={`${data.acronym} Logo`}
                style={{
                  height: "140px",
                  width: "140px",
                  objectFit: "contain",
                  background: "#fff",
                  borderRadius: "50%",
                  padding: "10px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              />
            </div>
            <div className="col text-center text-md-start">
              <h1 className="display-4 fw-bold mb-3 college-title-white">{data.name}</h1>
              <p className="lead">{data.summary}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        {/* ✅ About the College */}
        <div className="row mb-5 align-items-center">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-4">About the College</h2>
            <p className="lead text-muted">{data.description}</p>
          </div>
          <div className="col-lg-4">
            <img
              src={data.image1}
              alt={data.name}
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* ✅ Programs Offered */}
        <h2 className="fw-bold mb-4 text-center">Programs Offered</h2>

        <div
          className="row g-4 mb-5 justify-content-center"
          style={{ rowGap: "2rem" }}
        >
          {arrangedPrograms.map((program, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 d-flex justify-content-center"
            >
              <div
                className="card h-100 shadow-sm border-0 program-card"
                style={{ maxWidth: "420px", width: "100%" }}
              >
                <div className="card-body p-4">
                  <div className={`badge ${data.color} text-white mb-3`}>
                    {program.name.includes("Master")
                      ? "Graduate Program"
                      : "Undergraduate Program"}
                  </div>
                  <h5 className="card-title fw-bold mb-3">{program.name}</h5>
                  <p className="card-text text-muted">{program.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Footer */}
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
                  <button
                    className="btn btn-link text-white text-decoration-none p-0"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </button>
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
      {/* Custom department color styles and college title white and program card transitions */}
      <style>
        {`
          .bg-orange { background-color: #ff8800 !important; }
          .bg-yellow { background-color: #ffd600 !important; }
          .bg-maroon { background-color: #800000 !important; }
          .bg-green { background-color: #388e3c !important; }
          .bg-red { background-color: #d32f2f !important; }
          .college-title-white { color: #fff !important; }

          /* Program card shadow like Under Graduate and Graduate in Home page */
          .program-card {
            transition: transform 0.4s cubic-bezier(.4,2,.6,1), box-shadow 0.4s cubic-bezier(.4,2,.6,1);
            will-change: transform, box-shadow;
            box-shadow: 0 8px 32px 0 rgba(0,0,0,0.13), 0 1.5px 8px 0 rgba(0,0,0,0.09);
          }
          .program-card:hover, .program-card:focus-within {
            transform: translateY(-18px) scale(1.04);
            box-shadow: 0 20px 48px 0 rgba(0,0,0,0.18), 0 1.5px 8px 0 rgba(0,0,0,0.13);
            z-index: 2;
          }
        `}
      </style>
    </div>
  );
}

export default Department;