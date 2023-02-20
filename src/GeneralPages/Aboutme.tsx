import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faFutbol,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  return (
    <Container className="text-center">
      <h1 className="mb-5">Welcome to Chukay!</h1>
      <p className="lead mb-5">
        We are the passionate community of soccer fans, players, and enthusiasts
        who love everything about the beautiful game. Our mission is to bring
        together like-minded individuals from all over the world and create a
        fun and engaging space where we can share our love for soccer.
      </p>
      <Row>
        <Col md={4}>
          <FontAwesomeIcon icon={faUsers} className="fa-4x mb-4" />
          <h3>Community</h3>
          <p>
            We believe that soccer is more than just a sport. It's a way of
            life. It brings people together from different backgrounds and
            cultures, and unites them under a common passion.
          </p>
        </Col>
        <Col md={4}>
          <FontAwesomeIcon icon={faFutbol} className="fa-4x mb-4" />
          <h3>Resources</h3>
          <p>
            Whether you're a seasoned player, a beginner, or just a fan, there's
            a place for you at Chukay. We offer a wide range of resources,
            including articles, videos, and tips, to help you improve your
            skills and knowledge of the game.
          </p>
        </Col>
        <Col md={4}>
          <FontAwesomeIcon icon={faCalendarAlt} className="fa-4x mb-4" />
          <h3>Events</h3>
          <p>
            We also organize events, tournaments, and meetups, where you can
            connect with other soccer enthusiasts and share your experiences.
          </p>
        </Col>
      </Row>
      <hr className="my-5" />
      <h2>Our Team</h2>
      <p className="lead mb-5">
        Our team at Chukay is made up of dedicated professionals who are
        passionate about soccer. We work tirelessly to create a positive and
        engaging community for our members, and we are committed to delivering
        the best possible experience for everyone who joins us.
      </p>
    </Container>
  );
};

export default AboutMe;
