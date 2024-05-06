import { Link } from "react-router-dom";

const CharacterDisplay = ({ name, description, thumbnail, id, comics }) => {
  let imgPath;
  if (thumbnail) {
    imgPath = `${thumbnail.path}/portrait_fantastic.${thumbnail.extension}`;
  } else {
    imgPath = "";
  }

  return (
    <Link
      className="character-display"
      to={`/character/${id}`}
      state={{
        name: name,
        description: description,
        thumbnail: thumbnail,
        comics: comics,
      }}
    >
      <h3>{name}</h3>
      <div className="character-container">
        <img src={imgPath} alt="Image du personnage" />
        {/* <p className="character-page-description">{description}</p> */}
      </div>
    </Link>
  );
};

export default CharacterDisplay;
