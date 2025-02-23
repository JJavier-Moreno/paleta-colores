import React from "react";
import { useState } from "react";
import Values from "values.js";

const Search = ({ setList }) => {
  const [color, setColor] = useState("blue");
  const [error, setError] = useState(false);

  const isValidHex = (str) => /^#([0-9A-F]{3}){1,2}$/i.test(str);

  const onHandleChange = (e) => {
    setColor(e.target.value);
    setError(false);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (!isValidHex(color) || color.trim() === "") {
      setError(true);
    }

    try {
      const colores = new Values(color).all(10);
      setList(colores);
      setError(false);
    } catch (error) {
      console.log(error);
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
