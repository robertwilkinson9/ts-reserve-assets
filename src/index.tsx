import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root") as Element;
const root = ReactDOMClient.createRoot(rootElement);

//console.log("INDEX - process.argv.length is ")
//console.log(process.argv.length)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
