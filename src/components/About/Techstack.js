
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaSass,
  FaAngular,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiExpo,
  SiFirebase,
  SiNextdotjs,
  SiSupabase,
  SiSocketdotio,
  SiWebrtc,
  SiJest,
  SiPostman,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const technologies = [
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: FaReact },
  { name: "React Native", Icon: TbBrandReactNative },
  { name: "Redux Toolkit", Icon: SiRedux },
  { name: "Expo", Icon: SiExpo },
  { name: "Angular", Icon: FaAngular },
  { name: "HTML5", Icon: FaHtml5 },
  { name: "CSS3", Icon: FaCss3Alt },
  { name: "Sass", Icon: FaSass },
  { name: "Firebase", Icon: SiFirebase },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Supabase", Icon: SiSupabase },
  { name: "Socket.IO", Icon: SiSocketdotio },
  { name: "WebRTC", Icon: SiWebrtc },
  { name: "Git", Icon: FaGitAlt },
  { name: "Jest", Icon: SiJest },
  { name: "Postman", Icon: SiPostman },
];

function Techstack() {
  return (
    <Row className="tech-stack-grid">
      {technologies.map(({ name, Icon }) => (
        <Col
          key={name}
          xs={4}
          sm={3}
          md={2}
          className="tech-icons"
          title={name}
        >
          <Icon aria-hidden="true" />
          <span className="tech-icon-label">{name}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
