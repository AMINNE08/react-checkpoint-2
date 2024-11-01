import React from 'react';
import Card from 'react-bootstrap/Card';

function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {
  return (
    <Card style={{ width: '250px', height: '400px', margin: '10px', textAlign: 'center' }}>
      <Card.Img
        variant="top"
        src={imageUrl}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover' 
        }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team} <br />
          Nationality: {nationality} <br />
          Jersey Number: {jerseyNumber} <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Player;
