import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <>
      <nav className="navbar   navbar-dark bg-dark">
        
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="Logo" />
          Henry - Wheater App
        </a>
        <SearchBar onSearch={onSearch} />
      </nav>
    </>
  );
}

export default Nav;
