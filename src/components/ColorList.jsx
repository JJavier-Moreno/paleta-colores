import React from "react";
import Color from "./Color";

const ColorList = ({ list }) => {
  return (
    <div className="color-list-container">
      {list.map((color, index) => (
        <Color hexcolor={color.hex} key={index}/>
      ))}
    </div>
  );
};

export default ColorList;
