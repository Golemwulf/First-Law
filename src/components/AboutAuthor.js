import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function AboutAuthor() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Image 
          // need to find a photo of Joe Abercrombie
            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Joe_Abercrombie_2019.jpg" 
            alt="Joe Abercrombie" 
            fluid 
            rounded
          />
        </Col>
        <Col md={8}>
          <h2>Joe Abercrombie</h2>
          <p>
            Joe Abercrombie is a British fantasy writer and film editor. He is the author of 
            The First Law trilogy and several other acclaimed fantasy novels.
          </p>
          <h4>Biography</h4>
          <p>
            Born: December 31, 1974 in Lancaster, England<br />
            Occupation: Novelist, film editor
          </p>
          <h4>Career Highlights</h4>
          <ul>
            <li>Published his first novel, "The Blade Itself", in 2006</li>
            <li>Completed The First Law trilogy in 2008</li>
            <li>Released several standalone novels set in the same world</li>
            <li>Began the Age of Madness trilogy in 2019</li>
            <li>Known for his "grimdark" style of fantasy writing</li>
          </ul>
          <h4>Writing Style</h4>
          <p>
            Abercrombie is known for his gritty, realistic approach to fantasy. His works often 
            subvert traditional fantasy tropes and feature morally ambiguous characters. His 
            writing is characterized by dark humor, vivid action scenes, and complex political intrigue.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutAuthor;