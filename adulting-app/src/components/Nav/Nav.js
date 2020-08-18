import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './nav.css'

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg" className='header'>
            <Navbar.Brand className='header-title' style={{ color: '#64bcc5' }}>Adulting</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to='/home'>
                        <Nav.Link className='header-link' href="#home" style={{ color: '#64bcc5' }}>Home</Nav.Link>
                    </Link>
                    <Link to='/about'>
                        <Nav.Link className='header-link' href="#link" style={{ color: '#64bcc5' }}>About</Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navigation