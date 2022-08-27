import { Component } from "react";
import pfp from "./imgs/profile.jpg";
class AboutMe extends Component {
  render() {
    return (
      <div id="about-me">
        <div className="profile-picture">
          <img src={pfp} />
        </div>
        <div className="about-texts">
          <h4>Hi I'm Eric</h4>
          <h5>
            I am currently going into my first year of Computer Engineering at
            the University of Waterloo. 
            
            During my spare time, I like to learn
            new programming concepts, hanging out with friends, and playing
            video games. 
            
            I am currently learning Typescript and React concepts. 
            
            If you would like to connect, feel free to reach out, I
            am always open to making new friends!
          </h5>
        </div>
      </div>
    );
  }
}

export default AboutMe;
