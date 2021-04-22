import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import { BiLink } from "react-icons/bi";
import "bootstrap/dist/css/bootstrap.min.css";

const ProjectPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={12} className="right_box">
          <div className="right_box-title">
            <h2>
              <FontAwesomeIcon icon={faFileCode} />
            </h2>
            <h1>Projects</h1>
          </div>
          <Col className="info_box d-flex">
            <div className="info_box-inner">
              <Col
                xs={12}
                md={6}
                className="info_box-inner-desc info_box-inner-card"
              >
                <h2>
                  Thirdad
                  <a href="https://www.3rdad.com/" target="_blank">
                    <BiLink />
                  </a>
                </h2>
              </Col>
              <Col
                xs={12}
                md={6}
                className="info_box-inner-desc info_box-inner-card"
              >
                <h2>
                  Zentex
                  <a href="https://hamase.github.io/" target="_blank">
                    <BiLink />
                  </a>
                </h2>
              </Col>
              <Col
                xs={12}
                md={6}
                className="info_box-inner-desc info_box-inner-card"
              >
                <h2>
                  Furniture site
                  <a href="https://furniture-web.vercel.app/" target="_blank">
                    <BiLink />
                  </a>
                </h2>
              </Col>
              <Col
                xs={12}
                md={6}
                className="info_box-inner-desc info_box-inner-card"
              >
                <h2>
                  Bidbarg
                  <a href="https://www.bidbarg.com/" target="_blank">
                    <BiLink />
                  </a>
                </h2>
              </Col>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectPage;
