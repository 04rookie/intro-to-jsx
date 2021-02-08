import React from "react";
import ReactDOM from "react-dom";

var favItem = "Naan";

ReactDOM.render(
  <div>
    <h1>My favourite food</h1>
    <ul>
      <li>Jamun</li>
      <li>Biryani</li>
      <li>Pizza</li>
      <li>{favItem}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
