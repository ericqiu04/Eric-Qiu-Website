import {Component} from 'react';
import '../CSS-Files/skills.component.css';
import {Container} from 'react-bootstrap'

class Skills extends Component{
    render() {

        return(
            <div>
                <Container>
                        <div class="hand spread">
 
                        <div class="card suitdiamonds">
                          <p>A</p>
                        </div>
                       
                        <div class="card suithearts">
                          <p>A</p>
                        </div>
                        
                        <div class="card suitclubs">
                          <p>A</p>
                        </div>
                        
                        <div class="card suitspades">
                          <p>A</p>
                        </div>
                      </div>

                </Container>
            </div>
        )

    }
}

export default Skills