import { FaSmile, FaRobot, FaShare, FaBookmark } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="absolute right-0 h-screen z-8">
      <ul className="flex flex-col items-center h-full justify-end pb-32 gap-y-10 text-5xl p-2 text-white">
        <li className="flex flex-col items-center justify-center">
          <FaSmile />
          <span className="text-xl">Smile</span>
        </li>
        <li className="flex flex-col items-center justify-center">
          <FaRobot />
          <span className="text-xl">Ai Chat</span>
        </li>
        <li className="flex flex-col items-center justify-center">
          <FaBookmark />
          <span className="text-xl">Save</span>
        </li>
        <li className="flex flex-col items-center justify-center">
          <FaShare />
          <span className="text-xl">Share</span>
        </li>
      </ul>
    </div>
  );
}
