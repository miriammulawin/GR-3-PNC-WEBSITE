import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import logo from "./images/logo.png";
import { departmentData } from "./Department";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);
  const { department } = useParams();

  const currentDept =
    department && departmentData[department]
      ? departmentData[department]
      : null;

  const navLinkStyle = {
    color: "#054328ff",
    fontWeight: "700",
    fontSize: "1.2rem",

    transition: "background-color 0.3s, color 0.3s",
  };

  const navLinkHover = (e) => {
    e.target.style.backgroundColor = "#f4f8f5";
    e.target.style.color = "#21885B";
  };

  const navLinkLeave = (e) => {
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = "#0b5133";
  };

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className="py-2 px-4 shadow-sm bg-white"
        style={{ zIndex: 1001 }}
      >
        <Container fluid>

          <Navbar.Brand
            as={NavLink}
            to="/"
            className="d-flex align-items-center"
          >
            <img
              src={logo}
              alt="PNC Logo"
              className="me-2"
              style={{ height: "60px" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center gap-5">
           
              <Nav.Link
                as={NavLink}
                to="/"
                style={navLinkStyle}
                onMouseEnter={navLinkHover}
                onMouseLeave={navLinkLeave}
              >
                HOME
              </Nav.Link>

           
              <div
                className="nav-link position-relative"
                onMouseEnter={() => setShowDepartmentDropdown(true)}
                onMouseLeave={() => setShowDepartmentDropdown(false)}
                style={{ cursor: "pointer", ...navLinkStyle }}
              >
                DEPARTMENTS ▾
                {showDepartmentDropdown && (
                  <div
                    className="position-absolute bg-white shadow rounded mt-2 py-2"
                    style={{
                      minWidth: "400px",
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
                        style={navLinkStyle}
                        onMouseEnter={navLinkHover}
                        onMouseLeave={navLinkLeave}
                      >
                        {key.toUpperCase()} — {data.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

 
              <Nav.Link
                as={NavLink}
                to="/about"
                style={navLinkStyle}
                onMouseEnter={navLinkHover}
                onMouseLeave={navLinkLeave}
              >
                ABOUT
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/admission"
                style={navLinkStyle}
                onMouseEnter={navLinkHover}
                onMouseLeave={navLinkLeave}
              >
                ADMISSION
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


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
