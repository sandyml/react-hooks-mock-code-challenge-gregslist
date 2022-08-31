import React from "react";
import Search from "./Search";

function Header({ clickedSubmit }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search clickedSubmit={clickedSubmit} />
    </header>
  );
}

export default Header;
