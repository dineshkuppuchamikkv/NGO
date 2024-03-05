import React from 'react'
import VolunteerCard from './VolunteerCard';

const List = () => {
    

const volunteers = [
    {
      name: 'John Doe',
      role: 'Community Outreach Coordinator',
      joined: 'January 2023',
      projectsContributed: 5,
      image: 'Volunteer1.jpg'
    },
    {
      name: 'Jane Smith',
      role: 'Environmental Campaign Manager',
      joined: 'March 2022',
      projectsContributed: 8,
      image: 'Volunteer1.jpg'
    },
  ];
  return (
    <div>
         {volunteers.map((volunteer, index) => (
          <div className="col-md-4 mb-3" key={index}>
            
            <VolunteerCard volunteer={volunteer} />
          </div>
        ))}
      
    </div>
  )
}

export default List
