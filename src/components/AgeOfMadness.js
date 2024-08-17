import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images
import aLittleHatredCover from '../assets/little-hatred-cover.jpg';
import theTroubleWithPeaceCover from '../assets/trouble-with-peace-cover.jpg';
import theWisdomOfCrowdsCover from '../assets/wisdom-of-the-crowds-cover.jpg';

const AgeOfMadnessTrilogy = () => {
  const books = [
    {
      id: 1,
      title: "A Little Hatred",
      year: 2019,
      image: aLittleHatredCover,
      link: "/a-little-hatred"
    },
    {
      id: 2,
      title: "The Trouble with Peace",
      year: 2020,
      image: theTroubleWithPeaceCover,
      link: "/the-trouble-with-peace"
    },
    {
      id: 3,
      title: "The Wisdom of Crowds",
      year: 2021,
      image: theWisdomOfCrowdsCover,
      link: "/the-wisdom-of-crowds"
    }
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">The Age of Madness Trilogy</h1>
      <Row>
        {books.map((book) => (
          <Col key={book.id} md={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={book.image} alt={`${book.title} cover`} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Published: {book.year}</Card.Text>
                <Button 
                  as={Link} 
                  to={book.link} 
                  variant="primary" 
                  className="mt-auto"
                >
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AgeOfMadnessTrilogy;