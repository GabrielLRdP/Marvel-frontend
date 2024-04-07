import Cookies from "js-cookie";
import CharacterDisplay from "../components/CharacterDisplay";

const Favourites = () => {
  const allCookies = Cookies.get();
  const favouriteCharacters = Object.keys(allCookies)
    .filter((cookieName) => cookieName.includes("character"))
    .reduce((acc, cookieName) => {
      acc[cookieName] = allCookies[cookieName];
      return acc;
    }, {});

  const cookiesKeys = Object.keys(favouriteCharacters);
  const favouriteCharacterList = cookiesKeys.map((element) => {
    return JSON.parse(favouriteCharacters[element]);
  });

  const displayFavouriteCharacters = favouriteCharacterList.map(
    (element, index) => {
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
    }
  );

  return (
    <main>
      <div className="background-image" />
      <div className="dark-filter"></div>
      <div className="container">
        <section className="favourite-characters">
          <h2>Personnages favoris</h2>
          <div className="character-list">{displayFavouriteCharacters}</div>
        </section>
      </div>
    </main>
  );
};

export default Favourites;
