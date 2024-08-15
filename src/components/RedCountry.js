import React from 'react';
import { Container, Row, Col, Image, Card, ListGroup } from 'react-bootstrap';

function RedCountry() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Image 
            src="https://upload.wikimedia.org/wikipedia/en/2/2e/Red_Country_%28Joe_Abercrombie_novel%29.jpg" 
            alt="Red Country Book Cover" 
            fluid 
            className="mb-3"
          />
          <Card>
            <Card.Header>Book Details</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Author:</strong> Joe Abercrombie</ListGroup.Item>
              <ListGroup.Item><strong>Published:</strong> October 18, 2012</ListGroup.Item>
              <ListGroup.Item><strong>Series:</strong> First Law World Standalone</ListGroup.Item>
              <ListGroup.Item><strong>Genre:</strong> Dark Fantasy/Western</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={8}>
          <h2>Red Country</h2>
          <h4 className="text-muted">by Joe Abercrombie</h4>
          <p className="lead">
            A standalone novel blending dark fantasy with Western themes.
          </p>
          <h4>Synopsis</h4>
          <p>
            Shy South's past catches up with her when her younger brother and sister are kidnapped. She sets off to 
            rescue them, accompanied by her cowardly old step-father Lamb. Their journey will take them across the 
            lawless Far Country, where the rule of law has been abandoned, and only the brave or desperate dare to tread.
          </p>
          <h4>Key Characters</h4>
          <ul>
            <li>Shy South - A determined young woman with a dark past</li>
            <li>Lamb - Shy's step-father, hiding a violent history</li>
            <li>Temple - A cowardly lawyer seeking redemption</li>
            <li>Nicomo Cosca - The infamous mercenary captain returns</li>
          </ul>
          <h4>Themes</h4>
          <ul>
            <li>The impact of civilization on the frontier</li>
            <li>Redemption and the weight of past actions</li>
            <li>The blurred lines between savagery and civilization</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default RedCountry;