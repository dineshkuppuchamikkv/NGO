
import React from 'react';
import { Card, CardImg,Col,Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const images = [
  {
    src: 'Gallery1.jpg',
    alt: 'Description for image 1',
  },
  {
    src: 'Gallery2.jpg',
    alt: 'Description for image 2',
  },
  {
    src: 'Gallery3.jpg',
    alt: 'Description for image 2',
  },
  {
    src: 'Gallery4.jpg',
    alt: 'Description for image 2',
  },
  {
    src: 'Image1.jpg',
    alt: 'Description for image 2',
  },
  {
    src: 'Image3.jpg',
    alt: 'Description for image 2',
  },
  {
    src: 'Image4.jpg',
    alt: 'Description for image 2',
  }
];


const ImageGallery = () => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {images.map((image, index) => (
        <Col key={index}>
          <Card className="h-100 shadow-sm rounded">
            <CardImg variant="top" src={image.src} alt={image.alt} />
            <Card.Body>
              <Card.Text>{image.alt}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};


export default ImageGallery;

