import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
              imgPath={require("../../Assets/streaming.png")}
              isBlog={false}
              title="Streaming Data Analytics with Automated ETL Pipeline"
              description="Built an end-to-end analytics solution inspired by a streaming platform. Designed dimensional warehouse schema, developed Python-based ETL pipelines for data transformation, and executed KPI analysis using SQL. Integrated insights into Power BI dashboards to monitor engagement, churn, and genre performance."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/object.png")}
              isBlog={false}
              title="Real Time Object Detection using YOLO algorithm with Python"
              description="Created a real-time object detection system using the YOLO algorithm in Python. Implemented for accurate detection of specific objects, achieving high precision and recall rates. The system processes video streams to identify and classify objects in real-time, enhancing applications in surveillance and autonomous systems."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/age.png.jpeg")}
              isBlog={false}
              title="Age & Gender Prediction Application"
              description="Developed a full-stack deep learning web application that predicts age and gender from facial images in real-time. Built a custom convolutional neural network by fine tuning ResNet50 with dual classification heads one for gender and one for age group. Designed a RESTful API backend using FastAPI with PyTorch inference.Created a responsive React frontend with Vite featuring live webcam capture with bounding box overlays and image upload functionality."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/chat.png")}
              isBlog={false}
              title="Chatbot for Blind using Python"
              description="Developed a voice-enabled chatbot to assist visually impaired users with daily tasks like playing music, telling time, and delivering news. Implemented speech recognition, text-to-speech, and API integrations for Wikipedia, weather, and news updates to ensure hands-free accessibility."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
