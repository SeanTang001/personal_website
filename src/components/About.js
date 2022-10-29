import { Container, Col, Row } from "react-bootstrap"
import logo from '../logo.svg';

const About = ({id}) => {
    return (
    <Container>
        <Row>
        <Col>
            <h2>
                About
            </h2>        
            <h3>
            Me
            </h3>
            <p>
                
            I'm a student at UCLA, studying Electrical and Computer Engineering. 
            <ul>
                <li>
                    <a href="https://github.com/SeanTang001">Github</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sean-tang-96a15419a/">Linkedin</a>
                </li>
                <li>
                    <a href="https://github.com/SeanTang001">Resume</a>
                </li>
            </ul>

            <h3>
            Projects
            </h3>        
            This site was made using ReactJS. All content on this site is licensed under the MIT license unless otherwise specified. The source of this website can be found here.
            </p>

        </Col>
        <Col>
            <img src={logo} alt="BigCo Inc. logo"/>
        </Col>
        </Row>
    </Container>
    )
  }

export default About