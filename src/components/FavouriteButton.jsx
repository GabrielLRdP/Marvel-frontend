import Cookies from "js-cookie";
import { useState } from "react";

const FavouriteButton = (props) => {
  const { name, description, thumbnail, comics, id } = props;
  const [favouriteClass, setFavouriteClass] = useState("heart-button");
  const [favouriteChecked, setFavouriteChecked] = useState(
    Cookies.get(`character ${name}`) ? true : false
  );

  const handleCheckFavourite = () => {
    const newFavouriteChecked = !favouriteChecked;
    setFavouriteChecked(newFavouriteChecked);
    if (newFavouriteChecked) {
      const characterData = {
        name: name,
        description: description,
        thumbnail: thumbnail,
        comics: comics,
        id: id,
      };
      Cookies.set(`character ${name}`, JSON.stringify(characterData), {
        expires: 13,
      });
    } else {
      Cookies.remove(`character ${name}`);
    }
  };

  return (
    <div>
      <input
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
        <span className="favourite-button-text">Ajouter au favoris </span>
        <i className="fa-solid fa-heart"></i>
      </label>
    </div>
  );
};

export default FavouriteButton;
