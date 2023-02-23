import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getRelate } from "../redux/saga/relateSlice";

const VideoRelate = () => {
  const { relate } = useSelector((state) => state.relate);
  const { loading } = useSelector((state) => state.topic);
  const { videoId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRelate(videoId));
  }, [videoId, dispatch]);
  return loading ? (
    <div className="fixed right-[10rem] top-[6rem] w-10 h-10 border-4 border-blue-500 rounded-full border-r-transparent mx-auto mt-[15rem] animate-spin"></div>
  ) : (
    <div className=" overflow-auto max-md:w-full max-md:mt-4 md:max-xl:w-1/3  md:max-xl:pr-4">
      {relate.map((item) => (
        <Link
          to={`/video/${item.id.videoId}`}
          key={item.id.videoId}
          className="block w-[320px] h-[330px] bg-[#1E1E1E] mb-4 cursor-pointer max-md:w-full max-md:h-[230px] md:max-xl:w-full"
        >
          <img
            src={item.snippet.thumbnails.medium.url}
            alt=""
            className="w-full h-1/2 object-cover"
          />
          <div className="w-full p-4 max-md:p-2">
            <title className="block text-white font-medium text-sm mt-4 h-[60px] max-md:mt-2 max-md:h-[40px]">
              {item.snippet.title}
            </title>
            <h3 className="text-[#808080] mt-4 max-md:mt-2">
              {item.snippet.channelTitle}{" "}
              <i className="fa-regular fa-circle-check"></i>
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default VideoRelate;
