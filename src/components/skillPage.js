import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default class SkillPage extends Component {
  state = {
    titles: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3004/skill")
      .then((res) => res.data)
      .then((data) => {
        this.setState({ titles: data });
      });
  }

  render() {
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
                {this.state.titles.length === 0
                  ? "Loading ..."
                  : this.state.titles.map((title, i) => (
                      <Col
                        xs={12}
                        md={12}
                        className="info_box-inner-desc info_box-inner-card"
                        key={i}
                      >
                        <ul>
                          {title.sklName.map((item, index) => (
                            <li key={index}>
                              <h2>{item.sklTitle}</h2>
                              <ul className="info_box-inner-desc-skill">
                                {item.lists.map((items) => (
                                  <li>{items.name}</li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </Col>
                    ))}
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}
