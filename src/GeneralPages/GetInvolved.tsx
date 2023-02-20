import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function GetInvolved() {
  return (
    <section
      id="get-involved"
      className="my-5 py-5 text-dark"
      style={{ backgroundColor: "#FFDAB9" }}
    >
      <Container>
        <h2 className="text-center mb-5">How to Get Involved with Chukay</h2>

        <Row>
          <Col md={8} className="mx-auto">
            <p className="lead  pb-5">
              If you're a soccer fan looking to get more involved with the
              sport, Chukay is a great community to be a part of. Here are some
              steps to get started:
            </p>
            <ul>
              <li className="mb-3">
                Visit the Chukay website and explore the different resources and
                events they offer. You can find everything from online
                skill-building courses to local soccer tournaments.
              </li>
              <li className="mb-3">
                Join the Chukay community on social media to connect with other
                fans and stay up-to-date on the latest news and events.
              </li>
              <li className="mb-3">
                Attend a local Chukay event or tournament to meet other players
                and learn from experienced coaches.
              </li>
              <li className="mb-3">
                Consider becoming a Chukay member to gain access to exclusive
                resources and discounts on events and merchandise.
              </li>
            </ul>
            <p className="lead   pt-5">
              No matter what level you're at as a soccer player, Chukay is a
              welcoming and supportive community that can help you improve your
              skills and make meaningful connections with other fans.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default GetInvolved;
