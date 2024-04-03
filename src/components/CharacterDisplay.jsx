const CharacterDisplay = ({ name, description, thumbnail }) => {
  let imgPath;
  if (thumbnail) {
    imgPath = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;
  } else {
    imgPath = "";
  }
  return (
    <div className="character-display">
      <h3>{name}</h3>
      <img src={imgPath} alt="Image du personnage" />
      <p className="character-page-description">{description}</p>
    </div>
  );
};

export default CharacterDisplay;
