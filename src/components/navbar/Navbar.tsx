import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-5 py-4 bg-slate-200 ">
      <Link to={"/"}>
        <span className="font-bold font-briemhand text-2xl">Art Gallery</span>
      </Link>
      <ul className="flex items-center gap-5 font-semibold">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/category"}>
          <li>Category</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
