import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function ResumeNew() {
  return (
    <Container fluid className="resume-section coming-soon-page">
      <Particle />

      <Container className="coming-soon-content">
        <h1>
          Resume <strong className="purple">Coming Soon</strong>
        </h1>

        <p>
          My updated resume will be available here soon.
        </p>
      </Container>
    </Container>
  );
}

export default ResumeNew;