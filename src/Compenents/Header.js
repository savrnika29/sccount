import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../Images/Logo.png";

function Header() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; // Check login status
  const username = localStorage.getItem("username"); // Get username

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Remove login status
    localStorage.removeItem("username"); // Remove username
    navigate("/login");
  };

  return (
    <>
      <div className="top-bar">
        FREE U.S. SHIPPING ON ALL ORDERS OVER $100. COMPLIMENTARY RETURNS & EXCHANGES - ALWAYS.
      </div>

      <Navbar bg="body-tertiary" expand="lg">
        <Container>
          <Navbar.Brand className="d-md-none" href="/">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarSupportedContent"
            aria-label="Toggle navigation"
          />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="w-full d-flex justify-content-between align-items-center">
              <Nav.Link as={NavLink} className="nav-link" exact to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} className="nav-link" to="/location">
                Locations
              </Nav.Link>
              <Nav.Link as={NavLink} className="nav-link" to="/booking">
                Bookings
              </Nav.Link>
              <Nav.Link className="navbar-brand d-none d-md-block" href="/">
                <img src={logo} alt="" />
              </Nav.Link>
              <Nav.Link as={NavLink} className="nav-link" to="/about">
                About Us
              </Nav.Link>
              <Nav.Link as={NavLink} className="nav-link" to="/contact">
                Contact Us
              </Nav.Link>
              {isLoggedIn ? (
                <NavDropdown title={`Welcome, ${username}`} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link as={NavLink} className="btn btn-view" to="/login">
                  LOGIN/SIGNUP
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
