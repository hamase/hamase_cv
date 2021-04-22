import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const EducationPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={12} className="right_box">
          <div className="right_box-title">
            <h2>
              <FontAwesomeIcon icon={faSchool} />
            </h2>
            <h1>Education</h1>
          </div>
          <Col className="info_box d-flex justify-content-center">
            <div className="info_box-inner">
              <Col
                xs={12}
                md={6}
                className="info_box-inner-desc info_box-inner-card"
              >
                <h2>Bachelor's degree in Software Engineering</h2>
                <h2>University of Tabarestan</h2>
                <h5>09/2009 – 09/2011</h5>
                <h5>Chalous, Mazandaran, Iran</h5>
              </Col>
              <Col
                xs={12}
                md={6}
                className="info_box-inner-desc info_box-inner-card"
              >
                <h2>Associate's Degree in Software Engineering</h2>
                <h2>University of Eslamshahr</h2>
                <h5>09/2005 – 01/2008</h5>
                <h5>Eslamshahr, Tehran, Iran</h5>
              </Col>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default EducationPage;
