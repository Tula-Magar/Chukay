import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{ fontSize: "12px" }}
      className="bg-dark text-light text-center mt-5 py-5"
    >
      <Container>
        <Row>
          <Col md={6} lg={3} className="mb-3 h-100">
            <h5>About Us</h5>
            <p>
              We are the professional football team dedicated to winning
              championships and providing an exciting experience for our fans.
            </p>
          </Col>
          <Col md={6} lg={3} className="mb-3 h-100">
            <h5>Latest News</h5>
            <ul className="list-unstyled">
              <li>
                <HashLink
                  className="text-decoration-none"
                  to="/#news-and-updates"
                >
                  New Head Coach Announced
                </HashLink>
              </li>
              <li>
                <HashLink className="text-decoration-none" to="#">
                  Star Player Injured
                </HashLink>
              </li>
              <li>
                <HashLink className="text-decoration-none" to="#">
                  Team Advances to Finals
                </HashLink>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3} className="mb-3 h-100">
            <h5>Connect with Us</h5>
            <ul className="list-unstyled">
              <li>
                <Link className="text-decoration-none" to="#">
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="#">
                  <FontAwesomeIcon icon={faTwitter} /> Twitter
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="#">
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3} className="mb-3 h-100">
            <h5>
              <Link className="text-decoration-none" to="/contact">
                Contact Us
              </Link>
            </h5>
            <ul className="list-unstyled">
              <li> Email: example@example.com</li>
              <li> Phone: (123) 456-7890</li>
            </ul>
            <address>
              1234 Main St
              <br />
              Anytown, USA 12345
            </address>
          </Col>
        </Row>
      </Container>
      <div className="bg-dark py-3 mb-5">
        <Container>
          <p className="text-center text-white mb-5">Copyright © 2023</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
