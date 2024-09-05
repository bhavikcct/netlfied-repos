import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );

        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          installingWorker.onstatechange = () => {
            if (installingWorker.state === "installed") {
              if (navigator.serviceWorker.controller) {
                // New content is available; prompt the user to refresh
                console.log("New content is available; please refresh.");
                if (
                  window.confirm(
                    "New version available! Would you like to update?"
                  )
                ) {
                  window.location.reload();
                }
              } else {
                console.log("Content cached for offline use.");
              }
            }
          };
        };
      })
      .catch((error) => {
        console.error("ServiceWorker registration failed: ", error);
      });
  });
}
