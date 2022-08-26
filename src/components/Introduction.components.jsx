import { Component } from "react";
import "../CSS-Files/Introduction.component.css";
import {Link}  from 'react-scroll'


class Introduction extends Component {
  render() {
    return (
      
        <div className="intro" id = "hero">
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
          <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="nav-items">Skills</button></Link>
          <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="nav-items">Projects</button></Link>
          <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="nav-items">About Me</button></Link>
          <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="nav-items">Contact</button></Link>
          </div>

          {/*Add card stacking animation*/}
        </div>
      
    );
  }
}

export default Introduction;
