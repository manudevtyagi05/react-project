import React from "react";
import { useState } from "react";

const App = () => {
  const API_KEY = "e80bf3438decb18bf0f81e30b10a64af";

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    if (!city) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      console.log(data);
      if (data.cod === 200) {
        setWeather(data);
        setError("");
      } else {
        setError("City not found. try again");
        setWeather(null);
      }
    } catch (err) {
      setError(`Error fetching data: ${err.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Weather App ⛅</h1>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter city name"
          className="p-2 border rounded"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={() => fetchWeather(city)}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {weather && (
        <div className="mt-5 bg-white p-5 rounded shadow-md text-center">
          <h2 className="text-2xl font-bold">
            {weather.name}, {weather.sys.country}
          </h2>
          <p className="text-xl">{weather.weather[0].description}</p>
          <p className="text-4xl font-bold">{weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="weather icon"
            className="mx-auto"
          />
        </div>
      )}
    </div>
  );
};

export default App;
