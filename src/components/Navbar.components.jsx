import { Component } from "react";
import Favicon from "./icons/favicon.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Github, Linkedin, FileEarmarkFill } from "react-bootstrap-icons";
import Resume from './Resume.pdf'
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS-Files/Navigation.component.css";

class Navigation extends Component {
  state = {
    bg: "transparent",
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 50) {
      this.setState({ bg: "light" });
    } else {
      this.setState({ bg: "transparent" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  render() {
    const iconSize = 40;
    return (
      <Navbar bg={this.state.bg} expand="lg" sticky="top" className = "Navbar">
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
                <Github className="icons" size={iconSize} />
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/eric-qiu-72115623b/" target = "_blank">
                <Linkedin className="icons" size={iconSize} />
              </Nav.Link>
              <Nav.Link href={Resume} target = "_blank">
                <FileEarmarkFill className="icons" size={iconSize} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
