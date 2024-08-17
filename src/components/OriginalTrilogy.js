import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images
import book1 from '../assets/blade-itself-cover.jpg';
import book2 from '../assets/before-they-are-hanged-cover.jpg';
import book3 from '../assets/Last_argument_of_kings_cover.jpg';
// This component will display the original trilogy of the First Law series based on the object data. This includes links to the individual book pages. The pages for the other trilogies follow the same format
const OriginalTrilogy = () => {
  const books = [
    {
      id: 1,
      title: "The Blade Itself",
      year: 2006,
      image: book1,
      link: "/the-blade-itself"
    },
    {
      id: 2,
      title: "Before They Are Hanged",
      year: 2007,
      image: book2,
      link: "/before-they-are-hanged"
    },
    {
      id: 3,
      title: "Last Argument of Kings",
      year: 2008,
      image: book3,
      link: "/last-argument-of-kings"
    }
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">The First Law Trilogy</h1>
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

export default OriginalTrilogy;