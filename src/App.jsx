import "./App.css";
import { useState } from "react";
import Search from "./components/Search";
import Values from "values.js";
import ColorList from "./components/ColorList";

function App() {

  const [list, setList] = useState(new Values('blue').all(10));

  return (
    <div className="app-container">
      <h1>GENERADOR DE PALETA DE COLORES 🎨</h1>
      <Search list={list} setList={setList} />
      <ColorList list={list} />
    </div>
  );
}

export default App;
