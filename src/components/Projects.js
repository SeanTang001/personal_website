import { Container, Col, Row } from "react-bootstrap"
import React  from 'react';
import logo from '../logo.svg';
import inventory_tracker from '../inventory_tracker.png';
import forgus from '../forgus.png'
import darkforrest from '../darkforrest.png'

const Projects = ({id}) => {
    return (
    <Container>
      <Col>
        <Row>
          <Col>
          <h2>FORGUS</h2>
            <p>
            An IoT application that provides real-time anonymized information on foot traffic. Together with a statistical model, the application also provides a prediction of foot traffic. 
            </p>        
            </Col>
            <Col>
            <img className="projects" src={forgus} alt="BigCo Inc. logo"/>
        </Col>
          <Col>
          <h2>Dark Forrest</h2>
            <p>
              An RTS game inspired by the Chinese Science Fiction Novel “Dark Forest” by Liu Qi Xin being developed at the Studio Heart Engine Club at Foothill High School
            </p>        
          </Col>   
          <Col>
            <img className = "projects" src={darkforrest} alt="BigCo Inc. logo"/>
        </Col> 
        </Row>
        <Row>    
          <Col>
          <h2>Bay Area Inventory Tracker</h2>
            <p>
            Inventory Tracker - A data aggregation website that utilizes web scraping to provide inventory data of multiple popular grocery stores in the Bay Area. The web application contains an external facing API, database infrastructure, and basic data analysis services. 
            </p>        
          </Col>
          <Col>
            <img className="projects" src={inventory_tracker} alt="BigCo Inc. logo"/>
        </Col>
      <Col>
          <h2>OOF OS</h2>
            <p>
              A bare-metal x86 Operating System following the book “OPERATING SYSTEMS: FROM 0 TO 1”
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