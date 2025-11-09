import React from "react";
import { FaAccusoft, FaAmilia } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink>All Products</NavLink>
      </li>
      {/* {
            user && <>
                <li><NavLink to="/myProducts">My Products</NavLink></li>
                <li><NavLink to="/myBids">My Bids</NavLink></li>
                <li><NavLink to="/createAProduct">Create A Product</NavLink></li>
            </>
        } */}
    </>
  );
  return (
    <div className=" sticky top-0 z-50 bg-base-100 shadow-sm">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-primary font-bold text-xl">
            <FaAmilia size={24} />
            <span className="-ml-1.5 font-extrabold text-2xl">rtify</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link to={"/auth"} className="btn bg-primary">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
