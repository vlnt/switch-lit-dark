import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function Room() {
  const [isLit, setLit] = React.useState(true);
  const brightness = isLit ? "lit" : "dark";
  return (
    <div className={`room ${brightness}`}>
      The room is {isLit ? "lit" : "dark"}
      <br />
      <button onClick={() => setLit(!isLit)}>flip</button>
    </div>
  );
}

ReactDOM.render(<Room />, document.querySelector("#root"));
