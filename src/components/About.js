import { Container, Col, Row } from "react-bootstrap"
import logo from '../logo.svg';
import face from "../face.jpg";
import React  from 'react';

const About = ({id}) => {
    return (
    <Container>
        <Row>
        <Col>
            <h4>
                About
            </h4>        
            <h4>
            Me
            </h4>
            <p>
            I'm a student at UCLA, studying Electrical and Computer Engineering. 
            <ul>
                <li>
                    <a href="https://github.com/SeanTang001">Github</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sean-tang-96a15419a/">Linkedin</a>
                </li>
            </ul>
            <h4>Contact</h4>
            <a href="mailto: seantang001@g.ucla.edu">Email</a>
            <h4>
            Source
            </h4>        
            This site was made using ReactJS. 
            
            </p>

        </Col>
        <Col>
            <img className="face" src={face} alt="BigCo Inc. logo"/>
        </Col>
        </Row>

    </Container>
    )
  }

export default About