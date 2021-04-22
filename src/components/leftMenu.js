import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSchool,
  faBriefcase,
  faTools,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const LeftMenu = () => {
  return (
    <Navbar collapseOnSelect expand="md" variant="dark" className="left_nav">
      <Navbar.Brand>
        <img src="" className="left_nav-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="left_nav-collapse">
        <Nav className="mr-auto left_nav-collapse-items">
          <NavLink to="/">
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
          <NavLink to="/education">
            <FontAwesomeIcon icon={faSchool} />
          </NavLink>
          <NavLink to="/work">
            <FontAwesomeIcon icon={faBriefcase} />
          </NavLink>
          <NavLink to="/skills">
            <FontAwesomeIcon icon={faTools} />
          </NavLink>
          <NavLink to="/projects">
            <FontAwesomeIcon icon={faFileCode} />
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default LeftMenu;
