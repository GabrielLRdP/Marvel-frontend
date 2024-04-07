import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ComicDisplaySimple from "../components/ComicDisplaySimple";
// import Cookies from "js-cookie";
import FavouriteButton from "../components/FavouriteButton";

const Character = () => {
  const location = useLocation();
  const { name, description, thumbnail, comics } = location.state;
  const { id } = useParams();
  const [comicsList, setComicList] = useState([]);
  // const [favouriteChecked, setFavouriteChecked] = useState(
  //   Cookies.get(`character ${name}`) ? true : false
  // );
  // const [favouriteClass, setFavouriteClass] = useState("heart-button");

  const fetchComic = async (id) => {
    const response = await axios.get(
      `https://site--marvel--n5fkvp4ymxn4.code.run/comics/${id}`
    );
    const newList = response.data;

    setComicList(
      newList.comics.map((element) => {
        return (
          <ComicDisplaySimple
            key={element._id}
            id={element._id}
            title={element.title}
          />
        );
      })
    );
  };

  // const handleCheckFavourite = () => {
  //   const newFavouriteChecked = !favouriteChecked;
  //   setFavouriteChecked(newFavouriteChecked);

  //   console.log(newFavouriteChecked);

  //   if (newFavouriteChecked) {
  //     const characterData = {
  //       name: name,
  //       description: description,
  //       thumbnail: thumbnail,
  //       comics: comics,
  //       id: id,
  //     };
  //     Cookies.set(`character ${name}`, JSON.stringify(characterData), {
  //       expires: 13,
  //     });
  //   } else {
  //     Cookies.remove(`character ${name}`);
  //   }
  // };

  useEffect(() => {
    fetchComic(id);
  }, []);

  return (
    <main className="character-page">
      <div className="background-image" />
      <div className="dark-filter"></div>
      <div className="container">
        <h1>{name}</h1>
        {/* <input
          type="checkbox"
          className="heart-input"
          name="heart"
          id="heart"
          checked={favouriteChecked}
          onChange={handleCheckFavourite}
        />
        <label
          className={
            favouriteChecked ? "heart-button is-favourite" : "heart-button"
          }
          htmlFor="heart"
        >
          <i className="fa-solid fa-heart"></i>
        </label> */}
        <FavouriteButton
          name={name}
          description={description}
          thumbnail={thumbnail}
          id={id}
        />
        <img
          src={`${thumbnail.path}/standard_fantastic.${thumbnail.extension}`}
          alt="Image du personnage"
        />
        <p className="character-page-text">{description}</p>
        <h2>Apparaît dans : </h2>
        <section className="comics-carousel">{comicsList}</section>
      </div>
    </main>
  );
};

export default Character;
