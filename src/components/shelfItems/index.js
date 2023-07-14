import { useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";

import "./index.css";

const ShelfItems = ({ playlist, parentClass }) => {
  const { ref, focusKey } = useFocusable();
  return (
    playlist &&
    playlist.map((listItem, index) => {
      return (
        <FocusContext.Provider value={focusKey}>
          <div ref={ref}>
            <Item listItem={listItem} index={index} parentClass={parentClass} />
          </div>
        </FocusContext.Provider>
      );
    })
  );
};
export default ShelfItems;

export const Item = ({ listItem, index, parentClass }) => {
  const mediaid = listItem.mediaid;
  const navigate = useNavigate();

  const onAssetPress = () => {
    navigate("/details/" + getCurrentFocusKey(), { state: { data: listItem } });
  };
  const focusIdentifier = `${mediaid} + ${Math.random()}`;
  console.log("mediaid >> ", focusIdentifier, listItem);
  const onAssetFocus = useCallback(
    ({ x }) => {
      console.log("onAssetFocus,>>>>", x, parentClass);
      document.getElementsByClassName(parentClass)[0]?.scrollTo({
        left: x,
        behavior: "smooth",
      });
    },
    [parentClass]
  );

  const { ref, focused, getCurrentFocusKey, focusKey } = useFocusable({
    onEnterPress: onAssetPress,
    onFocus: onAssetFocus,
    focusKey: focusIdentifier,
  });

  return (
    <div
      ref={ref}
      className={focused ? "shelfItemContainer-focused" : "shelfItemContainer"}
      onEnterPress={onAssetPress}
      onFocus={onAssetFocus}
    >
      <div className="shelfItem" key={index}>
        <Link
          to={"/details/" + mediaid}
          state={{ data: listItem }}
          id="styledLinkImage"
        >
          <img
            loading="lazy"
            src={listItem.image}
            alt={listItem.title}
            className="shelfItemImage"
          />
        </Link>
      </div>
      <div className="ShelfItemsTitle">{listItem.title}</div>
    </div>
  );
};
