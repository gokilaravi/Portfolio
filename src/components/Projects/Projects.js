
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGooglePlay, FaMobileAlt } from "react-icons/fa";
import Particle from "../Particle";
import "./Projects.css";

// const projects = [
//   {
//     title: "MTN MoMo",
//     category: "FinTech • Mobile Payments",
//     description:
//       "Contributed to a production-grade mobile payment application, leading a 9-member team. Built scalable features with React Native, Redux, and REST APIs, integrated backend microservices, and managed app releases and production hotfixes.",
//     technologies: ["React Native", "Redux", "REST APIs", "Microservices"],
//     link: "https://play.google.com/store/apps/details?id=com.consumerug&hl=en",
//     linkText: "View on Google Play",
//   },
//   {
//     title: "Freshma",
//     category: "E-commerce • Food Delivery",
//     description:
//       "Developed a mobile application for customers to explore marine food products, manage their cart, place orders, and make secure payments through Razorpay.",
//     technologies: [
//       "React Native",
//       "JavaScript",
//       "Razorpay",
//       "Firebase",
//       "REST APIs",
//     ],
//     link: "https://play.google.com/store/apps/details?id=com.freshma.customer&hl=en_IN",
//     linkText: "View on Google Play",
//   },
//   {
//     title: "DICI – Digital Classroom",
//     category: "Education • Video Conferencing",
//     description:
//       "Developed audio and video conferencing features using the Jitsi Meet SDK. Improved call lifecycle handling and network resilience for a smoother classroom experience.",
//     technologies: ["React Native", "Jitsi Meet SDK", "Android", "WebRTC"],
//   },
//   {
//     title: "Dimmenxion Chat",
//     category: "Communication • Real-time Chat",
//     description:
//       "Built real-time messaging with WebSockets and one-to-one SIP-based voice calling, including connection recovery, message synchronization, and call-state handling.",
//     technologies: ["React Native", "WebSockets", "SIP", "JavaScript"],
//   },
//   {
//     title: "Marine Food Ordering App",
//     category: "E-commerce • Ordering",
//     description:
//       "Enhanced a cross-platform ordering experience with product browsing, cart management, order placement, payment integration, and order-status tracking.",
//     technologies: [
//       "React Native",
//       "JavaScript",
//       "Razorpay",
//       "REST APIs",
//     ],
//   },
// ];
const projects = [
  {
    title: "FK LMS Mobile Application",
    category: "Enterprise Mobile Application",
    description:
      "Developed and enhanced an enterprise mobile application using React Native and Firebase for 3,000+ users. Implemented location-based check-in/check-out, lead tracking, reliable background execution, killed-state notification handling, and application stability monitoring.",
    technologies: [
      "React Native",
      "JavaScript",
      "Firebase",
      "Firestore",
      "FCM",
      "Crashlytics",
      "SonarQube",
    ],
    highlights: [
      "Supported 3,000+ users",
      "Location-based attendance",
      "Background notifications",
      "Performance optimization",
    ],
  },

  {
    title: "Unicommerce Application",
    category: "Enterprise Web Application",
    description:
      "Spearheaded the migration of an enterprise application from Angular 12 to Angular 19. Resolved 90+ legacy bugs, modernized the codebase, improved rendering performance, and reduced user-reported errors.",
    technologies: [
      "Angular 12",
      "Angular 19",
      "TypeScript",
      "JavaScript",
      "REST APIs",
    ],
    highlights: [
      "Angular 12 to 19 migration",
      "90+ legacy bugs resolved",
      "45% rendering performance improvement",
      "15% fewer user-reported errors",
    ],
  },

  {
    title: "Uniflow Automation Platform",
    category: "AI-Powered Automation",
    description:
      "Architected an AI-driven automation platform using Next.js and Supabase, integrating OpenAI and Gemini APIs to automate Business Analyst documentation. Built prompt workflows to generate Business Requirements Documents (BRDs) and system specifications.",
    technologies: [
      "Next.js",
      "React.js",
      "Supabase",
      "OpenAI API",
      "Gemini API",
      "JavaScript",
    ],
    highlights: [
      "AI-powered documentation",
      "Automated BRD generation",
      "System specification generation",
      "70% reduction in manual documentation time",
    ],
  },

  {
    title: "MTN MoMo",
    category: "FinTech • Mobile Payments",
    description:
      "Contributed to a production-grade React Native payment application and led a 9-member team. Built scalable mobile features using Redux and REST APIs, integrated backend microservices, managed app releases, and resolved production issues through root-cause analysis and hotfixes.",
    technologies: [
      "React Native",
      "Redux",
      "REST APIs",
      "Microservices",
      "Android",
      "iOS",
    ],
    highlights: [
      "Led a 9-member team",
      "Integrated 18 bill-payment microservices",
      "Managed mobile app releases",
      "Resolved 20+ production issues",
    ],
    link:
      "https://play.google.com/store/apps/details?id=com.consumerug&hl=en",
    linkText: "View on Google Play",
  },

  {
    title: "Freshma",
    category: "E-commerce • Food Ordering",
    description:
      "Developed a cross-platform mobile application for marine food product ordering. Implemented product browsing, cart management, order placement, Razorpay payments, API integrations, and order-status tracking.",
    technologies: [
      "React Native",
      "JavaScript",
      "REST APIs",
      "Razorpay",
      "Android",
      "iOS",
    ],
    highlights: [
      "Product browsing",
      "Cart and order management",
      "Secure payment integration",
      "Order-status tracking",
    ],
    link:
      "https://play.google.com/store/apps/details?id=com.freshma.customer&hl=en_IN",
    linkText: "View on Google Play",
  },

  {
    title: "DICI – Digital Classroom Infrastructure",
    category: "Education • Video Conferencing",
    description:
      "Developed audio and video conferencing functionality for the DIIS Android application using the Jitsi Meet SDK. Improved cross-module workflows, call lifecycle management, and handling of network fluctuations.",
    technologies: [
      "React Native",
      "Jitsi Meet SDK",
      "Android",
      "WebRTC",
      "JavaScript",
    ],
    highlights: [
      "Audio and video conferencing",
      "Call lifecycle management",
      "Network resilience",
      "Classroom experience improvements",
    ],
  },

  {
    title: "Dimmenxion Chat Application",
    category: "Communication • Real-Time Messaging",
    description:
      "Developed a real-time chat application with WebSocket connectivity and one-to-one SIP-based voice calling. Implemented message synchronization, connection recovery, reconnection logic, and reliable call-state handling.",
    technologies: [
      "React Native",
      "JavaScript",
      "WebSockets",
      "Socket.IO",
      "SIP",
      "Real-Time Communication",
    ],
    highlights: [
      "Real-time messaging",
      "One-to-one voice calling",
      "Connection recovery",
      "Message synchronization",
    ],
  },
];
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container className="projects-container">
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>

        <p className="project-subheading">
          A selection of mobile applications and real-world solutions
          I've contributed to throughout my development career.
        </p>

        <Row className="project-grid">
          {projects.map((project, index) => (
            <Col
              key={project.title}
              xs={12}
              md={6}
              lg={4}
              className="project-card-column"
            >
              <article className="project-card-custom">
                <div className="project-card-top">
                  <div className="project-icon">
                    <FaMobileAlt />
                  </div>
                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="project-category">{project.category}</p>
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="project-tech-badge">
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-card-footer">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGooglePlay />
                      {project.linkText}
                    </a>
                  ) : (
                    <span className="project-private-label">
                      Project experience
                    </span>
                  )}
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
