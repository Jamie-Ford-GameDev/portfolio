import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Jamie Ford</span>, a{" "}
            <span className="purple">Game Developer</span> with a Bachelor of
            Science in Game Development from{" "}
            <span className="purple">Full Sail University</span>.
            <br />
            <br />
            Before pursuing game development, I served in the{" "}
            <span className="purple">United States Army</span> as a Satellite
            and Network Systems Operator. That experience helped me build strong
            skills in leadership, teamwork, technical communication, training,
            and solving problems under pressure.
            <br />
            <br />
            Today, I enjoy creating gameplay systems with{" "}
            <span className="purple">Unreal Engine, Unity, C++, and C#</span>.
            I am especially interested in character movement, combat mechanics,
            animation integration, artificial intelligence, and other systems
            that make games feel responsive and enjoyable.
            <br />
            <br />
            Outside of programming, I continue developing my creative skills
            and working on projects that help me grow as a well-rounded game
            developer:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building gameplay prototypes 🎮
            </li>

            <li className="about-activity">
              <ImPointRight /> Learning 3D modeling with Blender 🧱
            </li>

            <li className="about-activity">
              <ImPointRight /> Practicing pixel art with Aseprite 🎨
            </li>

            <li className="about-activity">
              <ImPointRight /> Playing games and studying game design 🕹️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Every project is an opportunity to learn, improve, and create
            something memorable."
          </p>

          <footer className="blockquote-footer">Jamie Ford</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
