import React from "react";
import config from "./config.json";

function App() {
  return (
    <div>
      <h1>Hello I'm {config.developer.name}!</h1>
      <p>Basic Webpack setup</p>
    </div>
  );
}

export default App;
