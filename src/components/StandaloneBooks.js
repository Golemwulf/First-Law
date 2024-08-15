import React from 'react';
import { Card } from 'react-bootstrap';

const books = [
  { title: "Best Served Cold", year: 2009 },
  { title: "The Heroes", year: 2011 },
  { title: "Red Country", year: 2012 }
];

function StandaloneBooks() {
  return (
    <div>
      <h2>Standalone Books</h2>
      {books.map((book, index) => (
        <Card key={index} className="mb-2">
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>Published: {book.year}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default StandaloneBooks;