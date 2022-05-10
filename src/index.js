import ReactDOM from "react-dom";
import { App } from "./App";
import React, { Suspense } from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Suspense>
    <React.Fragment>
      <App />
    </React.Fragment>
  </Suspense>,
  document.getElementById("root")
);
