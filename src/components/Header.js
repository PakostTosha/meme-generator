import React from "react";

function Header() {
  return (
    <header>
      <img
        src="/img/trollface.png"
        alt="Trollface"
        style={{ transform: "scale(-1,1)" }}
      />
      <p>Meme generator!</p>
    </header>
  );
}

export default Header;
