import React from "react";
import "./styles/Footer.css";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <div id="c">
            <h3>Sociability</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
          </div>
          <div className="links">
            <div className="column">
              <h3>Explore</h3>
              <ul>
                <li>
                  <a href="#Home">Home</a>
                </li>
                <li>
                  <a href="#Pricing">Pricing</a>
                </li>
                <li>
                  <a href="#About Us">About</a>
                </li>
                <li>
                  <a href="#Careers">Careers</a>
                </li>
              </ul>
            </div>
            <div className="column">
              <h3>Visit</h3>
              <ul>
                <li>
                  <a href="#demo">Demo</a>
                </li>
                <li>
                  <a href="#youtube">YouTube</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
              </ul>
            </div>
            <div className="column">
              <h3>Follow</h3>
              <ul>
                <li>
                  <a href="#twitter">Twitter</a>
                </li>
                <li>
                  <a href="#instagram">Instagram</a>
                </li>
                <li>
                  <a href="#linkedIn">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
