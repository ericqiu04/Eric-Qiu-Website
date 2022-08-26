import { Component, useState } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "../CSS-Files/projects.components.css";
import cardIMG from "./imgs/card-back.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
class Projects extends Component {
  render() {
    return (
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: "375px", height: "531px", }} /// these are optional style, it is not necessary
        className = "flipper"
      >
        <FrontSide>
          <img src={cardIMG} className="cardImg" />
        </FrontSide>
        <BackSide className = "project-back">
            <Card.Img variant="top" src={this.props.imgURL} />
            <Card.Body>
              <Card.Title>{this.props.projectName}</Card.Title>
              <Card.Text>Helo</Card.Text>
              <Button variant="primary" className="btn">
                Repo
              </Button>
              <Button variant="primary" className="btn">
                Live
              </Button>
            </Card.Body>
        </BackSide>
      </Flippy>
    );
  } 
}

export default Projects;

/*
<div className="flipper">
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
        >
          <div
            class="card-flip card-front-component"
            onClick={this.handleClick}
          >
            <img src={cardIMG} className = "cardImg"/>
          </div>

          <Card>
            <Card.Img variant = "top" src = {this.props.imgURL}/>
            <Card.Body>
              <Card.Title>{this.props.projectName}</Card.Title>
              <Card.Text>
                Helo
              </Card.Text>
              <Button variant = "primary" className = "btn">Repo</Button>
              <Button variant = "primary" className = "btn">Live</Button>
            </Card.Body>
          </Card>
        </ReactCardFlip>
      </div>
    */
