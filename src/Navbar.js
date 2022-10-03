import React from "react";
import "./Navbar.css";

export default function Navbar({ handleChange, toggle }) {
  return (
    <div>
      <div className="navbar">
        <h1 className="title">Notes</h1>
        <button className="toggle-btn button" onClick={toggle}>
          toggle
        </button>
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Search..."
          className="input-text"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
