import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import store from "./redux/store/configureStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import VideoSearchPage from "./pages/VideoSearchPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/video/:videoId",
        element: <DetailPage></DetailPage>,
      },
      {
        path: "/search",
        element: <VideoSearchPage></VideoSearchPage>,
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
