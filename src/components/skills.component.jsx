import {Component} from 'react';
import '../CSS-Files/skills.component.css';
import {Row, Col, Container} from 'react-bootstrap'
class Skills extends Component{
    render() {

        return(
            <div>
                <Container>
                    <Row>
                        <Col>
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

                        </Col>
                        <Col>
                        
                        
                        </Col>
                    </Row>
                </Container>
            </div>
        )

    }
}

export default Skills