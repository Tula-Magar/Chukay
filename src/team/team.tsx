import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import teamData from '../data/teamData';

function Team() {
    const [selectedTeam, setSelectedTeam] = useState<TeamData | null>(null);
  
    const handleSelectTeam = (team: TeamData) => {
      setSelectedTeam(team);
    };
  
    const handleDeselectTeam = () => {
      setSelectedTeam(null);
    };
  
    return (


      <Container>
        <h1>Chukay Soccer Club</h1>
        {selectedTeam ? (
          <TeamDetail team={selectedTeam} onDeselect={handleDeselectTeam} />
        ) : (
          <TeamList teams={teamData} onSelect={handleSelectTeam} />
        )}
      </Container>

    );
  }
  
  type TeamListProps = {
    teams: TeamData[];
    onSelect: (team: TeamData) => void;
  };
  
  function TeamList(props: TeamListProps) {
    const { teams, onSelect } = props;
  
    return (
      <Row>
        {teams.map((team) => (
          <Col key={team.id} sm={6} md={4} lg={3}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{team.name}</Card.Title>
                <Card.Text>Coach: {team.coach}</Card.Text>
                <Button onClick={() => onSelect(team)}>View Team</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
  
  
  type TeamDetailProps = {
    team: TeamData;
    onDeselect: () => void;
  };
  
  function TeamDetail(props: TeamDetailProps) {
    const { team, onDeselect } = props;
  
    return (
      <div>
        <h2>{team.name}</h2>
        <p>Coach: {team.coach}</p>
        <ul>
          {team.players.map((player) => (
            <li key={player}>{player}</li>
          ))}
        </ul>
        <Button onClick={onDeselect}>Back to Team List</Button>
      </div>
    );
  }
  
  type TeamData = {
    id: number;
    name: string;
    coach: string;
    players: string[];
  };
  
  export default Team;