import React from "react";
import "./App.css";
import Header from "./components/Header";
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
