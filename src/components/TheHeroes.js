import React from 'react';
import { Container, Row, Col, Image, Card, ListGroup } from 'react-bootstrap';

function TheHeroes() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Image 
            src="https://upload.wikimedia.org/wikipedia/en/5/5d/The_Heroes_%28Joe_Abercrombie_novel%29.jpg" 
            alt="The Heroes Book Cover" 
            fluid 
            className="mb-3"
          />
          <Card>
            <Card.Header>Book Details</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Author:</strong> Joe Abercrombie</ListGroup.Item>
              <ListGroup.Item><strong>Published:</strong> January 27, 2011</ListGroup.Item>
              <ListGroup.Item><strong>Series:</strong> First Law World Standalone</ListGroup.Item>
              <ListGroup.Item><strong>Genre:</strong> Dark Fantasy</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={8}>
          <h2>The Heroes</h2>
          <h4 className="text-muted">by Joe Abercrombie</h4>
          <p className="lead">
            A standalone novel focusing on a three-day battle in the North.
          </p>
          <h4>Synopsis</h4>
          <p>
            They say Black Dow's killed more men than winter, and clawed his way to the throne of the North up a hill of skulls. 
            Now he's facing his greatest challenge yet: the chimney of industry is sending war to his door. With the Union army 
            marching north, the fate of an entire war rests on one bloody battle.
          </p>
          <h4>Key Characters</h4>
          <ul>
            <li>Bremer dan Gorst - Disgraced master swordsman</li>
            <li>Curnden Craw - A war-weary veteran</li>
            <li>Caul Shivers - Returns from Best Served Cold</li>
            <li>Prince Calder - A ruthless schemer</li>
          </ul>
          <h4>Themes</h4>
          <ul>
            <li>The futility and brutality of war</li>
            <li>The nature of heroism and cowardice</li>
            <li>The impact of individual actions in large-scale conflicts</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default TheHeroes;