import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./styles/index.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain="ethereum"
      clientId="13f67df54a3a7c396e1167c2d49cd99f"
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
