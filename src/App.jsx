import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Header from "./components/Header";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Comics from "./pages/Comics";
import Favourites from "./pages/Favourites";
import axios from "axios";

import "./index.css";

function App() {
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWM5ZTA5MzQyNDFjYTAwMTVjY2JiZmEiLCJlbWFpbCI6ImdhYnJpZWwubGUucm95MDZAZ21haWwuY29tIiwiZXhwaXJhdGlvbkRhdGUiOiIyMDI0LTA4LTE0VDIyOjAwOjAwLjAwMFoiLCJpc1RyYWluaW5nIjp0cnVlLCJpYXQiOjE3MTI4Mzc0NDZ9.7RhGIiHDUccEHE6scjSnWZY-A3NZgOc6IqMizJN56Qs";

  const [datas, setDatas] = useState([]);
  const fetchPopularMovies = async () => {
    const response = await axios.get(
      `https://lereacteur-bootcamp-api.herokuapp.com/api/allocine/movies/popular`,
      {
        headers: {
          authorization: `Bearer ${apiKey}`,
        },
      }
    );
    setDatas(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    fetchPopularMovies();
  }, []);
  return (
    <>
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
