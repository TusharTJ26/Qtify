import React from "react";
import LogoImage from "../assets/Qtify-logo.png";

export default function Logo() {
  return (
    <div style={{ verticalAlign: "center", marginLeft: 0 }}>
      <img src={LogoImage} alt="logo" width={67} />;
    </div>
  );
}
