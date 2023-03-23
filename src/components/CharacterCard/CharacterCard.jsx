import React from "react";

const CharacterCard = ({ character }) => {
  console.log("props from Card:", character);

  return (
    character ? (
      <div>
        <h2>Name: {character.name}</h2>
        <img src={character.image} alt={character.name} />
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
      </div>
    ) : null
  );
};

export default CharacterCard;
