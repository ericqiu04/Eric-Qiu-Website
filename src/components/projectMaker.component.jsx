import { Component } from "react";
import ProjectJs from "./js-files/projects";
import Projects from "./projects.components";
import '../CSS-Files/projects.components.css'
class ProjectMaker extends Component {
  render() {
    return (
      <div id = "projects">
        <h2 className="subtitle">Projects</h2>
        <h6>click card to read more</h6>
        <div className="projectMaker">
          {ProjectJs.map((project) => (
            <Projects
              imgURL={project.projectIMG}
              projectType={project.projectType}
              projectName={project.projectName}
              description = {project.projectDescription}
              github = {project.projectGithub}
              website = {project.projectURL}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectMaker;
