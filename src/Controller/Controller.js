import React from "react";
import classes from "./Controller.css";

export const Plus = props => {
  return (
    <div className="controller">
      <i
        className={
          "fas fa-plus-square" +
          " " +
          classes.fas +
          " " +
          classes["plus-square"]
        }
        onClick={props.plusClick}
      />
    </div>
  );
};

export const Minus = props => {
  return (
    <div className="controller">
      <i
        className={
          "fas fa-minus-square" +
          " " +
          classes.fas +
          " " +
          classes["minus-square"]
        }
        onClick={props.minusClick}
      />
    </div>
  );
};

export const Refresh = props => {
  return (
    <div className="controller">
      <i
        className={"fas fa-sync-alt" + " " + classes.fas +" "+classes.async}
        onClick={props.refClick}
      />
    </div>
  );
};
