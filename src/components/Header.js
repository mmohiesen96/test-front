import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Food</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="favorite">Favorite</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Header
