import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";
import Home from "./Home";
import Product from "./Product";

const Element = (
  <React.StrictMode>
    {/* <Home {...(window as any).initialData} /> */}
    <Product {...(window as any).initialData} />
  </React.StrictMode>
);

ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  Element
).render(Element);
