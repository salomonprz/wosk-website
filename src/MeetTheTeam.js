import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './App.css'; // Reuse the same CSS
import serverLogo from './images/WOSK_Logo_Circle.png'; // Import your server logo

const MeetTheTeam = () => {
  const [navbarScrolled, setNavbarScrolled] = useState(false);

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
    document.title = 'Meet the Team | World of Starknight';
  }, []);


  // Example team data
  const teamMembers = [
    {
      name: 'MachineLost',
      role: 'Server Owner',
      description: 'MachineLost is the founder of The World of Starknight and oversees all server operations.',
      image: require('./images/michael.png'), // Add team member images
    },
    {
      name: 'MachineGone',
      role: 'Co-Owner',
      description: 'MachineGone ensures that the server rules are followed and maintains a positive community environment.',
      image: require('./images/casdanimage.png'),
    },
    {
      name: 'Glokk_Milk',
      role: 'Chief of Operations',
      description: 'idk dawg.',
      image: require('./images/pjicon.PNG'),
    },
  ];

  return (
    <div>
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
          backgroundImage: `url(${require('./images/team-hero.webp')})`, // Add a relevant background image
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
          <h1>Meet the Team</h1>
          <p>Get to know the talented individuals behind the World of Starknight.</p>
        </div>
      </div>

      {/* Team Section */}
      <Container className="mt-5">
        <Row className="text-center mb-5">
          <Col>
            <h2>Our Team</h2>
            <p>We are dedicated to creating an amazing experience for you.</p>
          </Col>
        </Row>
        <Row className="g-4">
          {teamMembers.map((member, index) => (
            <Col sm={12} md={6} lg={4} key={index}>
              <Card className="clickable-card">
                <Card.Img variant="top" src={member.image} />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                  <Card.Text>{member.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MeetTheTeam;