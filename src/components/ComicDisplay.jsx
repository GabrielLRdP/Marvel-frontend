import { Link } from "react-router-dom";

const ComicDisplay = ({ name, description, thumbnail, id, comics }) => {
  let imgPath;
  if (thumbnail) {
    imgPath = `${thumbnail.path}/portrait_fantastic.${thumbnail.extension}`;
  } else {
    imgPath = "";
  }
  return (
    <Link
      className="comic-display"
      to={`/character/${id}`}
      state={{
        name: name,
        description: description,
        thumbnail: thumbnail,
        comics: comics,
      }}
    >
      <div>
        <h3>{name}</h3>
        <img src={imgPath} alt="Image du personnage" />
        <p className="comic-page-description">{description}</p>
      </div>
    </Link>
  );
};

export default ComicDisplay;
