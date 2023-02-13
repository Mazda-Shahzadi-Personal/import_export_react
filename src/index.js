import React from "react";
import ReactDOM from "react-dom";
import pi, { piePlusOne } from "./math"; //deafult export can be named anything in the file.
//need {} for other exports from file
import * as pie from "./math"; // can use objectto store exports.

//When calling a function in jscript need function"()" to run.
ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{piePlusOne()}</li>
    <li>{pie.piePlusOne()}</li>
  </ul>,
  document.getElementById("root")
);
