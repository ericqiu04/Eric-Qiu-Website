import { Component } from "react";
import Skilljs from "./js-files/skills";
import Skills from "./skills.component";
class SkillsMaker extends Component {
  render() {
    return (
      <div id = "skills">
        <h2 className="subtitle">Skills</h2>
        {Skilljs.map((skill) => (
          <Skills skill={skill} />
        ))}
      </div>
    );
  }
}

export default SkillsMaker;
