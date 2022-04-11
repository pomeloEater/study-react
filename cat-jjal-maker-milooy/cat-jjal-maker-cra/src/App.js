import React, { useState, useEffect } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import MainCard from "./components/MainCard";
import Favorites from "./components/Favorites";

const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};

const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = "https://cataas.com";
  const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
  const responseJson = await response.json();
  return `${OPEN_API_DOMAIN}/${responseJson.url}`;
};

const App = () => {
  const [counter, setCounter] = useState(() => {
    return jsonLocalStorage.getItem("counter");
  });
  const [favorites, setFavorites] = useState(() => {
    return jsonLocalStorage.getItem("favorites") || [];
  });
  const [mainCat, setMainCat] = useState("");

  const alreadyFavorite = favorites.includes(mainCat);

  useEffect(() => {
    async function initialCat() {
      const newCat = await fetchCat("testCat");
      setMainCat(newCat);
    }
    initialCat();
  }, []);

  async function updateMainCat(value) {
    const newCat = await fetchCat(value);
    setMainCat(newCat);
    setCounter((prev) => {
      const nextCounter = prev + 1;
      jsonLocalStorage.setItem("counter", nextCounter);
      return nextCounter;
    });
  }

  function handleClickHeart() {
    const nextFavorites = [...favorites, mainCat];
    setFavorites(nextFavorites);
    jsonLocalStorage.setItem("favorites", nextFavorites);
  }

  // const counterTitle = counter === null ? "" : counter + "번째 ";

  return (
    <div>
      <Title>{counter && counter + "번째 "}고양이 가라사대</Title>
      <Form updateMainCat={updateMainCat} />
      <MainCard
        img={mainCat}
        onHeartClick={handleClickHeart}
        alreadyFavorite={alreadyFavorite}
      />
      <Favorites favorites={favorites} />
    </div>
  );
};

export default App;
