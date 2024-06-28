import React from "react";
import ReactDOM from "react-dom/client"
import { createBrowserRouter,RouterProvider } from "react-router-dom";
// import App from "./App";
import "./styles/index.css";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import { CartProvider } from "./context/CartContext";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/search',
    element: <Search />,
  },
]);

// Don't touch this section
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);