import React from "react";
import { Link } from "react-router-dom";
import { FaSmile, FaHeart, FaTrophy, FaUser } from "react-icons/fa";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <nav className="flex justify-center items-center h-16 text-white shadow-sm font-mono bg-[#20C997] z-30 fixed bottom-0 w-full">
      <ul className="w-full">
        <nav className="flex justify-between items-center w-full text-4xl p-6">
          <Link to="/smile">
            <FaSmile
              className={classNames({ "text-teal-900": pathname === "/smile" })}
            />
          </Link>
          <Link to="/grow">
            <FaHeart
              className={classNames({ "text-teal-900": pathname === "/grow" })}
            />
          </Link>
          <Link to="/leaderboard">
            <FaTrophy
              className={classNames({
                "text-teal-900": pathname === "/leaderboard",
              })}
            />
          </Link>
          <Link to="/profile">
            <FaUser
              className={classNames({
                "text-teal-900": pathname === "/profile",
              })}
            />
          </Link>
        </nav>
      </ul>
    </nav>
  );
}
