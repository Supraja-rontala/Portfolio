import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython } from "react-icons/di";
import { SiMysql, SiNumpy, SiPandas, SiTableau, SiPowerbi, SiMicrosoftexcel, SiAmazonaws } from "react-icons/si";
import { FaUsers, FaComments, FaLightbulb, FaCalculator } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      {/* Libraries */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>
      {/* VI Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      {/* Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <FaCalculator title="MATLAB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
      </Col>
      {/* Soft Skills */}
      <Col xs={4} md={2} className="tech-icons">
        <FaLightbulb title="Problem solving" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaUsers title="Team collaboration" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaComments title="Effective communication" />
      </Col>
      {/* Cloud Platforms */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws title="AWS (S3, Glue, Redshift)" />
      </Col>
    </Row>
  );
}

export default Techstack;
