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
          <div>Comics</div>
          <div>Favoris</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
