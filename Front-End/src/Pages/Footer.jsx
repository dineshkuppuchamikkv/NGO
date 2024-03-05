import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>
              Karur Nandhavanam is a community-driven initiative located in
              Karur, a city in the Indian state of Tamil Nadu. Nandhavanam,
              which translates to "Garden of Joy" in Tamil, is a project aimed
              at creating green spaces within urban areas for environmental
              conservation, community engagement, and sustainable development.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Home</a>
              </li>
              <li>
                <a href="#!">About</a>
              </li>
              <li>
                <a href="#!">Projects</a>
              </li>
              <li>
                <a href="#!">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Address:Mkce,Thalavaplayam,Karur</li>
              <li>Email: karurnandhavanam@gmail.com</li>
              <li>Phone:9750782209</li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} Karur Nandhavanam. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
