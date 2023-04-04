import { createContext, useState, useEffect } from "react";
import axios from "axios";

const CharactersContext = createContext();

export default CharactersContext;

export const CharactersContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  //* fetch Api endpoint using axios.get
  const fetchCharacters = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => setCharacters(response.data.results));
  };

  //* when the components mount, fetch data from the Api
  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <CharactersContext.Provider value={{ characters, setCharacters }}>
      {children}
    </CharactersContext.Provider>
  );
};
