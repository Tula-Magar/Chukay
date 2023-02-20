import { Container, Row, Col, Card } from "react-bootstrap";

function Testimonials() {
  const PeopleTestimonials = [
    {
      id: 1,
      name: "John Doe",
      comment:
        "I've been a member of Chukay for several months now and I can honestly say it's been one of the best decisions I've made as a soccer fan. The community is so supportive and welcoming, and I've made so many great connections with people from all over the world. The resources and events they offer have helped me improve my skills and knowledge of the game, and I can't wait to see what the future holds for this amazing community.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Jane Smith",
      comment:
        "Chukay has been an absolute game-changer for me. As a beginner player, I was intimidated to join a soccer team, but Chukay provided me with the resources and support I needed to build my confidence and start playing. I've made so many new friends and have even participated in some of their tournaments, which have been incredibly fun and rewarding experiences.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      name: "Bob Johnson",
      comment:
        "I started following Chukay on social media a few months ago and I was immediately impressed by their content and their mission. I decided to join their community and I'm so glad I did. The events they organize are top-notch and the resources they provide have been incredibly helpful in improving my skills as a player. I highly recommend Chukay to anyone who loves soccer and wants to be part of a supportive and engaged community.",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <section id="player-profiles" className="my-5 py-5">
      <Container className="my-5 py-5">
        <h2 className="text-center mb-5">Testimonials</h2>
        <Row>
          {PeopleTestimonials.map((testimonial) => (
            <Col sm={12} md={6} lg={4} className="mb-4" key={testimonial.id}>
              <Card className="h-100 player-card mb-4 text-dark">
                <Card.Img variant="top" src={testimonial.image} />
                <Card.Body>
                  <Card.Text className="mt-4">{testimonial.comment}</Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">
                    {"- "}
                    {testimonial.name}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
