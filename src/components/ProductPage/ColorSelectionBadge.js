import React, { useState } from "react";
import classes from "./ColorSelecitonBadge.module.css";

const ColorSelectionBadge = (props) => {
  const onColorPickHandler = (event) => {
    props.selectedColor(event.target.id);
  };

  return (
    <div
      className={` ${props.className}`}
      id={props.id}
      onClick={onColorPickHandler}
      selected={props.selected}
    >
      {props.children}
    </div>
  );
};

export default ColorSelectionBadge;
