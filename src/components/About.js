import { Container, Col, Row } from "react-bootstrap"
import logo from '../logo.svg';
import React  from 'react';

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
            Source
            </h3>        
            This site was made using ReactJS. 
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