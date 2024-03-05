import React from 'react';
import '../Css/Project1.css';

const Projects = () => {
  return (
    <div className="container project">
      <div className="card my-5 shadow">
        <div className="card-body">
          <h2 className="card-title text-center text-primary mb-4">Our Projects</h2>
          <h1 className="card-subtitle text-center">Project - Anbalayam Special School</h1>
          <p className="card-text text-center">
            Anbalayam Special School We are thrilled to announce the
            commencement of our latest project, the Anbalayam Special School,
            dedicated to providing education and care for children with special
            needs. This initiative is made possible through the generous support
            and funding from Bootstrap. At Anbalayam Special School, our mission
            is to create an inclusive learning environment where every child,
            regardless of their abilities, can thrive and reach their full
            potential. Through personalized education plans, specialized
            therapies, and compassionate care, we aim to empower children with
            special needs to develop essential life skills, foster independence,
            and build self-confidence. With Bootstrap's partnership, we have the
            opportunity to expand our facilities, enhance our educational
            resources, and strengthen our support services for students with
            diverse learning needs. Together, we can make a meaningful
            difference in the lives of these children and their families,
            providing them with the tools and opportunities they need to
            succeed.
          </p>
          {/* Video Embed */}
          <div className="embed-responsive embed-responsive-16by9 text-center">
            <video
              className="embed-responsive-item w-75 h-lg-75 h-sm-75 w-sm-100"
              src="video1.mp4"
              title="Video"
              controls="true" // Use controls="true" for JSX syntax
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
