interface TeamData {
    id: number;
    name: string;
    coach: string;
    players: string[];
  }
  
  const teamData: TeamData[] = [
    {
      id: 1,
      name: 'Chukay United',
      coach: 'John Doe',
      players: ['Player 1', 'Player 2', 'Player 3'],
    },
    {
      id: 2,
      name: 'Chukay City',
      coach: 'Jane Doe',
      players: ['Player 4', 'Player 5', 'Player 6'],
    },
    {
      id: 3,
      name: 'Chukay Athletic',
      coach: 'Bob Smith',
      players: ['Player 7', 'Player 8', 'Player 9'],
    },
  ];
  
  export default teamData;
  