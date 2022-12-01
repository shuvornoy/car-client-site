import React from 'react';
import LeftSite from '../Leftsite/LeftSite';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
      <div className="navbar bg-base-100 border-b-2">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-96"
            >
              <input type="text" placeholder="Search" className="input" />

              <Link
                to="/order"
                className="navbar-center lg:flex px-24 py-2 text-red-500"
                style={{ backgroundColor: "#fecaca" }}
              >
                <div>My Order</div>
              </Link>
              <LeftSite />
            </ul>
          </div>
          <Link to="/">
            <a className="btn btn-ghost normal-case text-xl header">AUTO WORLD</a>
          </Link>
        </div>
        <div>
          <div className="mr-6 icon">
            <FaSearch />
          </div>
          <div className="navbar-center hidden lg:flex mr-72">
            <input type="text" placeholder="Search" className="input" />
          </div>
          <div className="mr-20">
            <button className="px-3 text-red-500 icon">x</button>
          </div>
        </div>
        <div className="navbar-end">
          <Link
            to="/order"
            className="navbar-center hidden lg:flex px-24 py-2 text-red-500"
            style={{ backgroundColor: "#fecaca" }}
          >
            <div>My Order</div>
          </Link>

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>
     
    );
};

export default Header;