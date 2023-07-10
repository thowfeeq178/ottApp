import { useEffect } from "react";
import logo from "../../assets/open-logo-black.png";
import { Link, useNavigate } from "react-router-dom";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";

import "./index.css";

const Header = () => {
  const { focusKey, ref, hasFocusedChild } = useFocusable();

  return (
    <div className="headerWrapper">
      <FocusContext.Provider value={focusKey}>
        <Link to="/" id="styledLink">
          <img src={logo} alt="open-logo" className="logo" />
        </Link>
        <div className="menuHolder" ref={ref} hasFocusedChild={hasFocusedChild}>
          <MenuItem focusID="home" name="Home" route="/" />
          <MenuItem focusID="movies" name="Movies" route="/movies" />
        </div>
      </FocusContext.Provider>
    </div>
  );
};
export default Header;

const MenuItem = ({ focusID, name, route }) => {
  const onMenuEnterPress = (e) => {
    console.log(e, ">><", getCurrentFocusKey());
    if (getCurrentFocusKey() === "home") {
      navigate("/");
    } else if (getCurrentFocusKey() === "movies") {
      navigate("/movies");
    } else {
      // default
      navigate("/");
    }
  };

  const { ref, focused, setFocus, getCurrentFocusKey } = useFocusable({
    onEnterPress: onMenuEnterPress,
    focusKey: focusID,
  });

  useEffect(() => {
    setFocus("home");
  }, []);

  const navigate = useNavigate();

  return (
    <div
      ref={ref}
      className={focused ? "menuItem-focused" : "menuItem"}
      focusKey={focusID}
      onEnterPress={onMenuEnterPress}
    >
      <span>
        <Link to={route} id="styledLink">
          {name}
        </Link>
      </span>
    </div>
  );
};
