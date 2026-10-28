import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaArrowRight,
  FaDownload,
  FaMobileAlt,
  FaCode,
  FaRocket,
  FaUsers,
  FaCheck,
} from "react-icons/fa";

import userLogo from "../../Assets/UserImage.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="premium-home" id="home">
        <Particle />

        <Container className="premium-container">
          <Row className="premium-row">
            {/* LEFT CONTENT */}
            <Col lg={6} className="premium-intro">
              <div className="experience-badge">
                <span className="experience-dot" />
                5+ Years of Experience
              </div>

              <h1 className="premium-greeting">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="premium-name">
                I'm <span>Gokila R</span>
              </h1>

              {/* <h2 className="premium-role">
                React Native Developer
              </h2> */}

              <div className="premium-typing">
                <Type />
              </div>

              <p className="premium-description">
                Building scalable mobile applications for iOS and Android
                with a focus on performance, user experience, and modern
                technologies.
              </p>

              <div className="premium-highlights">
                <div className="premium-highlight">
                  <FaMobileAlt />
                  <span>iOS & Android<br />Applications</span>
                </div>

                <div className="premium-highlight">
                  <FaCode />
                  <span>Clean Code<br />& Best Practices</span>
                </div>

                <div className="premium-highlight">
                  <FaRocket />
                  <span>Scalable<br />Solutions</span>
                </div>

                <div className="premium-highlight">
                  <FaUsers />
                  <span>Team<br />Leadership</span>
                </div>
              </div>

              <div className="premium-actions">
                <Link to="/project" className="premium-btn primary">
                  <span>Explore My Work</span>
                  <FaArrowRight aria-hidden="true" />
                </Link>

                <a
                  href={`${process.env.PUBLIC_URL}/Gokila_resume.pdf`}
                  download="Gokila_resume.pdf"
                  className="premium-btn secondary"
                >
                  Download Resume <FaDownload />
                </a>
              </div>
            </Col>

            {/* RIGHT IMAGE */}
            <Col lg={6} className="premium-visual">
              <div className="visual-stage">
                <div className="visual-glow" />
                {/* <div className="visual-circle" /> */}

                <img
                  src={userLogo}
                  alt="Gokila - React Native Developer"
                  className="premium-illustration"
                  style={{
                    width: "650px",
                    height: "650px",
                    maxWidth: "none",
                    objectFit: "contain",
                  }}
                />

                <div className="floating-skills">
                  {["React Native", "Firebase", "Redux", "TypeScript", "REST APIs"].map(
                    (skill) => (
                      <div className="floating-skill" key={skill}>
                        <span><FaCheck /></span>
                        {skill}
                      </div>
                    )
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        {/* CURVED SECTION DIVIDER */}
        <div className="premium-divider">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="divider-fill"
              d="M0,20 C250,120 450,80 720,35 S1150,100 1440,60 L1440,100 L0,100 Z"
            />
            <path
              className="divider-line"
              d="M0,20 C250,120 450,80 720,35 S1150,100 1440,60"
            />
          </svg>
        </div>
      </section>

      <section className="premium-about-heading">
        <div className="section-eyebrow">
          <span />
          ABOUT ME
          <span />
        </div>

        <h2>
          Let Me Introduce <span>Myself</span>
        </h2>

        <div className="section-underline" />
      </section>

      <Home2 />
    </>
  );
}

export default Home;