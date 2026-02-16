import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
              Motivated Computer Science graduate student with a focus on data science, machine learning, and AI. Skilled I n Python, algorithms, and data structures
with hands-on experience in AI/ML model development. Passionate about solving real-world problems through data-driven and software-based solutions.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python, Tableau... </b>
              </i>
              <br />
              <br />
              I’m an enthusiastic Data Scientist with a strong foundation in data analysis and machine learning, specializing in extracting insights from complex datasets and building predictive models using tools like Python, R, and SQL to drive data-driven decision-making.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/supraja-rontala"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/supraja-rontala-9a1b4b1b3/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:suprajarontala615@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <MdEmail style={{ fontSize: "2.1em", verticalAlign: "middle" }} />
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
