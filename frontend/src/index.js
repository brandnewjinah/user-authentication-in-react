import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./Routes";
import Common from "./styles/Common";
import { ThemeProvider } from "styled-components";
import "font-awesome/css/font-awesome.css";

ReactDOM.render(
  <ThemeProvider theme={Common}>
    <Routes />
  </ThemeProvider>,
  document.getElementById("root")
);
