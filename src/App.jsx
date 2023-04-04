import React from "react";

import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";

import { CharactersContextProvider } from "./contexts/CharactersContext";

function App() {
  return (
    <>
      <CharactersContextProvider>
        <NavBar />
        <div className="container-main">
          {/* <CharacterList /> */}
          <Main />
        </div>
        <Footer />
      </CharactersContextProvider>
    </>
  );
}

export default App;
