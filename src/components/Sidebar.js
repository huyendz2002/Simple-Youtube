import React, { useEffect } from "react";
import { sidebarList } from "../collections/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  getTopic,
  setQuery,
  setSidebarListRedux,
} from "../redux/saga/topicSlice";

const Sidebar = () => {
  const { query, sidebarListRedux } = useSelector((state) => state.topic);
  const dispatch = useDispatch();
  function handleClick(id) {
    dispatch(setSidebarListRedux(sidebarList));
    const updatedSidebarList = sidebarList.map((item) => {
      if (item.id === id) {
        return { ...item, colorClick: true };
      }
      return { ...item, color: false };
    });
    dispatch(setSidebarListRedux(updatedSidebarList));
  }

  useEffect(() => {
    dispatch(getTopic(query));
  }, [dispatch, query]);

  return (
    <div className="sidebar bg-black w-[300px] border-r-2 border-[#3D3D3D] overflow-y-auto overflow-hidden max-md:flex max-md:w-auto max-md:gap-1 max-md:overflow-x-auto ">
      {sidebarListRedux.map((item) => (
        <div
          onClick={(e, id) => {
            dispatch(setQuery(item.title));
            handleClick(item.id);
            console.log(item);
          }}
          key={item.id}
          className={`${
            item.colorClick || item.color
              ? "bg-[#FC1503] text-white"
              : "text-[#CCCCCC]"
          }  font-bold p-3 mb-4 w-[180px] mx-auto cursor-pointer group hover:bg-[#FC1503] rounded-full transition duration-300 max-md:p-2 max-md:w-auto max-md:flex max-md:items-center `}
        >
          <i
            className={`${
              item.iconClass
            } text-[#FC1503] group-hover:text-white ${
              item.colorClick || item.color ? "text-white" : ""
            } text-[16px] max-md:text-xs`}
          ></i>
          <span className=" ml-4 text-[14px] max-md:text-xs max-md:ml-1">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
