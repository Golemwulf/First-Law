import React from 'react';
import { Card } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';


import TheBladeItself from './TheBladeItself';

const books = [
  { title: "The Blade Itself", year: 2006 },
  { title: "Before They Are Hanged", year: 2007 },
  { title: "Last Argument of Kings", year: 2008 }
];

function OriginalTrilogy() {
  return (
    <div>
      <h2>Original Trilogy</h2>
      {books.map((book, index) => (
        <Card key={index} className="mb-2">
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>Published: {book.year}</Card.Text>
          </Card.Body>
        </Card>
      ))}
      <div>
       <NavLink to="/the-blade-itself">The Blade Itself</NavLink>
      </div>
    </div>
  );
}

export default OriginalTrilogy;