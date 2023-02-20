import { Container, Row, Col, Card } from "react-bootstrap";

const playerProfiles = [
  {
    id: 1,
    name: "John Doe",
    position: "Forward",
    bio: "Lorem ipsum dolorasssssssssssssssssssssssssssssssssss sit amet, consectetur adipiscing elit. Sed tempus lacinia felis in euismod. Nullam placerat, metus nec maximus aliquet, ex elit maximus magna, ac pretium mauris purus quis velit.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Midfielder",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus lacinia felis in euismod. Nullam placerat, metus nec maximus aliquet, ex elit maximus magna, ac pretium mauris purus quis velit.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Bob Johnson",
    position: "Defender",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus lacinia felis in euismod. Nullam placerat, metus nec maximus aliquet, ex elit maximus magna, ac pretium mauris purus quis velit.",
    image: "https://via.placeholder.com/300",
  },
];

const PlayerProfiles = () => {
  return (
    <section id="player-profiles" className="my-5 py-5">
      <Container>
        <h2 className="text-center mb-5">Player Profiles</h2>
        <Row>
          {playerProfiles.map((player) => (
            <Col sm={12} md={6} lg={4} key={player.id}>
              <Card className="h-100 player-card mb-4 text-dark">
                <Card.Img variant="top" src={player.image} />
                <Card.Body>
                  <Card.Title>{player.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {player.position}
                  </Card.Subtitle>
                  <Card.Text className="mt-4">{player.bio}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PlayerProfiles;
