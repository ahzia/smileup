import React from 'react';

const LeaderboardPage = () => {
  const leaders = [
    { name: 'John Doe', score: 120 },
    { name: 'Jane Smith', score: 100 },
    { name: 'Alice Johnson', score: 90 },
  ];

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaders.map((leader, index) => (
          <li key={index}>
            {index + 1}. {leader.name} - {leader.score} Smile Tokens
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaderboardPage;
