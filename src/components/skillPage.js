import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SkillPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={12} className="right_box">
          <div className="right_box-title">
            <h2>
              <FontAwesomeIcon icon={faTools} />
            </h2>
            <h1>Skills</h1>
          </div>
          <Col className="info_box d-flex justify-content-center">
            <div className="info_box-inner">
              <Col
                xs={12}
                md={12}
                className="info_box-inner-desc info_box-inner-card"
              >
                <ul>
                  <li>
                    <h2>JS Framework/Library</h2>
                    <ul className="info_box-inner-desc-skill">
                      <li>ReactJs</li>
                      <li>React Native</li>
                      <li>JavaScript</li>
                      <li>Nextjs</li>
                    </ul>
                  </li>

                  <li>
                    <h2>CSS Framework</h2>
                    <ul className="info_box-inner-desc-skill">
                      <li>CSS3</li>
                      <li>Sass</li>
                      <li>Less</li>
                      <li>Bootstrap</li>
                      <li>Foundation</li>
                      <li>Materialize</li>
                      <li>Antd</li>
                    </ul>
                  </li>

                  <li>
                    <h2>Package Manager/Bundler</h2>
                    <ul className="info_box-inner-desc-skill">
                      <li>NPM</li>
                      <li>Gulp</li>
                      <li>Grunt</li>
                      <li>Bower</li>
                      <li>Webpack</li>
                    </ul>
                  </li>

                  <li>
                    <h2>OS</h2>
                    <ul className="info_box-inner-desc-skill">
                      <li>Linux</li>
                      <li>Windows</li>
                    </ul>
                  </li>

                  <li>
                    <h2>Version Control</h2>
                    <ul className="info_box-inner-desc-skill">
                      <li>Git</li>
                    </ul>
                  </li>
                </ul>
              </Col>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default SkillPage;
