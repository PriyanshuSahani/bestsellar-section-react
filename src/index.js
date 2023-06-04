import React from "react";
import ReactDOM from "react-dom/client";

const Greeting = () => {
  return <h2>Hello World</h2>;
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Greeting />);
