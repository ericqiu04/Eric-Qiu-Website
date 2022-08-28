import { Component } from "react";
import "../CSS-Files/Introduction.component.css";
import { Link } from "react-scroll";
import { Row, Col } from "react-bootstrap";
import "../CSS-Files/stackCard.css";

class Introduction extends Component {
  render() {
    const suits = ["suithearts", "suitdiamonds", "suitspades", "suitclubs"];
    const random = Math.floor(Math.random() * suits.length);
    const rand1 = suits[random];
    const rand2 = suits[random];
    for (var i = 0; i < 9; i++) {}
    console.log(rand1 + rand2);
    return (
      <div className="intro" id="hero">
        <Row>
          <Col lg={9}>
            <h1>Eric Qiu</h1>
            <div className="hero">
              <div className="static-txt">I'm a</div>
              <ul className="dynamic-txts">
                <li>
                  <span>Programmer</span>
                </li>
                <li>
                  <span>Developer</span>
                </li>
                <li>
                  <span>Student</span>
                </li>
                <li>
                  <span>Tutor</span>
                </li>
              </ul>
            </div>

            <div className="sectionNavigation">
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={this.handleSetActive}
              >
                <button className="nav-items">Skills</button>
              </Link>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={this.handleSetActive}
              >
                <button className="nav-items">Projects</button>
              </Link>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={this.handleSetActive}
              >
                <button className="nav-items">About Me</button>
              </Link>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={this.handleSetActive}
              >
                <button className="nav-items">Contact</button>
              </Link>
            </div>
          </Col>
          <Col className="animation" lg={3}>
            {/*Add card stacking animation*/}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Introduction;
/*
<div className="loading">
              <div style={{ "--i": "1" }} className= {rand1}>
                <span>A</span>
                <span></span>
              </div>
              <div style={{ "--i": "2" }} className= {rand2}>
                <span>2</span>
                <span></span>
              </div>
              <div style={{ "--i": "3" }} className= {suits[random]}>
                <span>3</span>
                <span></span>
              </div>
              <div style={{ "--i": "4" }} className= {suits[random]}>
                <span>4</span>
                <span></span>
              </div>
              <div style={{ "--i": "5" }} className= {suits[random]}>
                <span>5</span>
                <span></span>
              </div>
              <div style={{ "--i": "6" }} className= {suits[random]}>
                <span>6</span>
                <span></span>
              </div>
              <div style={{ "--i": "7" }} className= {suits[random]}>
                <span>7</span>
                <span></span>
              </div>
              <div style={{ "--i": "8" }} className= {suits[random]}>
                <span>8</span>
                <span></span>
              </div>
              <div style={{ "--i": "9" }} className= {suits[random]}>
                <span>9</span>
                <span></span>
              </div>
              <div style={{ "--i": "10" }} className= {suits[random]}>
                <span>10</span>
                <span></span>
              </div>
            </div>
            */
