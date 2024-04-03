import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Characters from "./pages/Characters";
import CharacterDisplay from "./components/CharacterDisplay";

import "./index.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
