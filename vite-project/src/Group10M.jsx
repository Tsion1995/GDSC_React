import React from 'react';

const Group10M = () => {
  const members = [
    'Selam',
    'Kidus',
    'leul',
    'Titu',
    'Beki',
    'Tsi',
    'Sif',
    'Mercy',
    'Beki',
    'Fikir'
  ];

  return (
    <div>
      <h2>Group 10 Members</h2>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default Group10M;