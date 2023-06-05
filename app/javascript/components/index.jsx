import React from "react";
import { createRoot } from "react-dom/client";
import Routes from "../routes";
import { ReactSession } from 'react-client-session';

document.addEventListener("turbo:load", () => {
  // current user email
  // 
  ReactSession.setStoreType("localStorage");
  // ReactSession.set("currentUserEmail", "");

  const root = createRoot(
    // document.body.appendChild(document.createElement("div"))
    document.getElementById("root")
  );
  root.render(
    <>
      {Routes}
    </>
  );
});
