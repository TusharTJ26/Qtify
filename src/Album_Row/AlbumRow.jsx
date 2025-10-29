import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CardGrid from "../Card_Grids/Card_Grids";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../App.css";
// import TopAlbum from "./TopAlbum";
// import NewAlbum from "./NewAlbum";
import GetCarousel from "../Carousel/Carousel";
import SectionHeader from "./SectionHeader";
const AlbumRow = () => {
  const [active, setActive] = useState(false);
  const [secondActive, setSecondActive] = useState(false);
  const [topAlbum, setTopAlbum] = useState(null);
  const [newAlbum, setNewAlbum] = useState(null);

  // const chunkCards = (cards, chunkSize = 7) => {
  //   const chunks = [];
  //   for (let i = 0; i < cards.length; i += chunkSize) {
  //     chunks.push(cards.slice(i, i + chunkSize));
  //   }
  //   return chunks;
  // };

  const fetchTop = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/top"
      );
      // console.log("hi")
      // await console.log(response.data)
      await setTopAlbum(response.data);
    } catch (error) {
      console.error("Error fetching top albums:", error);
    }
  };

  const fetchNew = async () => {
    const response = await axios.get(
      "https://qtify-backend.labs.crio.do/albums/new"
    );
    setNewAlbum(response.data);
  };

  useEffect(() => {
    fetchTop();
    fetchNew();
  }, []);
  // console.log(topAlbum);

  // const handleCollapse = (refrence) => {
  //   const ref = "set" + reference;
  //   ref(!refrence);
  // };

  return (
    // <CardGrid albums={topAlbum} active/>
    // <TopAlbum cards={topAlbum} chunkCards={chunkCards} active />

    <div className="elePadding">
      {active ? (
        <>
          {/* <SectionHeader heading="Top Album" handleCollapse={handleCollapse} refrence="active"/> */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h5>Top Album</h5>
            <p
              style={{ color: "#34C94B", cursor: "pointer" }}
              onClick={() => setActive(!active)}
            >
              Collapse
            </p>
          </div>

          <CardGrid albums={topAlbum} active />
        </>
      ) : (
        <>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h5>Top Album</h5>
            <p
              style={{ color: "#34C94B", cursor: "pointer" }}
              onClick={() => setActive(!active)}
            >
              Show all
            </p>
          </div>

          {/* <TopAlbum cards={topAlbum} chunkCards={chunkCards} active /> */}
          <GetCarousel cards={topAlbum} name="top" />
        </>
      )}
      <br />
      <br />

      {secondActive ? (
        <>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h5>New Album</h5>
            <p
              style={{ color: "#34C94B", cursor: "pointer" }}
              onClick={() => setSecondActive(!secondActive)}
            >
              Collapse
            </p>
          </div>
          <CardGrid albums={newAlbum} active />
        </>
      ) : (
        <>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h5>New Album</h5>
            <p
              style={{ color: "#34C94B", cursor: "pointer" }}
              onClick={() => setSecondActive(!secondActive)}
            >
              Show all
            </p>
          </div>

          {/* <NewAlbum cards={newAlbum} chunkCards={chunkCards} secondActive /> */}
          <GetCarousel cards={newAlbum} name="new" />
        </>
      )}
    </div>
  );
};

export default AlbumRow;
