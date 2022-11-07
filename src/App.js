import logo from './logo.svg';
import './App.css';
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Source from './components/Source'
import React  from 'react';

import { Container, Form, Button, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {
  BrowserRouter as Router,
  Routes, Route, Link, useParams, Navigate, useNavigate, NavLink
} from "react-router-dom"


// Specifications: 

// Resume
// Projects
// About
// Source

const App = () => {
  return (
    <div className='App'>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossOrigin="anonymous"
      />
      <Router>
        <Navbar expand="lg" variant="dark" bg="dark" className="navbar" >
          <Container>
            <LinkContainer to="/">
            <Navbar.Brand className='nav_name'><strong>Sean Tang</strong></Navbar.Brand>
            </LinkContainer>
            <Navbar.Collapse id="basic-navbar-nav" className="nav">
            <div>
              <Nav className="me-auto"> 
                {/* <LinkContainer to="/about">
                  <Nav.Link>
                  About
                  </Nav.Link>
                </LinkContainer> */}
                <LinkContainer to="/projects">
                  <Nav.Link>Projects</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/resume">
                  <Nav.Link>Resume</Nav.Link>
                </LinkContainer>
              </Nav>
            </div>
          </Navbar.Collapse>
          </Container>
          </Navbar>
          <br></br>
          <Routes>
            <Route path="/" element={<About/>}/>
            {/* <Route path="/about" element={<About/>}/> */}
            <Route path="/projects" element={<Projects id="projects"/>}/>
            <Route path="/resume" element={<Resume id="resume"/>}/> 
            </Routes>
        </Router>
    </div>

  )


  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <Source/>
  //       <About/>
  //       <Projects/>
  //       <Resume/>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
