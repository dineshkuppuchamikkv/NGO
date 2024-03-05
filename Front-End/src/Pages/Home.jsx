import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/Home.css";
import Contact from "./Contact";
import Projects from "./Projects";
import MissViss from "./MissViss";
import MyCarousel from "./MyCarousel";
import Footer from "./Footer";

const Home = () => {
 
  return (
    <div>

      <MyCarousel />
      <div>
        <div className="container shadow">
          <div className="card1 my-5">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Welcome to Our NGO</h2>
              <p className="card-text text-center">
                Karur Nandhavanam is a community-driven initiative located in
                Karur, a city in the Indian state of Tamil Nadu. Nandhavanam,
                which translates to "Garden of Joy" in Tamil, is a project aimed
                at creating green spaces within urban areas for environmental
                conservation, community engagement, and sustainable development.
              </p>
            </div>
          </div>

          {/* Mission and Vision Section */}
          <MissViss />
          {/* Projects Section */}
          <Projects />
          {/* Contact Section */}
          <Contact />
          <Footer/>
  
           
         
        </div>
      </div>
    </div>
  );
};

export default Home;
