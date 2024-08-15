import React from 'react';
import { Container, Row, Col, Image, Card, ListGroup } from 'react-bootstrap';

function TheWisdomOfCrowds() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Image 
            src="https://upload.wikimedia.org/wikipedia/en/8/8d/The_Wisdom_of_Crowds.jpg" 
            alt="The Wisdom of Crowds Book Cover" 
            fluid 
            className="mb-3"
          />
          <Card>
            <Card.Header>Book Details</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Author:</strong> Joe Abercrombie</ListGroup.Item>
              <ListGroup.Item><strong>Published:</strong> September 14, 2021</ListGroup.Item>
              <ListGroup.Item><strong>Series:</strong> The Age of Madness #3</ListGroup.Item>
              <ListGroup.Item><strong>Genre:</strong> Dark Fantasy</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={8}>
          <h2>The Wisdom of Crowds</h2>
          <h4 className="text-muted">by Joe Abercrombie</h4>
          <p className="lead">
            The final book in The Age of Madness trilogy, bringing the series to a dramatic conclusion.
          </p>
          <h4>Synopsis</h4>
          <p>
            Chaos. Fury. Destruction. The Great Change is upon us... 
            Some say that to change the world you must first burn it down. Now that belief will be tested in the crucible of revolution: 
            the Breakers and Burners have seized the levers of power, the smoke of riots has replaced the smog of industry, 
            and all must submit to the wisdom of crowds. With nothing left to lose, Citizen Brock is determined to become a new hero for the new age, 
            while Citizeness Savine must turn her talents from profit to survival before she can claw her way to redemption. Orso will find that when the world is turned upside down, 
            no one is lower than a monarch. And in the bloody North, Rikke and her fragile Protectorate are running out of allies... 
            while Black Calder gathers his forces and plots his vengeance.
          </p>
          <h4>Key Characters</h4>
          <ul>
            <li>Rikke - Leading the Protectorate in the North</li>
            <li>Savine dan Glokta - Adapting to a world turned upside down</li>
            <li>Leo dan Brock - Now known as Citizen Brock</li>
            <li>Orso - The deposed king</li>
          </ul>
          <h4>Themes</h4>
          <ul>
            <li>The consequences of revolution</li>
            <li>The wisdom (or folly) of crowds</li>
            <li>The cyclical nature of power and oppression</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default TheWisdomOfCrowds;