import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import logo from "./images/logo.png";
import { departmentData } from "./Department";

function Header() {
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);
  const { department } = useParams();

  const currentDept =
    department && departmentData[department]
      ? departmentData[department]
      : null;

  return (
    <>
      <div className="nav navbar fixed-top py-2 px-5" style={{ zIndex: 1001 }}>
        <img src={logo} alt="PNC Logo" />

        <div className="nav-links align-items-center d-flex gap-4">
          <NavLink className="navbar-brand" to="/">
            HOME
          </NavLink>

          {/* DEPARTMENTS (Styled Like Other Nav Links) */}
          <div
            className="navbar-brand position-relative"
            onMouseEnter={() => setShowDepartmentDropdown(true)}
            onMouseLeave={() => setShowDepartmentDropdown(false)}
            style={{ cursor: "pointer", color: "#0b5133", fontWeight: "bold" }}
          >
            DEPARTMENTS ▾
            {showDepartmentDropdown && (
              <div
                className="position-absolute bg-white shadow rounded mt-2 py-2"
                style={{
                  minWidth: "280px",
                  zIndex: 1000,
                  left: "50%",
                  transform: "translateX(-50%)",
                  border: "1px solid #21885b22",
                }}
              >
                {Object.entries(departmentData).map(([key, data]) => (
                  <NavLink
                    key={key}
                    to={`/${key}`}
                    className="d-block text-decoration-none px-4 py-2"
                    style={{
                      color: "#0b5133",
                      fontWeight: "500",
                      fontSize: "15px",
                      transition: "background-color 0.3s, color 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#f4f8f5";
                      e.target.style.color = "#21885B";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#0b5133";
                    }}
                  >
                    {key.toUpperCase()} — {data.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink className="navbar-brand" to="/mission-vision">
            MISSION & VISION
          </NavLink>
          <NavLink className="navbar-brand" to="/gallery">
            GALLERY
          </NavLink>
          <NavLink className="navbar-brand" to="/about">
            ABOUT
          </NavLink>
          <NavLink className="navbar-brand" to="/contact">
            CONTACT
          </NavLink>
        </div>
      </div>

      {/* Department Banner - Shows below header when on a department page */}
      {currentDept && (
        <div
          className={`${currentDept.color} text-white position-fixed w-100`}
          style={{
            top: "80px",
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: "2rem 0",
          }}
        >
          <div className="container-fluid px-5">
            <h1 className="display-5 fw-bold mb-2">{currentDept.name}</h1>
            <p className="lead mb-0">{currentDept.summary}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
