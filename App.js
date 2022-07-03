import "./App.css";

import { useState } from "react";
import { useRef } from "react";
import movies from "./assets/movies.json";
import Comp from "./Comp";

function App() {
  return (
    <main>
      {movies.slice(0, 100).map((x, i) => (
        <Comp movies={x} key={i} />
      ))}
    </main>
  );
}

export default App;
