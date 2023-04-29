import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ActiveCatalogProvider from "./components/CatalogContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ActiveCatalogProvider>
      <App />
    </ActiveCatalogProvider>
  </React.StrictMode>
);
