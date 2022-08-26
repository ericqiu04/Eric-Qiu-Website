import {Component} from 'react';
import ProjectJs from './js-files/projects'
import Projects from './projects.components';
class ProjectMaker extends Component{
    render() {

        return(
            <div>
                <h2 className = "subtitle">
                    Projects
                </h2>
                {ProjectJs.map(project =>(
                    <Projects imgURL = {project.projectIMG} projectType = {project.projectType} projectName = {project.projectName} />
                ))}
            </div>
        ) 
    }

}

export default ProjectMaker