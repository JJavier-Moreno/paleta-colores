import React from "react";
import { useState } from "react";
import Values from "values.js";

const Search = ({ setList }) => {
  const [color, setColor] = useState("blue");
  const [error, setError] = useState(false);

  const onHandleChange = (e) => {
    console.log(color);
    setColor(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    const colores = new Values(color).all(10);

    try {
      if (colores.length === 0 || color.trim() === "") {
        setError(true);
      }
      setList(colores);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <form className="form-container" onSubmit={onHandleSubmit}>
        <input
          type="text"
          name="color"
          value={color}
          placeholder="#fff"
          onChange={onHandleChange}
        />
        <button className="btn-input">Generar</button>
      </form>
      {error && <p className="error">Ingrese un color válido</p>}
    </>
  );
};

export default Search;
