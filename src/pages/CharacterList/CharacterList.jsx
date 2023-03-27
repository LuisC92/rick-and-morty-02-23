/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import SearchBar from "../../components/SearchBar/SearchBar";

const CharacterList = () => {
  
  //* save data fetched in a state
  const [characters, setCharacters] = useState();
  const [search, setSearch] = useState("");

  //* fetch Api endpoint using axios.get
  const fetchCharacters = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => setCharacters(response.data.results));
  };

  //* fetch the new endpoint using the value of the search
  const searchCharacters = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then((response) => setCharacters(response.data.results));
  };

  //* for each value that has been insert, save it on a state
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  //* when the components mount, fetch data from the Api
  useEffect(() => {
    fetchCharacters();
  }, []);

  //* when the state changes, update the component
  useEffect(() => {
    searchCharacters();
  }, [search, searchCharacters]);

  return (
    <div>
      <h1>Characters List</h1>
      <SearchBar search={search} handleChange={handleChange} />
      {/* //* 1st step use the button to fetch data on Click */}
      {/* Click a button to display a list of characters.
      (handling events) */}
      {/* <button onClick={fetchCharacters}>Get Characters List</button> */}
      {characters
        // * render data inside cards using map() to iterate all elements fetched
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
};

export default CharacterList;
