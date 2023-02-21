import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoSearchPage = () => {
  const { dataSearch } = useSelector((state) => state.submit);
  const { loading } = useSelector((state) => state.topic);
  return loading ? (
    <div className="fixed left-1/2 top-[6rem] w-10 h-10 border-4 border-blue-500 rounded-full border-r-transparent mx-auto mt-[15rem] animate-spin"></div>
  ) : (
    <div className=" mx-auto pt-20 grid grid-cols-3 gap-8 w-[1010px] h-full bg-black overflow-auto">
      {dataSearch.map((item) => (
        <Link
          to={`/video/${item.videoId}`}
          key={item.videoId}
          className="w-[320px] h-[330px] bg-[#1E1E1E] cursor-pointer"
        >
          <img
            src={item.thumbnail[0].url}
            alt=""
            className="w-full h-1/2 object-cover"
          />
          <div className="w-full p-4">
            <title className="block text-white font-medium text-sm  mt-4  h-[60px]">
              {item.title}
            </title>
            <h3 className="text-[#808080] mt-4">
              {item.channelTitle} <i className="fa-regular fa-circle-check"></i>
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default VideoSearchPage;
