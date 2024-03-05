import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import '../Css/MyCarousel.css';

const MyCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next slide
      setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className=" container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className=" slider d-block w-100"
            src="Image1.jpg"
            alt="Chicago"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slider d-block w-100"
            src="Image3.jpg"
            alt="New york"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" slider d-block w-100"
            src="Image4.jpg"
            alt="New york"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
