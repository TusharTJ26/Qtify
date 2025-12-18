import React from "react";
import { Link } from "react-router-dom";
import Button from "../SmallComponents/NavItems/Button/Button.jsx";
import Logo from "../SmallComponents/NavItems/Logo/Logo.jsx";
import Search from "../SmallComponents/NavItems/Search/Search.jsx";
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
      <div style={{ width: "50%" }}>
        <Search
          placeholder="Search a song of your choice"
          searchData={searchData}
        />
      </div>
      {/* <Button>Give Feedback</Button> */}
      <span>
        <Button value="Give Feedback" />
      </span>
    </nav>
  );
}

export default Navbar;
