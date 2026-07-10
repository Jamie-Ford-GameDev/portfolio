import React from "react";
import { Col, Row } from "react-bootstrap";

import Cpp from "../../Assets/TechIcons/C++.svg";
import CSharp from "../../Assets/TechIcons/csharp.svg";
import Unreal from "../../Assets/TechIcons/unreal-engine.svg";
import Unity from "../../Assets/TechIcons/Unity.png";
import Blender from "../../Assets/TechIcons/Blender.png";
import Aseprite from "../../Assets/TechIcons/aseprite.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import VSCode from "../../Assets/TechIcons/vscode.svg";
import Jira from "../../Assets/TechIcons/Jira.png";
import Figma from "../../Assets/TechIcons/Figma.webp";
import Perforce from "../../Assets/TechIcons/Perforce.webp";
import VisualStudio from "../../Assets/TechIcons/Visual Studio.webp";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={3} className="tech-icons">
        <img src={Cpp} alt="C++" className="tech-icon-images" />
        <div className="tech-icons-text">C++</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <img src={CSharp} alt="C#" className="tech-icon-images" />
        <div className="tech-icons-text">C#</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <img
          src={Unreal}
          alt="Unreal Engine"
          className="tech-icon-images"
        />
        <div className="tech-icons-text">Unreal Engine</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <img src={Unity} alt="Unity" className="tech-icon-images" />
        <div className="tech-icons-text">Unity</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <img src={Blender} alt="Blender" className="tech-icon-images" />
        <div className="tech-icons-text">Blender</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <img src={Aseprite} alt="Aseprite" className="tech-icon-images" />
        <div className="tech-icons-text">Aseprite</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <img src={Git} alt="Git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <img src={Perforce} alt="Perforce P4V" className="tech-icon-images" />
        <div className="tech-icons-text">Perforce P4V</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <img src={Figma} alt="Figma" className="tech-icon-images" />
        <div className="tech-icons-text">Figma</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <img src={Jira} alt="Jira" className="tech-icon-images" />
        <div className="tech-icons-text">Jira</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <img
          src={VSCode}
          alt="Visual Studio Code"
          className="tech-icon-images"
        />
        <div className="tech-icons-text">Visual Studio Code</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <img
          src={VisualStudio}
          alt="Visual Studio"
          className="tech-icon-images"
        />
        <div className="tech-icons-text">Visual Studio</div>
      </Col>
    </Row>
  );
}

export default Techstack;