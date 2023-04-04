import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
    // console.log("props from Card:", character);

  const { id, image, name, status, species } = character;

  return (
    <div className="card m-3">
      <img className="card-img-top" src={image} alt={name} />
      <div className="card-body">
        <h5 className="card-title">Name: {name}</h5>
        <p className="card-text">Status: {status}</p>
        <p className="card-text">Species: {species}</p>
       { id ? <Link to={`/characters/${id}`}>
          <button className="btn btn-dark">See more</button>
        </Link> :  <button className="btn btn-dark">See more</button> }
      </div>
    </div>
  )
};

export default CharacterCard;
