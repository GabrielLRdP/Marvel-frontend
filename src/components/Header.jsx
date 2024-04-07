import { Link } from "react-router-dom";
import mainLogo from "../assets/images/Marvel_Logo.svg.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to={"/"}>
          <img className="main-logo" src={mainLogo} alt="Logo Marvel" />
        </Link>
        <nav>
          <Link to="/characters">
            <div>Personnages</div>
          </Link>
          <Link to="/comics">
            <div>Comics</div>
          </Link>
          <Link to="/favourites">
            <div>Favoris</div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
