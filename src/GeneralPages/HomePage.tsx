import React from "react";
import { Container, Row, Col, Card, CardGroup, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SoccerPlayer from "../images/soccerplayer.svg";
import "../styles/HomePage.css";
import PlayerProfiles from "./PlayerProfiles";
import PeopleEngagement from "./PeopleEngagement";

const HomePage = () => {
  const statistics = [
    { title: "Matches Played", value: 25 },
    { title: "Wins", value: 18 },
    { title: "Draws", value: 4 },
    { title: "Losses", value: 3 },
    { title: "Goals Scored", value: 65 },
    { title: "Goals Conceded", value: 25 },
  ];

  const news = [
    {
      id: 1,
      title: "New Feature Release",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "January 10, 2023",
    },
    {
      id: 2,
      title: "Upcoming Event",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "February 15, 2023",
    },
    {
      id: 3,
      title: "Holiday Schedule",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "March 20, 2023",
    },
  ];

  const schedule = [
    {
      id: 1,
      date: "2023-03-15",
      time: "7:00 PM",

      opponent: "Lakers",
      location: "Scotiabank Arena",
      status: "upcoming",
    },
    {
      id: 2,
      date: "2023-03-20",
      time: "3:00 PM",
      opponent: "Lakers",

      location: "Staples Center",
      status: "upcoming",
    },
    {
      id: 3,
      date: "2023-03-25",
      time: "8:00 PM",
      opponent: "Warriors",

      location: "Chase Center",
      status: "upcoming",
    },
    {
      id: 4,
      date: "2023-04-01",
      time: "7:30 PM",
      opponent: "76ers",

      location: "Wells Fargo Center",
      status: "upcoming",
    },
    {
      id: 5,
      date: "2023-04-07",
      time: "7:00 PM",
      opponent: "Spurs",

      location: "AT&T Center",
      status: "upcoming",
    },
    {
      id: 6,
      date: "2023-04-10",
      time: "2:30 PM",
      opponent: "Knicks",

      location: "Madison Square Garden",
      status: "upcoming",
    },
    {
      id: 7,
      date: "2023-04-14",
      time: "8:00 PM",
      opponent: "Clippers",

      location: "Staples Center",
      status: "upcoming",
    },
  ];

  return (
    <div>
      <Container className="test">
        <h1 className="HomeWelcome mt-5">
          <i> Welcome to My Website </i>
        </h1>
        <img
          src={SoccerPlayer}
          style={{ width: "100%", height: "65vh" }}
          alt="soccer player not found"
        />
        <h1 className="HomeBest mb-n5">We Are The Best Team</h1>
      </Container>

      <Container className="chukay-container my-5 py-5 d-lg-none d-xl-none d-sm-block d-md-block  ">
        <CardGroup className="gy-5 row-eq-height gap-3">
          <Card className="text-dark chukay-card">
            <Card.Body>
              <Card.Title className="chukay-heading">Chukay Soccer</Card.Title>
              <Card.Text className="chukay-paragraph">
                is a premier soccer club that is dedicated to providing a
                high-quality soccer experience for players of all ages and skill
                levels. Our mission is to promote a passion for the sport of
                soccer and to foster a culture of excellence, respect, and
                teamwork.
              </Card.Text>
              <Card.Text className="chukay-paragraph">
                We believe that soccer is more than just a sport – it’s a way of
                life. Our club is a community of soccer enthusiasts who share a
                love for the game and a commitment to upholding the highest
                standards of sportsmanship and fair play.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="text-dark chukay-card2">
            <Card.Body>
              <Card.Title className="chukay-heading">
                At Chukay Soccer,
              </Card.Title>
              <Card.Text className="chukay-paragraph">
                At Chukay Soccer, we offer a range of programs and services,
                including youth soccer leagues, adult leagues, clinics, camps,
                and personalized training sessions. Our experienced coaches and
                staff are committed to helping each player achieve their full
                potential, both on and off the field.
              </Card.Text>
              <Card.Text className="chukay-paragraph">
                Whether you’re a beginneror an experienced player, Chukay Soccer
                has something to offer you. Come join us and experience the
                excitement and camaraderie of playing soccer with one of the
                best clubs around!
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
      <Container className="chukay-container my-5 py-5 d-flex justify-content-center d-none d-md-none d-lg-block ">
        <Row className="gy-5 row-eq-height ">
          <Col sm={4}>
            <Card className=" text-dark chukay-card">
              <Card.Body>
                <Card.Title className="chukay-heading">
                  Chukay Soccer
                </Card.Title>
                <Card.Text className="chukay-paragraph">
                  is a premier soccer club that is dedicated to providing a
                  high-quality soccer experience for players of all ages and
                  skill levels. Our mission is to promote a passion for the
                  sport of soccer and to foster a culture of excellence,
                  respect, and teamwork.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className=" text-dark chukay-card2">
              <Card.Body>
                <Card.Title className="chukay-heading">We believe</Card.Title>
                <Card.Text className="chukay-paragraph">
                  We believe that soccer is more than just a sport – it’s a way
                  of life. Our club is a community of soccer enthusiasts who
                  share a love for the game and a commitment to upholding the
                  highest standards of sportsmanship and fair play.
                </Card.Text>
                <Card.Text className="chukay-paragraph">
                  At Chukay Soccer, we offer a range of programs and services,
                  including youth soccer leagues, adult leagues, clinics, camps,
                  and personalized training sessions. Our experienced coaches
                  and staff are committed to helping each player achieve their
                  full potential, both on and off the field.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="text-dark chukay-card3">
              <Card.Body>
                <Card.Title className="chukay-heading">
                  Whether you’re a beginner
                </Card.Title>
                <Card.Text className="chukay-paragraph">
                  or an experienced player, Chukay Soccer has something to offer
                  you. Come join us and experience the excitement and
                  camaraderie of playing soccer with one of the best clubs
                  around!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="my-5 py-5 text-center">
        <h2 className="my-5">Season Statistics</h2>
        <Row className="justify-content-center">
          {statistics.map((statistic, index) => (
            <Col md={4} key={index}>
              <div className="statistic-box">
                <h3 className="statistic-title">{statistic.title}</h3>
                <h1 className="statistic-value">{statistic.value}</h1>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="my-5 py-5">
        <h2 className="my-5 ">Trophies and Awards</h2>
        <CardGroup className="gy-5 row-eq-height gap-3">
          <Card className="text-dark">
            <Card.Body>
              <Card.Title>League Championship</Card.Title>
              <Card.Text>Seasons won: 2019, 2021</Card.Text>
            </Card.Body>
          </Card>
          <Card className="text-dark">
            <Card.Body>
              <Card.Title>Cup Championship</Card.Title>
              <Card.Text>Seasons won: 2020</Card.Text>
            </Card.Body>
          </Card>
          <Card className="text-dark">
            <Card.Body>
              <Card.Title>Golden Boot</Card.Title>
              <Card.Text>Player: John Doe</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
      <section id="news-and-updates" className="mt-5 py-5">
        <Container>
          <h2 className="text-center mb-5">News and Updates</h2>
          <Row>
            {news.map((item) => (
              <Col md={6} lg={4} key={item.id} className="text-dark my-2">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.content}</Card.Text>
                    <Card.Subtitle className="text-muted">
                      {item.date}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="schedule" className="py-5">
        <Container className="my-5 py-5">
          <h2 className="text-center mb-5">Schedule</h2>
          <Table
            responsive
            striped
            bordered
            hover
            className="bg-secondary text-white text-center"
          >
            <thead className="bg-success">
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Opponent</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((game) => (
                <tr key={game.id}>
                  <td>{game.date}</td>
                  <td>{game.time}</td>
                  <td>{game.opponent}</td>
                  <td>{game.location}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
        <PlayerProfiles />
        <PeopleEngagement />
      </section>
    </div>
  );
};

export default HomePage;
