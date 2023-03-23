import React, { useState } from "react";
import axios from "axios";

import CharacterCard from "./components/CharacterCard/CharacterCard";

import "./App.css";

function App() {
  const [characters, setCharacters] = useState();
  
  //! set the function to be called when the button is clicked
  const fetchCharacters = () => {
    axios
    .get("https://rickandmortyapi.com/api/character")
    .then((response) => setCharacters(response.data.results));
  };
  
  return (
    <div>
      <h1>Rick & Morty</h1>
      {/* Click a button to display a list of characters.
      (handling events) */}
      <button onClick={fetchCharacters}>Get Characters List</button>
      {characters
        ? characters.map((character) => (
            <div key={character.id}>
              <CharacterCard character={character} />
            </div>
          ))
        : null}
        {/* Another way of doing the ternary op (not recommended) */}
      {/* { characters && characters.map((character) => (
        <CharacterCard character={character} />
      ))} */}
    </div>
  );
}

export default App;

