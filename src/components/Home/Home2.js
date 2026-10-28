import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

import {
  AiFillGithub,
} from "react-icons/ai";

import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container
      fluid
      className="home-about-section"
      id="about"
    >
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            {/* <h1 style={{ fontSize: "2.6em" }}>
              LET ME{" "}
              <span className="purple">INTRODUCE</span>{" "}
              MYSELF
            </h1> */}

            <p className="home-about-body">
              I am a{" "}
              <i>
                <b className="purple">
                  React Native Developer with 5+ years
                  of experience
                </b>
              </i>{" "}
              in developing and maintaining mobile
              applications for iOS and Android.

              <br />
              <br />

              My technical expertise includes React Native,
              JavaScript, TypeScript, React.js, Redux,
              Redux Toolkit, Context API, Firebase, REST APIs,
              WebSockets, and third-party integrations.

              <br />
              <br />

              I have worked on mobile payment solutions,
              e-commerce platforms, real-time communication,
              and enterprise applications. My experience
              includes application architecture, state
              management, API integration, performance
              optimization, debugging, and app releases.

              <br />
              <br />

              I have also led a development team, collaborated
              with cross-functional teams, and contributed to
              delivering reliable, scalable, and user-friendly
              mobile applications.

              <br />
              <br />

              I enjoy solving complex technical challenges,
              improving application performance, and building
              products that deliver meaningful value to users.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Gokila R portfolio avatar"
              />
            </Tilt>
          </Col>
        </Row>

        {/* Technical Expertise */}
        <Row className="mt-5">
          <Col md={12} className="home-about-description">
            <h1>
              TECHNICAL <span className="purple">EXPERTISE</span>
            </h1>

            <div className="tech-stack">
              {[
                "React Native",
                "JavaScript",
                "TypeScript",
                "React.js",
                "Redux Toolkit",
                "Context API",
                "Firebase",
                "REST APIs",
                "WebSockets",
                "Socket.IO",
                "WebRTC",
                "Git",
                "App Store Deployment",
                "Google Play Deployment",
              ].map((skill) => (
                <span key={skill} className="tech-badge">
                  {skill}
                </span>
              ))}
            </div>
          </Col>
        </Row>

        {/* Social Links */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>

            <p>
              Feel free to{" "}
              <span className="purple">connect</span>{" "}
              with me.
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/gokilaravi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub profile"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gokila-rg?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=gokilarg2001@gmail.com&su=Portfolio%20Contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Send email using Gmail"
                  title="Send email"
                >
                  <SiGmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;