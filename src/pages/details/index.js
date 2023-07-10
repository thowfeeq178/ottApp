import { useLocation, useParams, useNavigate } from "react-router-dom";
import playIcon from "../../assets/play-icon.png";
import "./index.css";
import { useEffect } from "react";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const handlePlayButtonClick = () => {
    navigate("/player/:" + params?.detailsId, {
      state: { data: data },
    });
  };
  const { ref, hasFocusedChild, focused, setFocus } = useFocusable({
    onEnterPress: handlePlayButtonClick,
    focusKey: "playButton",
  });

  const data = location?.state?.data;
  const hdImage = data?.images.find(
    (element) => element.width === 1280 && element.type === "image/jpeg"
  );
  const releaseYear = new Date(data?.pubdate).getFullYear();
  const imageToRender = hdImage?.src || data?.image;
  console.log(":details data, params data", data, params);
  useEffect(() => {
    if (!data) {
      navigate("/");
    }
  }, [data, navigate]);

  useEffect(() => {
    setFocus("playButton");
  }, []);

  return (
    <div className="detailsWrapper">
      {data && (
        <>
          <img src={imageToRender} alt={data?.title} className="detailsImage" />
          <div className="info">
            <div className="title">{data?.title}</div>
            <div className="metaData">
              <span>{releaseYear}</span>
              <span>{" . "}</span>
              <span>{data?.duration + "s "}</span>
              <span>{" . "}</span>
              <span>{data?.genre?.toString()}</span>
              <span>{" . "}</span>
              <span>{data?.rating}</span>
            </div>
            <div className="textDiscription">{data?.description}</div>
            <div
              className="buttons"
              ref={ref}
              hasFocusedChild={hasFocusedChild}
            >
              <button
                ref={ref}
                className={focused ? "button-focused" : "button"}
                focusKey="playButton"
                onClick={handlePlayButtonClick}
                onEnterPress={handlePlayButtonClick}
              >
                <span className="icon">
                  <img src={playIcon} alt="play" className="iconImg" />
                </span>
                Start watching
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Details;
