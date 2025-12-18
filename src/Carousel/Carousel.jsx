import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import leftArrow from "/assets/Left-Arrow.png";
import rightArrow from "/assets/Right-Arrow.png";
import CircularProgress from "@mui/material/CircularProgress";
import CardGrid from "../Card_Grids/Card_Grids";
import chunkCards from "./ChunkCards";

export default function GetCarousel({ cards, name }) {
  if (!Array.isArray(cards) || cards.length === 0) {
    return (
      <div style={{ textAlign: "center" }}>
        <CircularProgress />
        {/* Loading albums... */}
      </div>
    );
  }

  const slides = chunkCards(cards);

  return (
    <div
      className="swiper-container-wrapper"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // gap: "1rem",
      }}
    >
      <img
        src={leftArrow}
        className={`swiper-button-prev-${name}`}
        style={{
          //   backgroundColor: "#34C94B",
          color: "green",
          height: "32px",
          width: "32px",
          //   borderRadius: "50%",
          margin: "-1rem",
          zIndex: 5,
        }}
      />
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: `.swiper-button-next-${name}`,
          prevEl: `.swiper-button-prev-${name}`,
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        style={{ zIndex: 1 }}
      >
        {slides.map((slideCards, idx) => (
          <SwiperSlide key={idx}>
            <CardGrid albums={slideCards} />
          </SwiperSlide>
        ))}
      </Swiper>

      <img
        src={rightArrow}
        className={`swiper-button-next-${name}`}
        style={{
          //   backgroundColor: "#34C94B",
          color: "green",
          height: "32px",
          width: "32px",
          //   borderRadius: "50%",
          margin: "-1rem",
          zIndex: 5,
        }}
      />
    </div>
  );
}
