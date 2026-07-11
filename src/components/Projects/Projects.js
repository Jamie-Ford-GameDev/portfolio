import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import roborun from "../../Assets/RoboRun.png";
import ashenbloom from "../../Assets/AshenBloom.png";
import roborunvideo from "../../Assets/roborun.mp4";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={roborun}
              isBlog={false}
              title="Robo Run"
              description=" A First Person Shooter Speed Running Game where the goal is to beat the levels as fast as possible while killing all enemies. Team Project built in Unity where my responsibilities was Enemy AI, and Enemy 3d modeling"
              demoLink="https://madkilly.itch.io/robo-run"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ashenbloom}
              isBlog={false}
              title="Ashen Bloom"
              description="Ashen Bloom is a singleplayer third-person character-action souls-lite in a dying world where nature has fused with machines, corpses, and ruined cities. Team Project built in Unreal Engine 5.6 where my responsibilites where player creation, movement, attack, and animations as well as audio"
              demoLink="https://shadowswordstudio.itch.io/ashen-bloom"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Robo Run Remake (Work In Progress)"
              description="A remade version of a prior team project Robo Run that was built in Unity. It will be fully remade in Unreal Engine and I will be responsible for player movement, animations, player attack with multiple weapons, audio, and some UI elements"
              video={roborunvideo}        
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
