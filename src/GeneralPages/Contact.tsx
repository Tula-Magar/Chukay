import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import ContactFAQ from "./ContactFAQ";

const Contact = () => {
  return (
    <>
      <Container className="text-center my-5 py-5">
        <h1 className="mb-5">Contact Us</h1>
        <Row>
          <Col md={4}>
            <FontAwesomeIcon icon={faEnvelope} className="fa-3x mb-3" />
            <h3>Email</h3>
            <p>contact@chukay.com</p>
          </Col>
          <Col md={4}>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-3x mb-3" />
            <h3>Address</h3>
            <p>
              1234 Soccer Way
              <br />
              City, State 12345
              <br />
              United States
            </p>
          </Col>
          <Col md={4}>
            <FontAwesomeIcon icon={faPhone} className="fa-3x mb-3" />
            <h3>Phone</h3>
            <p>(123) 456-7890</p>
          </Col>
        </Row>
        <hr className="my-5" />
        <h2>Get in Touch</h2>
        <p className="lead mb-5">
          Do you have a question, comment, or suggestion? Please use the form
          below to contact us.
        </p>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formName  ">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEmail  ">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formSubject  ">
            <Form.Label className="mt-4">Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter your subject" />
          </Form.Group>
          <Form.Group controlId="formMessage ">
            <Form.Label className="mt-4">Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter your message"
            />
          </Form.Group>
          <Button variant="primary" className="my-4" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <ContactFAQ />
    </>
  );
};

export default Contact;
