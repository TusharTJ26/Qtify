import React from "react";
// import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import "../App.css";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import AlbumRow from "../Album_Row/AlbumRow";
import Songs from "../Songs/Songs";
import GeneralQuestions from "../General_Questions/GeneralQuestions";
import Footer from "../Footer/Footer";
import styles from "./Home.module.css";
function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      {/* <div>
        <CardGrid />
      </div> */}
      <br />
      <br />
      {/* <div style={{ padding: "0 2rem" }}> */}
      <div>
        <AlbumRow />
      </div>
      <br />
      <br />
      <div>
        <Songs />
      </div>
      <br />
      <br />
      <div>
        <GeneralQuestions />
      </div>
      <br />
      <br />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
