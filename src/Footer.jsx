import p from "./images/pamantasan.png";
function footer() {
  return (
    <footer className="footer text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-md-4 mb-4 text-center text-md-start">
            <img
              src={p}
              alt="University Logo"
              style={{ height: "65px" }}
              className="mb-3"
            />
            <h5 className="fw-bold mb-2">University of Cabuyao</h5>
            <p className="text-secondary small">
              Dangal ng Bayan — Pride and honor of the nation.
            </p>
          </div>

          <div className="col-md-4 mb-4 text-center text-md-start">
            <h6 className="fw-bold mb-3 text-uppercase">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4 text-center text-md-start">
            <h6 className="fw-bold mb-3 text-uppercase">Contact Information</h6>
            <ul className="list-unstyled text-secondary small">
              <li>Katapatan Subdivision, Banay Banay</li>
              <li>Cabuyao City, Laguna 4025</li>
              <li>Phone: (049) 531-1858</li>
              <li>Email: info@pamantasan.edu.ph</li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-secondary small mb-0">
            © {new Date().getFullYear()} University of Cabuyao. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default footer;
