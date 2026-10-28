
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiAndroidstudio,
  SiJest,
  SiSonarqube,
  SiGithub,
  SiJenkins,
  SiFirebase,
  SiXcode,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiFigma } from "react-icons/si";
import { SiOpenai } from "react-icons/si";

const tools = [
  { name: "VS Code", Icon: SiVisualstudiocode },
  { name: "Xcode", Icon: SiXcode },
  { name: "React Native DevTools", Icon: TbBrandReactNative },
  { name: "Figma Make", Icon: SiFigma },
  { name: "OpenAI", Icon: SiOpenai },
  { name: "Postman", Icon: SiPostman },
  { name: "Android Studio", Icon: SiAndroidstudio },
  { name: "Jest", Icon: SiJest },
  { name: "SonarQube", Icon: SiSonarqube },
  { name: "GitHub", Icon: SiGithub },
  { name: "Jenkins", Icon: SiJenkins },
  { name: "Firebase Console", Icon: SiFirebase },
];


function Toolstack() {
  return (
    <Row className="tech-stack-grid">
      {tools.map(({ name, Icon }) => (
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

export default Toolstack;
