import React, { useState } from "react";
import Foto from "./foto.jpg"
import Counter from "./counter";

import "./App.css";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {/* <Counter /> */}
      <hr />
      <button className="visibility-btn" onClick={() => setShow(!show)}>
        {show ? "Hide Counter" : "Show Counter"}
      </button>
      {show && <Counter />}
    </div>
  );
}
