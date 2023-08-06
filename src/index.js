import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const a = ["aaa", "bbb", "ccc"];
const b = ["aaaa", "bbb", "cccc", ...a];

console.log(b);

const abc = {
  name: "Sidd"
};
const bcd = {
  abc,
  name: "Sudeep"
};
console.log(bcd);
