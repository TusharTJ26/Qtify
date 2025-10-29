import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search.jsx";
import styles from "./Navbar.module.css";
// import Feedback from "../FeedbackForm/Feedback.jsx";
import { useState } from "react";
function Navbar({ searchData }) {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* <Link to="/">
        <Logo />
      </Link> */}
      <Logo />
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      {/* <Button>Give Feedback</Button> */}
      <span>
        <Button value="Give Feedback" />
      </span>
    </nav>
  );
}

export default Navbar;
