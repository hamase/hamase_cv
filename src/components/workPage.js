import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const WorkPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={12} className="right_box">
          <div className="right_box-title">
            <h2>
              <FontAwesomeIcon icon={faBriefcase} />
            </h2>
            <h1>Work Experience</h1>
          </div>
          <Col className="info_box d-md-flex justify-content-center">
            <div className="info_box-inner d-md-flex align-content-start">
              <Col
                xs={12}
                sm={12}
                md={10}
                className="info_box-inner-desc info_box-inner-card"
              >
                <h2>Front-end Developer</h2>
                <h2>Freelance</h2>
                <h5>05/2015 – present</h5>
                <h5>Tehran, Iran</h5>
                <h5>Develope website for customers</h5>
                <h5>
                  <b>Skills: </b>
                  <h6>
                    HTML, CSS, JavaScript, JQuery, Bower, Materialize,
                    Foundation, Bootstrap, Grunt, Gulp, Git, Reactjs, antd,
                    React Bootstrap
                  </h6>
                </h5>
                <h5>
                  <b>Projects: </b>
                  <h6>Thirdad, Zentex, Bidbarg</h6>
                </h5>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={10}
                className="info_box-inner-desc info_box-inner-card"
              >
                <h2>Front-end Developer</h2>
                <h2>GSS</h2>
                <h5>02/2017 – 06/2020</h5>
                <h5>Tehran, Iran</h5>
                <h5>
                  Development of banking devices' software such as VTM, ATM, CRS
                  and Cashless devices. Development of monitoring softwares for
                  banking devices
                </h5>
                <h5>
                  <b>Skills: </b>
                  <h6>
                    HTML, CSS, JavaScript, JSF, ExtJs, JSX, Reactjs, antd, Git,
                    Bash Script
                  </h6>
                </h5>
                <h5>
                  <b>Projects: </b>
                  <h6>
                    SMS Panel, Bus Ticket Cancelation Backoffice, Faradid
                    Monitoring, Atlas Application
                  </h6>
                </h5>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={10}
                className="info_box-inner-desc info_box-inner-card"
              >
                <h2>Software Tester</h2>
                <h2>Parspooyesh Fanavar</h2>
                <h5>06/2013 – 03/2015</h5>
                <h5>Tehran, Iran</h5>
                <h5>
                  developed unit test by Python and Selenium for website, to
                  does some work as automate. Like login, add user, add group,
                  etc.
                </h5>
                <h5>
                  <b>Skills: </b>
                  <h6>Python, Selenium, HTML, CSS</h6>
                </h5>
                <h5>
                  <b>Projects: </b>
                  <h6>IBSng, PCC</h6>
                </h5>
              </Col>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default WorkPage;
