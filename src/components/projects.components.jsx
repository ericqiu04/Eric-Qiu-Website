import {Component} from 'react';

class Projects extends Component {

    render() {

        return(
            <div className = "project">

                <div className = "project-image">
                    <img src = {this.props.imgURL} alt = "projectimg"/>
                </div>
                
                <div className = "projectName">
                    {this.props.projectType}
                    {this.props.projectName}
                </div>
                
            </div>
        )
    }
    
}

export default Projects