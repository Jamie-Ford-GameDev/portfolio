import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/programming.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Techstack from "../About/Techstack";
import Github from "../About/Github";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div className="home-page">
      <Particle />

      <section className="home-page-content">
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-label="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> JAMIE FORD</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                  src={homeLogo}
                  alt="Game developer working at a computer"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
          </Container>
        </Container>

        <Home2 />

        <Container>
          <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
            <Col md={12} className="home-about-social">
              <h1>Find Me On</h1>

              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>

              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/Jamie-Ford-GameDev"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label="GitHub"
                  >
                    <AiFillGithub />
                  </a>
                </li>

                <li className="social-icons">
                  <a
                    href="https://x.com/JamieFord_84"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label="X"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>

                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/jamie-ford-196681bb/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>

                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/jamieford_84/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label="Instagram"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
