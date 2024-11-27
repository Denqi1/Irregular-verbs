import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route } from "react-router";
import App from "./app";
import AppRoutes from "./app-routes";

const root = document.getElementById("app");

createRoot(root!).render(
  <AppRoutes>
    <Route
      index
      path="/"
      element={
        <StrictMode>
          <App />
        </StrictMode>
      }
    />
  </AppRoutes>,
);
