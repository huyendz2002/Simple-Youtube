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
    <div className="bg-black flex h-[4rem] items-center justify-between pr-10 fixed w-screen max-md:h-14 max-md:pr-0 max-md:py-2">
      <Link
        to={"/"}
        className="h-full flex items-center max-md:w-1/4 max-md:pl-0"
      >
        <img
          className="h-4/5 max-md:h-full "
          src="https://mspoweruser.com/wp-content/uploads/2022/05/Youtube-Music-Logo-1200x675.png"
          alt=""
        />
        <span className="text-white font-bold text-3xl max-md:hidden">
          YouTube's Huyên
        </span>
      </Link>
      <form
        onSubmit={(e) => {
          dispatch(getSubmit(querySearch));
          e.preventDefault();
          navigate("/search");
        }}
        className="h-10 w-[23rem] bg-white pl-4 rounded-full max-md:w-2/3 "
      >
        <input
          type="text"
          placeholder="Search..."
          className="outline-none h-full w-[20rem] p-4 max-md:w-4/5 max-md:text-xs"
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
