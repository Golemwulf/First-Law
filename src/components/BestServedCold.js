import React from 'react';
import { Container, Row, Col, Image, Card, ListGroup } from 'react-bootstrap';

function BestServedCold() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Image 
            src="https://upload.wikimedia.org/wikipedia/en/7/79/Best_Served_Cold_%28Joe_Abercrombie_novel%29.jpg" 
            alt="Best Served Cold Book Cover" 
            fluid 
            className="mb-3"
          />
          <Card>
            <Card.Header>Book Details</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Author:</strong> Joe Abercrombie</ListGroup.Item>
              <ListGroup.Item><strong>Published:</strong> June 18, 2009</ListGroup.Item>
              <ListGroup.Item><strong>Series:</strong> First Law World Standalone</ListGroup.Item>
              <ListGroup.Item><strong>Genre:</strong> Dark Fantasy</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={8}>
          <h2>Best Served Cold</h2>
          <h4 className="text-muted">by Joe Abercrombie</h4>
          <p className="lead">
            A tale of revenge set in the world of the First Law trilogy.
          </p>
          <h4>Synopsis</h4>
          <p>
            Monza Murcatto, the Snake of Talins, is the most feared and famous mercenary in Duke Orso's employ. 
            Her victories have made her popular -- a shade too popular for her employer's taste. Betrayed, thrown 
            down a mountain, and left for dead, Murcatto's reward is a broken body and a burning hunger for vengeance. 
            Whatever the cost, seven men must die.
          </p>
          <h4>Key Characters</h4>
          <ul>
            <li>Monza Murcatto - The vengeful protagonist</li>
            <li>Caul Shivers - A Northman seeking a better life</li>
            <li>Nicomo Cosca - A notorious mercenary captain</li>
            <li>Friendly - An ex-convict obsessed with numbers</li>
          </ul>
          <h4>Themes</h4>
          <ul>
            <li>The destructive nature of revenge</li>
            <li>The cost of violence on the human psyche</li>
            <li>The cyclical nature of betrayal and retribution</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default BestServedCold;