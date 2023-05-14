import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';

function Header() {
    return (
        <Navbar bg="dark " expand="lg">
            <Container>
                <Navbar.Brand className={"text-white"} href="/">Employee Management System</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;
