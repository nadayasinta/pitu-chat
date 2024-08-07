import "./global.css";

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import { AuthProvider } from "./contexts/Auth";
import ProtectedLayout from "./layouts/Protected";
import ChatPage from "./pages/Chat";
import LoginPage from "./pages/Login";
import ShopPage from "./pages/Shop";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import theme from "./theme";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <ProtectedLayout />,
    children: [
      {
        path: "/chat",
        element: <ChatPage />,
        children: [
          {
            path: "/chat/:customerId",
            element: <div>Chat User</div>,
          },
        ],
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
