import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { UseProvider } from "./providers/UserProvider.tsx";
import { EquipeProvider } from "./providers/EquipeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UseProvider>
        <EquipeProvider>
        <App />
          </EquipeProvider>
      </UseProvider>
    </BrowserRouter>
  </StrictMode>
);
