import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CardGrid from "../Card_Grids/Card_Grids";
import { useState } from "react";
export default function TopAlbum({ cards, chunkCards, active }) {
  const [index, setIndex] = useState(0);
  if (!Array.isArray(cards) || cards.length === 0) {
    return <div>Loading albums...</div>; // or return null if you want nothing
  }

  const slides = chunkCards(cards);
  // console.log(slides);
  return (
    <div id="carouselNewAlbum" className="carousel slide">
      <div className="carousel-inner">
        {slides.map((slideCards, idx) => {
          return (
            <div
              className={`carousel-item ${idx === 0 ? "active" : ""}`}
              // className={`carousel-item`}
              key={idx}
            >
              <CardGrid albums={slideCards} />
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        onClick={() => setIndex(index - 1)}
        type="button"
        data-bs-target="#carouselNewAlbum"
        data-bs-slide="prev"
        style={{
          backgroundColor: "#34C94B",
          color: "green",
          height: "32px",
          width: "32px",
          alignSelf: "center",
          borderRadius: "50%",
          margin: "-1rem",
        }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        onClick={() => setIndex(index + 1)}
        type="button"
        data-bs-target="#carouselNewAlbum"
        data-bs-slide="next"
        style={{
          backgroundColor: "#34C94B",
          color: "green",
          height: "32px",
          width: "32px",
          alignSelf: "center",
          borderRadius: "50%",
        }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
