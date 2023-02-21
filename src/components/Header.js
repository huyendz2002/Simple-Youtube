import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import { getSubmit, setQuerySearch } from "../redux/saga/submitSlice";

const Header = () => {
  const { querySearch } = useSelector((state) => state.submit);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="bg-black flex h-[4rem] items-center justify-between pr-10 fixed w-screen">
      <Link
        to={"/"}
        className="h-full flex justify-center items-center text-2xl"
      >
        <img
          className="h-4/5"
          src="https://mspoweruser.com/wp-content/uploads/2022/05/Youtube-Music-Logo-1200x675.png"
          alt=""
        />
        <span className="text-white font-bold text-3xl">YouTube's Huyên</span>
      </Link>
      <form
        onSubmit={(e) => {
          dispatch(getSubmit(querySearch));
          e.preventDefault();
          navigate("/search");
        }}
        className="h-10 w-[23rem] bg-white pl-4 rounded-full"
      >
        <input
          type="text"
          placeholder="Search..."
          className="outline-none h-full w-[20rem] p-4"
          defaultValue={querySearch}
          onChange={debounce(
            (e) => dispatch(setQuerySearch(e.target.value)),
            100
          )}
        />
        <i className=" fa-solid fa-magnifying-glass relative text-[#FC1503]"></i>
      </form>
    </div>
  );
};

export default Header;
