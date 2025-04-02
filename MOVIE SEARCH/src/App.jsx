import React from "react";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MoiveList";

const API_KEY = "5536a2b1";

const App = () => {
  const [movies, setMoives] = useState([]);

  const searchMovies = async (query) => {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
    );
    const data = await response.json();
    setMoives(data.Search || []);
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-5">Movie Search App 🎬</h1>
      <SearchBar onSearch={searchMovies} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
