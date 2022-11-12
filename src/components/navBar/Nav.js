import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className="mb-3" bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link className="nav-item nav-link active" to={"/"}>
            CRUD
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
              <Link className="nav-item nav-link" to={"/"}>
                Sistema
              </Link>
            
              <Link className="nav-item nav-link" to={"/crear"}>
                crear empleado
              </Link>
            
              <Link className="nav-item nav-link" to={"/editar"}>
                editar empleado
              </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
