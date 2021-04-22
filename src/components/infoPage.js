import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaSkype } from "react-icons/fa";
import { FiGitlab } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import "bootstrap/dist/css/bootstrap.min.css";
import profile from "../assets/img/profile.jpg";

export default class InfoPage extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={12} className="right_box">
            <Col md={12} className="info_box">
              <div className="info_box--img img-responsive">
                <img src={profile} />
              </div>
              <div className="info_box--desc">
                <h2>Hi, I'm Hamase Shah Abbaspour</h2>
                <h5>
                  I'm a Front-end Developer, I really enjoy to learn new things
                  and apply them to my projects. <br />I learn everything
                  through self-study. I started my career in 2013 by working
                  with Selenium, Python, HTML and CSS. <br />
                  Then I started working professionally with JQuery and
                  Javascript. <br />
                  And now, I have been working as a freelance with ReactJS and
                  React Native for more than a year.
                </h5>
              </div>
              <div className="info_box--social">
                <a href="mailto: hamase86@gmail.com" target="_blank">
                  <SiGmail />
                  Gmail
                </a>
                <a href="skype:hamase?chat" target="_blank">
                  <FaSkype />
                  Skype
                </a>
                <a
                  href="https://linkedin.com/in/hamaseshahabbaspour"
                  target="_blank"
                >
                  <FaLinkedin />
                  Linkedin
                </a>
                <a href="https://github.com/hamase" target="_blank">
                  <FaGithub />
                  Github
                </a>
                <a href="https://gitlab.com/hamase" target="_blank">
                  <FiGitlab />
                  Gitlab
                </a>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}
