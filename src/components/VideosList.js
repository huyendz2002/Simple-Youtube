import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideosList = () => {
  const { query, dataList, loading } = useSelector((state) => state.topic);
  return (
    <div className="w-full overflow-auto md:max-xl:relative ">
      <h2 className="text-white pl-4 text-4xl font-bold mb-4 max-md:pl-0 max-md:hidden">
        {query}
        <span className="text-[#FC1503] pl-4">videos</span>
      </h2>
      {loading ? (
        <div className="fixed left-1/2 ml-[-20px] top-[6rem] w-10 h-10 border-4 border-blue-500 rounded-full border-r-transparent mx-auto mt-[15rem] animate-spin "></div>
      ) : (
        <div className="grid grid-cols-3 gap-4 pl-4 w-[1010px] max-md:block max-md:w-full max-md:pl-0 md:max-xl:grid-cols-2 md:max-xl:w-full md:max-xl:pr-4">
          {dataList.map((item) => (
            <Link
              to={`/video/${item.id.videoId}`}
              key={item.id.videoId}
              className="w-[320px] h-[330px] bg-[#1E1E1E] cursor-pointer max-md:w-full max-md:block max-md:mb-4 md:max-xl:w-full "
            >
              <img
                src={item.snippet.thumbnails.medium.url}
                // src="https://i.ytimg.com/vi/i7u9z7divfo/mqdefault.jpg"
                alt=""
                className="w-full h-1/2 object-cover"
              />
              <div className="w-full p-4">
                <title className="block text-white font-medium text-sm  mt-4  h-[60px]">
                  {item.snippet.title}
                </title>
                <h3 className="text-[#808080] mt-4">
                  {item.snippet.channelTitle}{" "}
                  <i className="fa-regular fa-circle-check"></i>
                </h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideosList;
