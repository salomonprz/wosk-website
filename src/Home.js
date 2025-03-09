import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import minecraftBackground from './images/WoskSkyline.png';
import wikiImage from './images/wikipediaimage.png';
import updatesImage from './images/updates.png';
import teamImage from './images/team.jpg';
import serverLogo from './images/WOSK_Logo_Circle.png';
import './App.css';

const Home = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [navbarScrolled, setNavbarScrolled] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate
    
    // Smooth scrolling for anchor links
    useEffect(() => {
        const handleSmoothScroll = (e) => {
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        };

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach((link) => {
            link.addEventListener('click', handleSmoothScroll);
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener('click', handleSmoothScroll);
            });
        };
    }, []);

    // Set the page title
    useEffect(() => {
        document.title = 'Home | World of Starknight';
    }, []);


    // Show/hide back-to-top button and update navbar style based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowBackToTop(true);
                setNavbarScrolled(true);
            } else {
                setShowBackToTop(false);
                setNavbarScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {/* Modern Navbar */}
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
                            <Nav.Link href="#features" className="nav-link-custom">
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

            {/* Hero Section with Background Image */}
            <div
                className="hero-section"
                style={{
                    backgroundImage: `url(${minecraftBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                <div>
                    <h1>Welcome to The World of Starknight!</h1>
                    <p>Your go-to Minecraft server for adventure and fun! Ip: play.woskserver.com</p>
                    <Button variant="primary" size="lg" href="#features">
                        Learn More
                    </Button>
                </div>
            </div>

            {/* Features Section */}
            <Container id="features" className="mt-5">
                <Row className="text-center mb-5">
                    <Col>
                        <h2>Features</h2>
                        <p>Discover what makes our server unique and engaging!</p>
                    </Col>
                </Row>
                <Row className="g-4">
                    {/* Wiki Box Card */}
                    <Col sm={12} md={4}>
                        <Card
                            className="clickable-card"
                            onClick={() => window.open('https://world-of-starknight.gitbook.io/wiki', '_blank')}
                        >
                            <Card.Img variant="top" src={wikiImage} />
                            <Card.Body className="d-flex flex-column align-items-center text-center">
                                <Card.Title>Wiki</Card.Title>
                                <Card.Text>
                                    Access our comprehensive wiki for detailed quest guides, job guides, and tips to master the game.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Updates Card */}
                    <Col sm={12} md={4}>
                        <Card
                            className="clickable-card"
                            onClick={() => navigate('/updates')} // Use navigate instead of window.open
                        >
                            <Card.Img variant="top" src={updatesImage} />
                            <Card.Body className="d-flex flex-column align-items-center text-center">
                                <Card.Title>Updates</Card.Title>
                                <Card.Text>
                                    Stay informed about the latest server updates, new features, and upcoming events.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Meet the Team Card */}
                    <Col sm={12} md={4}>
                        <Card
                            className="clickable-card"
                            onClick={() => navigate('/meet-the-team')} // Use navigate instead of window.open
                        >
                            <Card.Img variant="top" src={teamImage} />
                            <Card.Body className="d-flex flex-column align-items-center text-center">
                                <Card.Title>Meet the Team</Card.Title>
                                <Card.Text>
                                    Get to know the talented team behind the server, dedicated to creating an amazing experience for you.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Helpful Links Section */}
            <Container id="helpful-links" className="mt-5">
                <Row className="text-center mb-4">
                    <Col>
                        <h2>Helpful Links</h2>
                        <p>Quick access to our community and resources!</p>
                    </Col>
                </Row>
                <Row className="g-4">
                    {/* Discord Card */}
                    <Col sm={12} md={4}>
                        <Card
                            className="clickable-card"
                            onClick={() => window.open('https://discord.gg/UkUmnSWf9q', '_blank')}
                        >
                            <Card.Body className="text-center">
                                <Card.Title>
                                    <FontAwesomeIcon icon={faDiscord} className="fa-3x mb-3" />
                                    <br />
                                    Discord
                                </Card.Title>
                                <Card.Text>
                                    Join our Discord community to chat, get support, and stay updated!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Store Card */}
                    <Col sm={12} md={4}>
                        <Card
                            className="clickable-card"
                            onClick={() => window.open('https://wosk.craftingstore.net/', '_blank')}
                        >
                            <Card.Body className="text-center">
                                <Card.Title>
                                    <FontAwesomeIcon icon={faStore} className="fa-3x mb-3" />
                                    <br />
                                    Store
                                </Card.Title>
                                <Card.Text>
                                    Visit our store to unlock perks, cosmetics, and more!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Instagram Card */}
                    <Col sm={12} md={4}>
                        <Card
                            className="clickable-card"
                            onClick={() => window.open('https://www.instagram.com/wosk.87/', '_blank')}
                        >
                            <Card.Body className="text-center">
                                <Card.Title>
                                    <FontAwesomeIcon icon={faInstagram} className="fa-3x mb-3" />
                                    <br />
                                    Instagram
                                </Card.Title>
                                <Card.Text>
                                    Follow us on Instagram for updates, events, and behind-the-scenes content!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Footer */}
            <footer id="contact" className="bg-dark text-light text-center py-4 mt-5">
                <p>&copy; 2025 World of Starknight. All rights reserved.</p>
            </footer>

            {/* Back-to-Top Button */}
            {showBackToTop && (
                <Button
                    variant="primary"
                    onClick={scrollToTop}
                    className="back-to-top"
                >
                    ↑
                </Button>
            )}
        </div>
    );
};

export default Home;