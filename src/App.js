import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-black h-screen">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
