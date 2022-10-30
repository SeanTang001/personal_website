import { Container } from "react-bootstrap"
import React  from 'react';
import resume from '../resume.pdf';

const Resume = ({id}) => {
    return (
        <Container>
        <h2>
            Resume
        </h2>
        <iframe className="resume" src={resume}>Resume</iframe>
        </Container>
    )
  }

export default Resume