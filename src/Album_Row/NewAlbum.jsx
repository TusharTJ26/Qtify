import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CardGrid from "../Card_Grids/Card_Grids";
export default function NewAlbum({ cards, chunkCards, active }) {
  if (!Array.isArray(cards) || cards.length === 0) {
    return <div>Loading albums...</div>; // or return null if you want nothing
  }

  const slides = chunkCards(cards);
  // console.log(slides);
  return (
    <div id="carouselTopAlbum" className="carousel slide">
      <div className="carousel-inner">
        {slides.map((slideCards, idx) => (
          <div
            className={`carousel-item ${idx === 0 ? "active" : ""}`}
            // className={`carousel-item`}
            key={idx}
          >
            <CardGrid albums={slideCards} />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselTopAlbum"
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
        type="button"
        data-bs-target="#carouselTopAlbum"
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
