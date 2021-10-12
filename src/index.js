import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const title = "React boilerplate";

ReactDOM.render(
  <StrictMode>
    <App title={title} />
  </StrictMode>,
  document.getElementById("app")
);

module.hot.accept();
