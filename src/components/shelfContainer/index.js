import { useCallback } from "react";
import ShelfItems from "../shelfItems";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";

import "./index.css";

const ShelfContainer = ({ items }) => {
  const onRowFocus = (obj) => {
    console.log(">>>onRowFocus", obj);
  };

  const { focusKey, ref, hasFocusedChild } = useFocusable({
    onFocus: onRowFocus,
  });

  // remove the first item as they are in carousel
  const renderItems = items.slice(2);
  // console.log("ShelfContainer playListItems, ", renderItems);

  return (
    <FocusContext.Provider value={focusKey}>
      <div
        className="shelfContainer"
        // ref={ref}
        // hasFocusedChild={hasFocusedChild}
      >
        {renderItems.map((selfItem, index) => {
          if (selfItem.playlist && selfItem.playlist.length > 0) {
            return (
              <div
                className={`shelf shelf-${selfItem.title}`}
                key={index}
                ref={ref}
              >
                <div className="shelfTitle">{selfItem.title}</div>
                <div className={"shelfRow " + selfItem.title}>
                  <ShelfItems
                    ref={ref}
                    playlist={selfItem.playlist}
                    parentClass={`shelf-${selfItem.title}`}
                    onFocus={onRowFocus}
                  />
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
