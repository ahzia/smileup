import { FaSmile, FaRobot, FaShare, FaBookmark } from "react-icons/fa";

export default function Sidebar({
  aiChatOpen,
  setAiChatOpen,
  videoId,
  handleLike,
  liked,
  saved,
  handleSave,
  setAiChatVideoId,
}) {
  const handleAiChat = () => {
    // set chat string with videoId
    setAiChatVideoId(videoId);
    setAiChatOpen(!aiChatOpen);
  };
  return (
    <div className="absolute right-0 h-screen z-20">
      <ul className="flex flex-col items-center h-full justify-end pb-32 gap-y-10 text-5xl p-2 text-white">
        <li className="flex flex-col items-center justify-center">
          <FaSmile
            className={liked ? "text-yellow-400" : ""}
            onClick={() => handleLike(videoId)}
          />
          <span className="text-xl">Smile</span>
        </li>
        <li className="flex flex-col items-center justify-center cursor-pointer">
          <FaRobot
            className={aiChatOpen ? "text-yellow-400" : ""}
            onClick={() => handleAiChat()}
          />
          <span className="text-xl">Ai Chat</span>
        </li>
        <li className="flex flex-col items-center justify-center">
          <FaBookmark
            className={saved ? "text-yellow-400" : ""}
            onClick={() => handleSave(videoId)}
          />
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
