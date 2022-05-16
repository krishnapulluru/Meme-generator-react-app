import React from "react";

export default function Header() {
  return (
    <header className="bg-primary">
      <div className="header--cont">
        <img src="images/trollface.png" alt="troll face" />
        <h4>Meme Generator</h4>
      </div>
      <div className="header--project">
        <a href={void 0}>React Course - Project 3</a>
      </div>
    </header>
  );
}
