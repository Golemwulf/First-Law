import React from 'react';
import { Container, Row, Col, Image, Card, ListGroup } from 'react-bootstrap';

function TheBladeItself() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Image 
            src="https://upload.wikimedia.org/wikipedia/en/8/81/The_Blade_Itself.jpg" 
            alt="The Blade Itself Book Cover" 
            fluid 
            className="mb-3"
          />
          <Card>
            <Card.Header>Book Details</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Author:</strong> Joe Abercrombie</ListGroup.Item>
              <ListGroup.Item><strong>Published:</strong> May 4, 2006</ListGroup.Item>
              <ListGroup.Item><strong>Series:</strong> The First Law #1</ListGroup.Item>
              <ListGroup.Item><strong>Genre:</strong> Dark Fantasy</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={8}>
          <h2>The Blade Itself</h2>
          <h4 className="text-muted">by Joe Abercrombie</h4>
          <p className="lead">
            "The Blade Itself" is the first book of The First Law Trilogy, introducing readers to a gritty, 
            dark fantasy world filled with complex characters and moral ambiguity.
          </p>
          <h4>Synopsis</h4>
          <p>
            Logen Ninefingers, infamous barbarian, has finally run out of luck. Caught in one feud too many, 
            he's on the verge of becoming a dead barbarian. Meanwhile, Superior Glokta, once a dashing officer 
            before being crippled by torture, now serves as an inquisitor, rooting out treason in the Aduan 
            government. And Jezal dan Luthar, a lazy, self-centered nobleman, dreams of glory in the fencing 
            circle. As their fates intertwine, they find themselves caught in the middle of a vast conspiracy 
            that threatens to shake the foundations of their world.
          </p>
          <h4>Main Characters</h4>
          <ul>
            <li><strong>Logen Ninefingers:</strong> A notorious barbarian warrior from the North</li>
            <li><strong>Sand dan Glokta:</strong> A crippled inquisitor and former war hero</li>
            <li><strong>Jezal dan Luthar:</strong> A self-centered young nobleman and fencer</li>
            <li><strong>Bayaz:</strong> A powerful wizard claiming to be the First of the Magi</li>
          </ul>
          <h4>Themes</h4>
          <ul>
            <li>The nature of power and its corrupting influence</li>
            <li>The blurred lines between good and evil</li>
            <li>The consequences of violence and war</li>
            <li>Personal growth and self-discovery</li>
          </ul>
          <h4>Critical Reception</h4>
          <p>
            "The Blade Itself" received widespread acclaim for its gritty realism, complex characters, 
            and subversion of traditional fantasy tropes. It established Joe Abercrombie as a significant 
            voice in the dark fantasy subgenre.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default TheBladeItself;