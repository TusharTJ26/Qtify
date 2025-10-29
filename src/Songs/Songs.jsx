import SongNav from "./SongNav";
import { useEffect, useState } from "react";
import axios from "axios";
import GetCarousel from "../Carousel/Carousel";
import "../App.css";
const Songs = () => {
  const [songs, setSongs] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend.labs.crio.do/songs"
        );
        await setSongs(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchSongs();
  }, []);

  const chunkCards = (cards) => {
    const chunks = [];
    for (let i = 0; i < cards.length; i += 7) {
      chunks.push(cards.slice(i, i + 7));
    }
    return chunks;
  };

  // const slides = chunkCards(songs);
  const slides = songs ? chunkCards(songs) : [];

  return (
    <div
      className="elePadding"
      style={{
        borderTop: "solid 2px green",
        borderBottom: "solid 2px green",
        padding: "2.5rem 0",
      }}
    >
      <SongNav />
      <br />
      {songs != null ? (
        <>
          <GetCarousel cards={songs} name="songs" />
        </>
      ) : null}
    </div>
  );
};
export default Songs;
