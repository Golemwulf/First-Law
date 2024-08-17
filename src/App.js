import React from 'react';
// The imports below allow me to use React Router in my app to create a single-page application
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { NIL as NIL_UUID } from 'uuid';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import OriginalTrilogy from './components/OriginalTrilogy';
import StandaloneBooks from './components/StandaloneBooks';
import AgeOfMadness from './components/AgeOfMadness';
import MessageBoard from './components/MessageBoard';
import Home from './components/Home';
import AboutAuthor from './components/AboutAuthor';
import TheBladeItself from './components/TheBladeItself';
import BeforeTheyAreHanged from './components/BeforeTheyAreHanged';
import LastArgumentOfKings from './components/LastArgumentOfKings';
import BestServedCold from './components/BestServedCold';
import TheHeroes from './components/TheHeroes';
import RedCountry from './components/RedCountry';
import ALittleHatred from './components/ALittleHatred';
import TheTroubleWithPeace from './components/TheTroubleWithPeace';
import TheWisdomOfCrowds from './components/TheWisdomOfCrowds';

function App() {
  return (
    <Router>
      {/* Below is the nav bar for my site. */}
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg" className='bodoni'>
          <Container>
            <Navbar.Brand as={Link} to="/">First Law Series</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/about-author">About Joe Abercrombie</Nav.Link>
              <Nav.Link as={Link} to="/original">Original Trilogy</Nav.Link>
              <Nav.Link as={Link} to="/standalone">Standalone Books</Nav.Link>
              <Nav.Link as={Link} to="/age-of-madness">Age of Madness Trilogy</Nav.Link>

              <Nav.Link as={Link} to="/message-board">Message Board</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
        <Container className="mt-4">
          <Routes>
            {/* These are the different pages that I want the be able to link to. This allows me to set up links in other components. */}
            <Route path="/" element={<Home />} />
            <Route path="/about-author" element={<AboutAuthor/>} />
            <Route path="/original" element={<OriginalTrilogy />} />
            <Route path="/standalone" element={<StandaloneBooks />} />
            <Route path="/age-of-madness" element={<AgeOfMadness />} />
            <Route path="/message-board" element={<MessageBoard />} />
            <Route path="/the-blade-itself" element={<TheBladeItself />} />
            <Route path="/before-they-are-hanged" element={<BeforeTheyAreHanged />} />
            <Route path="/last-argument-of-kings" element={<LastArgumentOfKings />} />
            <Route path="/best-served-cold" element={<BestServedCold />} />
            <Route path="/the-heroes" element={<TheHeroes />} />
            <Route path="/red-country" element={<RedCountry />} />
            <Route path="/a-little-hatred" element={<ALittleHatred/>} />
            <Route path="/the-trouble-with-peace" element={<TheTroubleWithPeace/>} />
            <Route path="/the-wisdom-of-crowds" element={<TheWisdomOfCrowds/>} />
            </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;