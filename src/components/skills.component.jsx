import { Component } from "react";
import "../CSS-Files/skills.component.css";
import { Container } from "react-bootstrap";
class Skills extends Component {
  render() {
    const suits = ["suithearts floating skillCard ", "suitdiamonds floating skillCard", "suitspades floating skillCard", "suitclubs floating skillCard"];
    const random = Math.floor(Math.random() * suits.length);
    return (
      <div className="skill-cards">
        <Container>
          <div class={suits[random]}>
            <img src={this.props.skill} />
          </div>
        </Container>
      </div>
    );
  }
}

export default Skills;
