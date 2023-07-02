import { useLocation, useParams } from "react-router-dom";
import playIcon from "../../assets/play-icon.png";
import "./index.css";

const Details = () => {
  const location = useLocation();
  const { data } = location.state;

  console.log(":details data", data);

  let params = useParams();
  console.log(":details param", params.detailsId);
  const hdImage = data.images.find(
    (element) => element.width === 1280 && element.type === "image/jpeg"
  );
  const releaseYear = new Date(data?.pubdate).getFullYear();

  const imageToRender = hdImage?.src || data.image;

  return (
    <div className="detailsWrapper">
      <img src={imageToRender} alt={data.title} className="detailsImage" />
      <div className="info">
        <div className="title">{data?.title}</div>
        <div className="metaData">
          <span>{releaseYear}</span>
          <span>{" . "}</span>
          <span>{data.duration + "s "}</span>
          <span>{" . "}</span>
          <span>{data?.genre.toString()}</span>
          <span>{" . "}</span>
          <span>{data?.rating}</span>
        </div>
        <div className="textDiscription">{data?.description}</div>
        <div className="buttons">
          <button className="button">
            <span className="icon">
              <img src={playIcon} alt="play" className="iconImg" />
            </span>
            Start watching
          </button>
        </div>
      </div>
    </div>
  );
};
export default Details;
