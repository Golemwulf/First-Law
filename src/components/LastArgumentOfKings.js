import React from 'react';
import { Container, Row, Col, Image, Card, ListGroup } from 'react-bootstrap';

function LastArgumentOfKings() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Image 
            src="https://upload.wikimedia.org/wikipedia/en/c/ce/LastArgumentOfKings%28USCover%29.jpg" 
            alt="Last Argument of Kings Book Cover" 
            fluid 
            className="mb-3"
          />
          <Card>
            <Card.Header>Book Details</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Author:</strong> Joe Abercrombie</ListGroup.Item>
              <ListGroup.Item><strong>Published:</strong> March 20, 2008</ListGroup.Item>
              <ListGroup.Item><strong>Series:</strong> The First Law #3</ListGroup.Item>
              <ListGroup.Item><strong>Genre:</strong> Dark Fantasy</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={8}>
          <h2>Last Argument of Kings</h2>
          <h4 className="text-muted">by Joe Abercrombie</h4>
          <p className="lead">
            "Last Argument of Kings" is the thrilling conclusion to The First Law Trilogy, bringing the 
            complex web of politics, war, and magic to a stunning climax.
          </p>
          <h4>Synopsis</h4>
          <p>
            The end is coming. Logen Ninefingers might only have one more fight in him – but it's going to 
            be a big one. Battle rages across the North, the King of the Northmen still stands firm, and 
            there's only one man who can stop him. His oldest friend, and his oldest enemy: it's time for 
            the Bloody-Nine to come home. With too many masters and too little time, Superior Glokta is 
            fighting a different kind of war. A secret struggle in which no one is safe, and no one can be 
            trusted. As his trials with the Inquisition grow ever more urgent, he learns that the world is 
            more corrupt than he could have ever dreamed. And who knows who the real traitors are? 
            King Jezal dan Luthar, the once-feckless playboy, finds he likes being King. He soon learns, 
            though, that the throne isn't always so easy to hold onto. Meanwhile, the First of the Magi, 
            Bayaz, is manipulating events from behind the scenes. But with the Gurkish army drawing ever closer, 
            even the mighty Bayaz's plan might not be enough to save the Union.
          </p>
          <h4>Key Plot Points</h4>
          <ul>
            <li>The Union's war against the Northmen reaches its climax</li>
            <li>Glokta's investigations lead to shocking revelations</li>
            <li>Jezal's struggles with kingship and the true nature of power</li>
            <li>Logen's return to the North and confrontation with his past</li>
            <li>Bayaz's grand schemes come to fruition</li>
          </ul>
          <h4>Themes</h4>
          <ul>
            <li>The cyclical nature of violence and war</li>
            <li>The corrupting influence of power</li>
            <li>The consequences of one's actions and past decisions</li>
            <li>The blurred lines between heroism and villainy</li>
            <li>The role of fate versus free will</li>
          </ul>
          <h4>Critical Reception</h4>
          <p>
            "Last Argument of Kings" was widely praised for its satisfying yet subversive conclusion to the 
            trilogy. Critics lauded Abercrombie's ability to challenge fantasy conventions, his intricate 
            plotting, and the depth of his character development. The book solidified Abercrombie's reputation 
            as a leading voice in modern fantasy literature.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default LastArgumentOfKings;