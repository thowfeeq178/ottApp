import logo from "../../assets/open-logo-black.png";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <div className="headerWrapper">
      <img src={logo} alt="open-logo" className="logo"></img>
      <div className="menuHolder">
        <div className="menuItem">
          <span>
            <Link to="/" id="styledLink">
              Home
            </Link>
          </span>
          {/* Home */}
        </div>
        <div className="menuItem">
          <span>
            <Link
              to="movies"
              // style={{ textDecoration: "none" }}
              id="styledLink"
            >
              Movies
            </Link>
          </span>

          {/* Movies */}
        </div>
      </div>
    </div>
  );
};
export default Header;
