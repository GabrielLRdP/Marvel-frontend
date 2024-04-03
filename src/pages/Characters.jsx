import axios from "axios";
import { useState, useEffect } from "react";
import CharacterDisplay from "../components/CharacterDisplay";

const Characters = () => {
  const [datas, setDatas] = useState([]);
  const [characterList, setCharacterList] = useState([]);

  const fetchData = async () => {
    const fetch = await axios.get(
      "https://site--marvel--n5fkvp4ymxn4.code.run/characters"
    );
    setDatas(fetch.data.results);
    console.log(datas);
    setCharacterList(
      datas.map((element, index) => {
        return element.thumbnail.path.indexOf("image_not_available") === -1 ? (
          <CharacterDisplay
            name={element.name}
            description={element.description}
            thumbnail={element.thumbnail}
            index={element._id}
            id={element._id}
          />
        ) : null;
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, [datas]);

  return datas.length > 0 ? (
    <main className="main-characters">
      <div className="background-image" />
      <div className="dark-filter"></div>
      <div className="container">
        <div className="characters-searchbar">
          <input
            className=""
            type="text"
            placeholder="Vous cherchez un personnage ?"
          />
        </div>
        <section className="character-list">{characterList}</section>
      </div>
    </main>
  ) : (
    <main className="loading">Chargement</main>
  );
};

export default Characters;
