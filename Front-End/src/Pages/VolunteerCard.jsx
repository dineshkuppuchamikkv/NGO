import React from 'react';
import './VolunteerCard.css';

const VolunteerCard = ({ volunteer }) => {
  return (
    <div className='container'>
      <div className='column'> {/* Flex row container */}
        <div className="card"> {/* Adding Bootstrap classes for flexbox */}
          <img src={volunteer.image} className="card-img-top" alt={volunteer.name} />
          <div className="card-body">
            <h5 className="card-title">{volunteer.name}</h5>
            <p className="card-text">{volunteer.role}</p>
            <p className="card-text">Joined: {volunteer.joined}</p>
            <p className="card-text">Projects Contributed: {volunteer.projectsContributed}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;
