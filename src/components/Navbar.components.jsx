import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import  { Github, Linkedin, FileEarmarkFill } from 'react-bootstrap-icons';
import "bootstrap/dist/css/bootstrap.min.css";
class Navigation extends Component {
  render() {
    return (
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Eric Qiu</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="https://github.com/ericqiu04" target="_blank">
                <Github className = "icons"/>
              </Nav.Link>
              <Nav.Link href="#link"><Linkedin className = "icons"/></Nav.Link>
              <Nav.Link href="#home"><FileEarmarkFill className = "icons"/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
