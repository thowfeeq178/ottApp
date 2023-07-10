import { useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

import "./index.css";

const ShelfItems = ({ playlist, parentClass }) => {
  return (
    playlist &&
    playlist.map((listItem, index) => {
      return (
        <Item listItem={listItem} index={index} parentClass={parentClass} />
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

  const { ref, focused, getCurrentFocusKey } = useFocusable({
    onEnterPress: onAssetPress,
    onFocus: onAssetFocus,
    focusKey: mediaid,
  });

  return (
    <div
      ref={ref}
      className={focused ? "shelfItemContainer-focused" : "shelfItemContainer"}
      focusKey={mediaid}
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
