import React from "react";
import "./styles/Footer.css";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <div id="c">
            <h3>Trackr</h3>
            <p>
              Trackr started off as an idea for simply tracking items and expenses.
              Now it is off to help the world track it's expenses, items, problems, and more !
              Trackr is still developing features to help create an amazing dashboard
              ®Trackr 2021
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
