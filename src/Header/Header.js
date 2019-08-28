import React from "react";
import headClass from "./Header.css";
import classes from "../index.css";

const Header = () => {
  return (
    <div className={headClass["header-container"]}>
      <i className={"far fa-hand-pointer " + classes["col-1"]} />
      React Clicker
    </div>
  );
};

export default Header;
