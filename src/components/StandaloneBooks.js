import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images
import bestServedColdCover from '../assets/best-served-cold-cover.jpg';
import theHeroesCover from '../assets/heroes-cover.jpg';
import redCountryCover from '../assets/red-country-cover.jpg';

const StandaloneBooks = () => {
  const books = [
    {
      id: 1,
      title: "Best Served Cold",
      year: 2009,
      image: bestServedColdCover,
      link: "/best-served-cold"
    },
    {
      id: 2,
      title: "The Heroes",
      year: 2011,
      image: theHeroesCover,
      link: "/the-heroes"
    },
    {
      id: 3,
      title: "Red Country",
      year: 2012,
      image: redCountryCover,
      link: "/red-country"
    },
    
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Standalone Books in the First Law World</h1>
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

export default StandaloneBooks;