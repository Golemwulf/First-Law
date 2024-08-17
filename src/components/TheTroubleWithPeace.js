import React from 'react';
import { Container, Row, Col, Image, Card, ListGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import cover from '../assets/trouble-with-peace-cover.jpg';

function TheTroubleWithPeace() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Image 
            src={cover} 
            alt="The Trouble With Peace Book Cover" 
            fluid 
            className="mb-3"
          />
          <Card>
            <Card.Header>Book Details</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Author:</strong> Joe Abercrombie</ListGroup.Item>
              <ListGroup.Item><strong>Published:</strong> September 15, 2020</ListGroup.Item>
              <ListGroup.Item><strong>Series:</strong> The Age of Madness #2</ListGroup.Item>
              <ListGroup.Item><strong>Genre:</strong> Dark Fantasy</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={8} className='new-amsterdam-regular'>
          <h2>The Trouble With Peace</h2>
          <h4 className="text-muted">by Joe Abercrombie</h4>
          <p className="lead">
            The second book in The Age of Madness trilogy, continuing the story in a world on the cusp of industrial revolution.
          </p>
          <h4>Synopsis</h4>
          <p>
            Conspiracy. Betrayal. Rebellion. Peace is just another kind of battlefield... 
            Savine dan Glokta, once Adua's most powerful investor, finds her judgement, fortune and reputation in tatters. 
            But she still has all her ambitions, and no scruple will be permitted to stand in her way. 
            For heroes like Leo dan Brock and Stour Nightfall, only happy with swords drawn, peace is an ordeal to end as soon as possible. 
            But grievances must be nursed, power seized, and allies gathered first, while Rikke must master the power of the Long Eye... before it kills her.
          </p>
          <h4>Key Characters</h4>
          <ul>
            <li>Rikke - Struggling to control her power of the Long Eye</li>
            <li>Savine dan Glokta - Rebuilding her power and influence</li>
            <li>Leo dan Brock - Adjusting to peace and political maneuvering</li>
            <li>Orso - The new King of the Union</li>
          </ul>
          <h4>Themes</h4>
          <ul>
            <li>The challenges of maintaining peace</li>
            <li>The price of ambition and power</li>
            <li>The conflict between individual desires and societal needs</li>
          </ul>
          <Link to = '/age-of-madness'>Back to Age of Madness Trilogy</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default TheTroubleWithPeace;