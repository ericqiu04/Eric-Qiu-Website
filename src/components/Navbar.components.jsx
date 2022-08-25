import { Component } from "react";
import Favicon from "./icons/favicon.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Github, Linkedin, FileEarmarkFill } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
class Navigation extends Component {
  render() {
    return (
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Favicon}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="https://github.com/ericqiu04" target="_blank">
                <Github className="icons" />
              </Nav.Link>
              <Nav.Link href="#link">
                <Linkedin className="icons" />
              </Nav.Link>
              <Nav.Link href="#home">
                <FileEarmarkFill className="icons" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
