import "./App.scss";
import Grid from "./components/grid";
import IOSsearch from "./components/ios-search.js";
import MediaQueries from "./components/media-queries";
import { useState, useEffect } from "react";

function App() {
  let width = window.innerWidth;
  // window.addEventListener("resize", (width = window.innerWidth));
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="grid">
        <div className="grid-gap">
          <IOSsearch width={width} />
          <MediaQueries width={width} />
        </div>
        <div className="grid-gap">
          <Grid width={width} />
        </div>
      </div>
    </div>
  );
}

export default App;
