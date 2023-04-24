import React from "react";
import loadable from "@loadable/component";

// SSR
// import Header from "./components/Header";

// CSR
const Header = loadable(() => import("./components/Header"), { ssr: true });

export default function App() {
  return (
    <div>
      <Header />
      <span>Hello World!</span>
    </div>
  );
}
