import axios from "axios";
import { useState, useEffect } from "react";
import CharacterDisplay from "../components/CharacterDisplay";
import SearchBar from "../components/SearchBar";
import PaginationTop from "../components/PaginationTop";

const Characters = () => {
  const [characterList, setCharacterList] = useState();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const itemPerPage = 100;
  const [totalItems, setTotalItems] = useState(0.1);
  const skip = page * itemPerPage - itemPerPage;

  const fetchData = async () => {
    const fetch = await axios.get(
      `https://site--marvel--n5fkvp4ymxn4.code.run/characters?name=${search}&limit=${itemPerPage}&skip=${skip}`
    );

    setTotalItems(fetch.data.count);

    setCharacterList(
      fetch.data.results.map((element, index) => {
        if (element.thumbnail.path.indexOf("image_not_available") === -1) {
          return (
            <CharacterDisplay
              name={element.name}
              description={element.description}
              thumbnail={element.thumbnail}
              key={element._id}
              comics={element.comics}
              id={element._id}
            />
          );
        } else {
          return null;
        }
      })
    );

    if (totalItems === 0) {
      setCharacterList([
        <p key={"noResult"} className="no-result">
          Pas de resultat
        </p>,
      ]);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search, page]);

  return (
    <main className="main-characters">
      <div className="background-image" />
      <div className="dark-filter"></div>
      <div className="container">
        <SearchBar
          placeholder="Vous cherchez un personnage ?"
          search={search}
          setSearch={setSearch}
          setPage={setPage}
        />
        <PaginationTop
          page={page}
          setPage={setPage}
          totalItems={totalItems}
          itemPerPage={itemPerPage}
        />

        {!characterList ? (
          <div className="main-character loading">Chargement</div>
        ) : (
          <section className="character-list">{characterList}</section>
        )}
      </div>
    </main>
  );
};

export default Characters;
