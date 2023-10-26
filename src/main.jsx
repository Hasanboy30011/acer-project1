import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import BasketProvider from "./context/BasketContext";
import AuthProvider from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <AuthProvider>
    <BasketProvider>
      <RouterProvider router={router} />
    </BasketProvider>
    </AuthProvider>
  </ChakraProvider>
);
