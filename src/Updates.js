import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Updates.css'; // Import the Updates-specific CSS
import serverLogo from './images/WOSK_Logo_Circle.png'; // Import your server logo

const Updates = () => {
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [selectedUpdate, setSelectedUpdate] = useState(null); // Track the selected update

  // Handle navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.title = 'Updates | World of Starknight';
  }, []);


  // Example updates data
  const updates = [
    {
      title: "Wiki is Live!",
      date: 'February 9, 2025',
      description: "We’re excited to announce the official launch of the World of Starknight Wiki!",
    },
    {
      title: "WOSK has been updated to version 1.21.4",
      date: 'October 5, 2023',
      description: "We have optimized server performance to reduce lag and improve your gaming experience.",
    },
    {
      title: "Happy Late New years!",
      date: 'January 3, 2025',
      description: "2025 officially marks the 12th anniversary of The World of Starknight! Thank you to everyone who has joined us for the ride, and a special thank you to those who have been here since the start! Hoping for another great year with everyone, and expect new and exciting things very soon! In celebration of the new year I'd like to show off 12 years of our progress in Creekan to some of you it may not even look like the same city anymore but I can assure you its been the exact same location all this time!",
    },
  ];

  // Handle card click
  const handleCardClick = (update) => {
    setSelectedUpdate(update); // Set the selected update
  };

  // Close modal
  const closeModal = () => {
    setSelectedUpdate(null); // Clear the selected update
  };

  return (
    <div className="updates-page"> {/* Add this wrapper for scoped CSS */}
      {/* Navbar */}
      <Navbar
        bg={navbarScrolled ? 'dark' : 'transparent'}
        variant="dark"
        expand="lg"
        fixed="top"
        className={`navbar-custom ${navbarScrolled ? 'navbar-scrolled' : ''}`}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
            <img
              src={serverLogo}
              alt="Server Logo"
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />
            World of Starknight
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/#features" className="nav-link-custom">
                Information
              </Nav.Link>
              <Nav.Link
                href="http://158.69.8.170:8194/"
                target="_blank"
                className="nav-link-custom"
              >
                City Map
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${require('./images/updates-hero.jpeg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <div>
          <h1>Server Updates</h1>
          <p>Stay informed about the latest changes and improvements to the server.</p>
        </div>
      </div>

      {/* Updates Section */}
      <Container className="mt-5">
        <Row className="text-center mb-5">
          <Col>
            <h2>Recent Updates</h2>
            <p>Check out what's new in the World of Starknight!</p>
          </Col>
        </Row>
        <Row className="g-4">
          {updates.map((update, index) => (
            <Col sm={12} md={6} lg={4} key={index}>
              <Card className="clickable-card" onClick={() => handleCardClick(update)}>
                <Card.Body>
                  <Card.Title>{update.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{update.date}</Card.Subtitle>
                  <Card.Text>{update.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for Expanded Update */}
      {selectedUpdate && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <h2 className="modal-title">{selectedUpdate.title}</h2>
            <p className="modal-date">{selectedUpdate.date}</p>
            <p className="modal-description">{selectedUpdate.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Updates;