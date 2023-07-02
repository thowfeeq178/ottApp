import React, { useEffect, useState } from "react";
import { makeRequest } from "../../utils/httpUtils";
import { constants } from "../../utils/constants";
import Carousel from "../../components/carousel";

import "./index.css";

// const appConfig = "225tvq1i.json";

const Home = () => {
  // const [data, setData] = useState(undefined);
  const [playListItems, setPlayListItems] = useState(undefined);

  useEffect(() => {
    console.log("loaded Home");

    const getData = async () => {
      const users = await makeRequest(constants.configUrl + constants.appHome);
      // setData(users);
      if (users.content.length) {
        await getRenderData(users);
      } else {
        console.log("no Banner items found!");
      }
    };

    getData(); // run it, run it
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRenderData = async (itemsData) => {
    const playlistItemsData = await Promise.all(
      itemsData.content.map(async (item) => {
        const id = item.contentId;
        const url = constants.playlistUrl.replace("{$id}", id);
        return await makeRequest(url);
      })
    );
    setPlayListItems(playlistItemsData);
  };

  return (
    <>{playListItems?.length > 0 && <Carousel items={playListItems?.[0]} />}</>
  );
};
export default Home;
