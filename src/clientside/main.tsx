import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

const Element = (
  <React.StrictMode>
    <App {...(window as any).initalData} />
  </React.StrictMode>
);

ReactDOM.hydrateRoot(document.getElementById("root") as HTMLElement, Element).render(Element);
