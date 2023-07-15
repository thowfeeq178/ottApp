import { useEffect } from "react";
import logo from "../../assets/open-logo-black.png";
import { Link, useNavigate } from "react-router-dom";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";

import "./index.css";

const Header = () => {
  const { ref, focusKey } = useFocusable();

  return (
    <FocusContext.Provider value={focusKey}>
      <div className="headerWrapper">
        <div className="logoWrapper">
          <Link to="/" id="styledLink">
            <img src={logo} alt="open-logo" className="logo" />
          </Link>
        </div>
        <div className="menuHolder" ref={ref}>
          <MenuItem name="Home" route="/" />
          <MenuItem name="Movies" route="/movies" />
        </div>
      </div>
    </FocusContext.Provider>
  );
};
export default Header;

const MenuItem = ({ name, route }) => {
  const navigate = useNavigate();
  const routeToMenu = (_) => {
    _.route && navigate(_.route);
  };

  const { ref, focused, setFocus, focusKey } = useFocusable({
    onEnterPress: routeToMenu,
    extraProps: { route },
    focusKey: name,
  });

  useEffect(() => {
    setFocus("Home");
  }, []);

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className={focused ? "menuItem-focused" : "menuItem"}>
        <span>
          <Link to={route} id="styledLink">
            {name}
          </Link>
        </span>
      </div>
    </FocusContext.Provider>
  );
};
