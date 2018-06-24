import * as React from "react";
import { render } from "react-dom";
import App from ".";

const NODE_ID = "root";

let node = document.getElementById(NODE_ID);

if (!node) {
  node = document.body.appendChild(document.createElement("div"));
  node.id = NODE_ID;
}

render(<App />, node);

export default App;
