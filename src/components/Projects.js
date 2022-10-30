import { Container, Col, Row } from "react-bootstrap"
import React  from 'react';
import logo from '../logo.svg';

const Projects = ({id}) => {
    return (
    <Container>
      <Col>
        <Row>
          <Col>
          <h2>Projects 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>        
            </Col>
            <Col>
            <img src={logo} alt="BigCo Inc. logo"/>
        </Col>
          <Col>
          <h2>Projects 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>        
          </Col>   
          <Col>
            <img src={logo} alt="BigCo Inc. logo"/>
        </Col> 
        </Row>
        <Row>    
          <Col>
          <h2>Projects 3</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>        
          </Col>
          <Col>
            <img src={logo} alt="BigCo Inc. logo"/>
        </Col>
      <Col>
          <h2>Projects 4</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>        
          </Col>
          <Col>
            <img src={logo} alt="BigCo Inc. logo"/>
        </Col>
        </Row>
      </Col>
    </Container>
    )
  }

export default Projects