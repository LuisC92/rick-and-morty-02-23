import React from "react";

const CharacterCard = ({ character }) => {
//   console.log("props from Card:", character);

  return (
    character ? (
      <div>
        <img src={character.image} alt={character.name} />
        <h3>Name: {character.name}</h3>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
      </div>
    ) : null
  );
};

export default CharacterCard;
