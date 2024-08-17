import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Author from '../assets/Joe-Abercrombie.jpg';


function AboutAuthor() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Image src={Author}
            alt="Joe Abercrombie" 
            fluid 
            rounded
          />
        </Col>
        {/* I found this font on google fonts. I thought it looked nice and fitting for the series' tone */}
        <Col md={8} className='new-amsterdam-regular'>
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