import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Routes from "./Routes";
import "./styles.css";
import "bootstrap-css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Routes />
  </StrictMode>,
  rootElement
);
