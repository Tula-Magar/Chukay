import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const PeopleEngagement = () => {
  return (
    <section id="fan-engagement" className="my-5 py-5">
      <Container>
        <h2 className="text-center mb-5">Engage With US</h2>
        <Row className="text-dark">
          <Col sm={6} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title>Join Our Fan Club</Card.Title>
                <Card.Text>
                  Sign up for our fan club to get the latest news and updates
                  about our team.
                </Card.Text>
                <Button variant="primary">Join Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title>Connect with Us on Social Media</Card.Title>
                <Card.Text>
                  Follow us on social media to stay up to date on all the latest
                  news and game highlights.
                </Card.Text>
                <Button variant="primary">Follow Us</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PeopleEngagement;
