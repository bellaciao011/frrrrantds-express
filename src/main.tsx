import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import App from "./App";
import { CartProvider } from "@/lib/cart";
import { CartFlyProvider } from "@/lib/cart-fly";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <CartProvider>
          <CartFlyProvider>
            <App />
            <Toaster position="top-center" richColors />
          </CartFlyProvider>
        </CartProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
