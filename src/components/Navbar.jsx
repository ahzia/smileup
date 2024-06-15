import React from "react";
import { Link } from "react-router-dom";
import { FaSmile, FaHeart, FaTrophy, FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center h-16 text-white shadow-sm font-mono bg-[#20C997] z-10 fixed bottom-0 w-full">
      <ul className="w-full">
        <nav className="flex justify-between items-center w-full text-4xl p-6">
          <Link to="/smile">
            <FaSmile />
          </Link>
          <Link to="/grow">
            <FaHeart />
          </Link>
          <Link to="/leaderboard">
            <FaTrophy />
          </Link>
          <Link to="/profile">
            <FaUser />
          </Link>
        </nav>
      </ul>
    </nav>
  );
}
