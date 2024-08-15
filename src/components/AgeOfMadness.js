import React from 'react';
import { Card } from 'react-bootstrap';

const books = [
  { title: "A Little Hatred", year: 2019 },
  { title: "The Trouble With Peace", year: 2020 },
  { title: "The Wisdom of Crowds", year: 2021 }
];

function AgeOfMadness() {
  return (
    <div>
      <h2>Age of Madness Trilogy</h2>
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

export default AgeOfMadness;