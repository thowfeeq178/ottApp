import ShelfItems from "../shelfItems";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";

import "./index.css";

const ShelfContainer = ({ items }) => {
  const { focusKey, ref, hasFocusedChild } = useFocusable();
  // remove the first item as they are in carousel
  const renderItems = items.slice(1);
  console.log("ShelfContainer playListItems, ", renderItems);

  return (
    <FocusContext.Provider value={focusKey}>
      <div
        className="shelfContainer"
        ref={ref}
        // hasFocusedChild={hasFocusedChild}
      >
        {renderItems.map((selfItem, index) => {
          if (selfItem.playlist && selfItem.playlist.length > 0) {
            return (
              <div className="shelf" key={index}>
                <div className="shelfTitle">{selfItem.title}</div>
                <div className={"shelfRow " + selfItem.title}>
                  <ShelfItems playlist={selfItem.playlist} />
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </FocusContext.Provider>
  );
};
export default ShelfContainer;
