import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Brand>
                            <Link to={"/bon-list"} className="nav-link">Bon</Link>
                        </Navbar.Brand>
                        <Nav className="justify-content-end">
                            <Nav>
                                <Link to={'/create-bon'} className="nav-link">Create Bon</Link>
                            </Nav>
                        </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation
