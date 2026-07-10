import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Soldier.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m a Game Developer with a Bachelor of Science in Game
              Development from Full Sail University. I enjoy turning ideas
              into interactive experiences and creating gameplay systems that
              feel responsive, engaging, and enjoyable for players.
              <br />
              <br />
              I have hands-on experience working with
              <i>
                <b className="purple">
                  {" "}
                  Unreal Engine, Unity, C++, and C#{" "}
                </b>
              </i>
              while developing gameplay mechanics, character movement, combat
              systems, user interfaces, animation integration, and other core
              game features.
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  gameplay programming, combat systems, character movement,
                  animation integration, and artificial intelligence.
                </b>
              </i>
              <br />
              <br />
              Before pursuing game development, I served in the Army as a
              Satellite and Network Systems Operator. My military experience
              helped me develop strong skills in
              <i>
                <b className="purple">
                  {" "}
                  leadership, teamwork, technical communication, training, and
                  problem-solving under pressure.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I enjoy building projects with
              <b className="purple"> Unreal Engine </b> and
              <b className="purple"> Unity </b> while continuing to improve my
              skills in
              <i>
                <b className="purple"> Blender </b>
              </i>
              for 3D modeling and
              <i>
                <b className="purple"> Aseprite </b>
              </i>
              for pixel art.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Jamie Ford avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
