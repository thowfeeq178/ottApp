import "./index.css";

const ShelfItems = ({ playlist }) => {
  console.log("playlist", playlist);
  return (
    playlist &&
    playlist.map((listItem) => {
      return (
        <div className="shelfItem">
          <img
            loading="lazy"
            src={listItem.image}
            alt={listItem.title}
            className="shelfItemImage"
          />
        </div>
      );
    })
  );
};
export default ShelfItems;
