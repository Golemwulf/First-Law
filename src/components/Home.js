import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import backgroundImage from '../assets/Heroes_Cover-wrap.jpg';

const HomePage = () => {
  // I created a background image for the home page to make it more visually appealing. I also used inline styles to apply the background image and style the content.
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  };

  const contentStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: '3rem',
    borderRadius: '10px',
  };

  return (
    <div style={backgroundStyle}>
      {/* <Container> */}
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div style={contentStyle}>
              <h1 className="text-center mb-4">Welcome to The First Law Series</h1>
              <p className="lead">
                Enter the gritty and immersive world of Joe Abercrombie's First Law series. 
                This epic fantasy saga subverts traditional tropes, offering complex characters, 
                morally ambiguous plots, and a dash of dark humor. From the original trilogy to 
                the standalone novels and the Age of Madness sequence, prepare yourself for a 
                journey through a world where heroes are scarce, magic is fading, and the line 
                between good and evil is never clear. Brace yourself for brutal battles, 
                political intrigue, and unforgettable characters in this masterpiece of modern fantasy.
              </p>
            </div>
          </Col>
        </Row>
      {/* </Container> */}
    </div>
  );
};

export default HomePage;