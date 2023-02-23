import React from "react";
import Sidebar from "../components/Sidebar";
import VideosList from "../components/VideosList";

const HomePage = () => {
  return (
    <div className=" pt-20 bg-black w-full flex h-screen max-md:block max-md:h-auto ">
      <Sidebar></Sidebar>
      <VideosList></VideosList>
    </div>
  );
};

export default HomePage;
