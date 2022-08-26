import { Component } from "react";
import "../CSS-Files/Introduction.component.css";

class Introduction extends Component {
  render() {
    return (
      <div className="intro">
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
          <button className="nav-items">Skills</button>
          <button className="nav-items">Projects</button>
          <button className="nav-items">About Me</button>
          <button className="nav-items">Contact Me</button>
        </div>
        


        {/*Add card stacking animation*/}

        
      </div>
    );
  }
}

export default Introduction;
