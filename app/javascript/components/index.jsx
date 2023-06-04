import React from "react";
import { createRoot } from "react-dom/client";
import Routes from "../routes";

document.addEventListener("turbo:load", () => {
  const root = createRoot(
    document.body.appendChild(document.createElement("div"))
  );
  root.render(
    <>{Routes}</>
  );
});
