import { Component } from "react";
import "../CSS-Files/skills.component.css";
import { Container } from "react-bootstrap";
import Css from "./icons/css-3.png";
import Html from "./icons/html.png";
import Js from "./icons/js.png";
import Bootstrap from "./icons/bootstrap.png";
import Reactjs from "./icons/react.png";
class Skills extends Component {
  render() {
    return (
      <div>
        <Container>
            <h2 className = "subtitle">
                Skills
            </h2>
          <div class="hand spread">
            <div class="card suitdiamonds">
              <img src={Html} />
            </div>

            <div class="card suitdiamonds">
              <img src={Css} />
            </div>

            <div class="card suithearts">
              <img src={Js} />
            </div>

            <div class="card suitclubs">
              <img src={Bootstrap} />
            </div>

            <div class="card suitspades">
              <img src={Reactjs} />
            </div>

            <div class="card suithearts">
              <p>A</p>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Skills;