import ShelfItems from "../shelfItems";
import "./index.css";

const ShelfContainer = ({ items }) => {
  // remove the first item as they are in carousel
  const renderItems = items.slice(1);
  console.log("ShelfContainer playListItems, ", renderItems);

  return (
    <div className="shelfContainer">
      {renderItems.map((selfItem) => {
        return (
          <div className="shelf">
            <div className="shelfTitle">{selfItem.title}</div>
            <div className={"shelfRow " + selfItem.title}>
              <ShelfItems playlist={selfItem.playlist} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ShelfContainer;
