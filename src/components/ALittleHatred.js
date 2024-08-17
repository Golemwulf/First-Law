import React from 'react';
import { Container, Row, Col, Image, Card, ListGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import cover from '../assets/little-hatred-cover.jpg';

function ALittleHatred() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Image 
            src={cover}
            alt="A Little Hatred Book Cover" 
            fluid 
            className="mb-3"
          />
          <Card >
            <Card.Header className='new-amsterdam-regular'>Book Details</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item className='new-amsterdam-regular'><strong>Author:</strong> Joe Abercrombie</ListGroup.Item>
              <ListGroup.Item className='new-amsterdam-regular'><strong>Published:</strong> September 17, 2019</ListGroup.Item>
              <ListGroup.Item className='new-amsterdam-regular'><strong>Series:</strong> The Age of Madness #1</ListGroup.Item>
              <ListGroup.Item className='new-amsterdam-regular'><strong>Genre:</strong> Dark Fantasy</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={8} className='new-amsterdam-regular'>
          <h2>A Little Hatred</h2>
          <h4 className="text-muted">by Joe Abercrombie</h4>
          <p className="lead">
            The first book in The Age of Madness trilogy, set in the world of the First Law.
          </p>
          <h4>Synopsis</h4>
          <p>
            The chimneys of industry rise over Adua and the world seethes with new opportunities. But old scores run deep as ever. 
            On the blood-soaked borders of Angland, Leo dan Brock struggles to win fame on the battlefield, and defeat the marauding armies of Stour Nightfall. 
            He hopes for help from the crown. But King Jezal's son, the feckless Prince Orso, is a man who specializes in disappointments.
          </p>
          <h4>Key Characters</h4>
          <ul>
            <li>Rikke - A young Northwoman with the Long Eye</li>
            <li>Savine dan Glokta - Daughter of Sand dan Glokta, an ambitious investor</li>
            <li>Leo dan Brock - A young nobleman seeking glory in battle</li>
            <li>Prince Orso - The crown prince of the Union</li>
          </ul>
          <h4>Themes</h4>
          <ul>
            <li>The impact of industrial revolution on a fantasy world</li>
            <li>The struggle between tradition and progress</li>
            <li>The cyclical nature of history and conflict</li>
          </ul>
          <Link to = '/age-of-madness'>Back to Age of Madness Trilogy</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default ALittleHatred;