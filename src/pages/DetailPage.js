import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VideoRelate from "../components/VideoRelate";
import { getDetail, setLike } from "../redux/saga/detailSlice";

const DetailPage = () => {
  const { videoId } = useParams();
  const { detail, like } = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetail(videoId));
  }, [dispatch, videoId]);

  return (
    <div className="flex gap-4 w-screen h-screen bg-black pt-20 ">
      {detail.map((item) => (
        <div key={item.id} className="w-[1140px] overflow-auto">
          <iframe
            width="1140"
            height="554"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="New details on suspected Chinese spy balloon program l GMA"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="ml-4 mt-3">
            <title className="block text-white font-bold text-xl ">
              {item.snippet.title}
            </title>

            {/* </div> */}
            <div className="flex justify-between items-center  pr-4 pb-2">
              <h3 className="text-[#808080]">
                {item.snippet.channelTitle}{" "}
                <i className="fa-regular fa-circle-check"></i>
              </h3>
              <div>
                <span
                  onClick={() => dispatch(setLike(!like))}
                  className="text-white cursor-pointer"
                >
                  <i
                    className={`fa-solid fa-thumbs-up transition-all duration-300 ${
                      like ? "text-blue-500" : ""
                    }`}
                  ></i>{" "}
                  {`${
                    like
                      ? Number(item.statistics.likeCount) + 1
                      : item.statistics.likeCount
                  }`}
                </span>
                <span className="text-white ml-4">
                  {" "}
                  ViewCount: {item.statistics.viewCount}
                </span>
              </div>
            </div>
            <p className="text-white">{item.snippet.description}</p>
          </div>
        </div>
      ))}
      <VideoRelate></VideoRelate>
    </div>
  );
};

export default DetailPage;
