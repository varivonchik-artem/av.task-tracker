import React from "react";
import { App } from "@app/App";
import ReactDOM from "react-dom/client";
import "@/app/styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <React.Suspense fallback={<div>Loading:)</div>}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);
