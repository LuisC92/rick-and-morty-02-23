/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import AddCharacterForm from "../../components/AddCharacterForm/AddCharacterForm";
// import { Link } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";

import CharactersContext from "../../contexts/CharactersContext";

const CharacterList = () => {
  //* save data fetched in a state
  // const [characters, setCharacters] = useState([]);
  const { characters, setCharacters } = useContext(CharactersContext);
  const [searchValue, setSearchValue] = useState("");

  //* fetch Api endpoint using axios.get
  // const getCharacters = () => {
  //   axios
  //     .get("https://rickandmortyapi.com/api/character/")
  //     .then((response) => setCharacters(response.data.results));
  // };

  //* fetch the new endpoint using the value of the search
  const searchCharacters = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
      .then((response) => setCharacters(response.data.results));
  };

  //* for each value that has been insert, save it on a state
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  //* when the components mount, fetch data from the Api
  // useEffect(() => {
  //   getCharacters();
  // }, []);

  //* when the state changes, update the component
  useEffect(() => {
    searchCharacters();
  }, [searchValue]);

  //*/ function to submit

  const handleSubmit = (event, addCharacter) => {
    event.preventDefault();
    //! in case of need to add an unique id to the new created character
    // console.log("id:", uuidv4());
    // const newCharacter = { id: uuidv4(), ...addCharacter };
    // console.log("list", newCharacter);
    // setCharacters([newCharacter, ...characters]);
    setCharacters([addCharacter, ...characters]);
  };

  return (
    <div>
      {/* 
      //* 1st step use the button to fetch data on Click
      <button onClick={() => getCharacters()}>Fetch Characters</button> 
    */}
      <div className="header-container">
    <h1>Characters List</h1>
        <SearchBar handleChange={handleChange} searchValue={searchValue} />
        <AddCharacterForm handleSubmit={handleSubmit} />
      </div>
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center mt-5 mb-5">
        {/*//* render data inside cards using map() to iterate all elements fetched */}
         {characters
          ? // * render data inside cards using map() to iterate all elements fetched
            characters.map((character) => (
              // <Link key={character.id} to={`/characters/${character.id}`}>
                <div key={character.id}>
                  <CharacterCard character={character} />
                </div>
              // </Link>
            ))
          : null}
      </div>
    </div>
  );
};

export default CharacterList;
