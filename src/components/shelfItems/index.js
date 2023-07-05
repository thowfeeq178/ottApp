import { Link } from "react-router-dom";

import "./index.css";

const ShelfItems = ({ playlist }) => {
  // console.log("playlist >>>ShelfItems", playlist);
  return (
    playlist &&
    playlist.map((listItem, index) => {
      return (
        <div className="shelfItemContainer">
          <div className="shelfItem" key={index}>
            <Link
              to={"/details/" + listItem.mediaid}
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
    })
  );
};
export default ShelfItems;
