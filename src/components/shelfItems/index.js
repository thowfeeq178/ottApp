import { Link, useNavigate } from "react-router-dom";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import "./index.css";

const ShelfItems = ({ playlist }) => {
  // console.log("playlist >>>ShelfItems", playlist);

  return (
    playlist &&
    playlist.map((listItem, index) => {
      return <Item listItem={listItem} index={index} />;
    })
  );
};
export default ShelfItems;

export const Item = ({ listItem, index }) => {
  const mediaid = listItem.mediaid;
  const navigate = useNavigate();
  const onAssetPress = () => {
    navigate("/details/" + getCurrentFocusKey(), { state: { data: listItem } });
  };
  const { ref, focused, getCurrentFocusKey } = useFocusable({
    onEnterPress: onAssetPress,
    focusKey: mediaid,
  });
  return (
    <div
      ref={ref}
      className={focused ? "shelfItemContainer-focused" : "shelfItemContainer"}
      focusKey={mediaid}
      onEnterPress={onAssetPress}
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
