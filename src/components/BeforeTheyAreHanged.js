import React from 'react';
import { Container, Row, Col, Image, Card, ListGroup } from 'react-bootstrap';

function BeforeTheyAreHanged() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Image 
            src="https://upload.wikimedia.org/wikipedia/en/4/4d/Before_They_Are_Hanged.jpg" 
            alt="Before They Are Hanged Book Cover" 
            fluid 
            className="mb-3"
          />
          <Card>
            <Card.Header>Book Details</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Author:</strong> Joe Abercrombie</ListGroup.Item>
              <ListGroup.Item><strong>Published:</strong> March 15, 2007</ListGroup.Item>
              <ListGroup.Item><strong>Series:</strong> The First Law #2</ListGroup.Item>
              <ListGroup.Item><strong>Genre:</strong> Dark Fantasy</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={8}>
          <h2>Before They Are Hanged</h2>
          <h4 className="text-muted">by Joe Abercrombie</h4>
          <p className="lead">
            "Before They Are Hanged" is the second book of The First Law Trilogy, continuing the gritty tale 
            of war, politics, and magic in a world where heroes and villains are not easily distinguished.
          </p>
          <h4>Synopsis</h4>
          <p>
            Superior Glokta has a problem. How do you defend a city surrounded by enemies and riddled with 
            traitors, when your allies can by no means be trusted, and your predecessor vanished without a trace? 
            It's enough to make a torturer want to run – if he could even walk without a stick. Northmen have 
            spilled over the border of Angland and are spreading fire and death across the frozen country. 
            Crown Prince Ladisla is poised to drive them back and win undying glory. There is only one problem – 
            he commands the worst-armed, worst-trained, worst-led army in the world. And Bayaz, the First of 
            the Magi, is leading a party of bold adventurers on a perilous mission through the ruins of the past. 
            The most hated woman in the South, the most feared man in the North, and the most selfish boy in the 
            Union make a strange alliance, but a deadly one. They might even stand a chance of saving mankind 
            from the Eaters – if they didn't hate each other quite so much.
          </p>
          <h4>Key Plot Points</h4>
          <ul>
            <li>Glokta's struggle to defend Dagoska against the Gurkish Empire</li>
            <li>The journey of Bayaz, Logen, Jezal, and others to the Edge of the World</li>
            <li>West's campaign in the North against Bethod's forces</li>
            <li>Character development and revelations about the world's history</li>
          </ul>
          <h4>Themes</h4>
          <ul>
            <li>The futility of war and violence</li>
            <li>The complexities of leadership and responsibility</li>
            <li>The blurring of lines between good and evil</li>
            <li>The impact of past decisions on the present</li>
          </ul>
          <h4>Critical Reception</h4>
          <p>
            "Before They Are Hanged" was praised for deepening the world and characters established in 
            the first book. Critics noted Abercrombie's skill in subverting fantasy tropes and his unflinching 
            portrayal of the brutal realities of war and politics.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default BeforeTheyAreHanged;