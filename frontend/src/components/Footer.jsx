import React from "react";
import Logo from "../img/logo.png";

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Fabriqué avec ♥️ sur <b>React.js</b>.
      </span>
    </footer>
  );
}

export default Footer;
