import React from "react";
import CharacterList from "./pages/CharacterList/CharacterList";

import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Main from "./pages/Main/Main";

function App() {
  return (
    <>
      <div className="container-main">
        {/* <CharacterList /> */}
        <NavBar />
        <Main />
      </div>
    </>
  );
}

export default App;
