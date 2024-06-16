import React, { useState, useEffect } from "react";
import { getProjects } from "../services/api";
import VideoCard from "./VideoCard";
import video1 from "../videos/video1.mp4";
import video2 from "../videos/video2.mp4";
import ScoreBoard from "./ScoreBoard";
import AIChat from "./AIChat";
const SmilePage = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      user: {
        name: "John Doe",
        img: "https://randomuser.me/api/portraits",
      },
      video_files: [
        {
          link: video1,
        },
      ],
      liked: false,
      saved: false,
      title: "cleaning the ocean",
      description: "We are planning to clean the beach in Bon germany and we need your support, smile up and support us.",
    },
    {
      id: 2,
      user: {
        name: "Jane Smith",
        img: "https://randomuser.me/api/portraits",
      },
      video_files: [
        {
          link: video2,
        },
      ],
      liked: false,
      saved: false,
      title: "cleaning the the warsaw city",
      description: "We are planning the clean the warsaw city from wastes and we need your support, smile up and support us.",
    },
    {
      id: 3,
      user: {
        name: "John Doe",
        img: "https://randomuser.me/api/portraits",
      },
      video_files: [
        {
          link: video1,
        },
      ],
      liked: false,
      saved: false,
      title: "cleaning the ocean",
      description: "We are planning to clean the beach in Bon germany and we need your support, smile up and support us.",
    },
  ]);
  const [videosLoaded, setvideosLoaded] = useState(true);
  const [projects, setProjects] = useState([]);
  const [smileCoin, setSmileCoin] = useState(2000);
  const [totalStars, setTotalStars] = useState(10000);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [aiChatVideoId, setAiChatVideoId] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      const fetchedProjects = await getProjects();
      setProjects(fetchedProjects);
    }

    fetchProjects();
  }, []);

  const handleLike = (id) => {
    setVideos(
      videos.map((video) => {
        if (video.id === id) {
          const newLikedStatus = !video.liked;
          setSmileCoin(smileCoin + (newLikedStatus ? -1 : 1));
          setTotalStars(totalStars + (newLikedStatus ? 200 : -200));
          return { ...video, liked: newLikedStatus };
        }
        return video;
      })
    );
  };

  const handleSave = (id) => {
    setVideos(
      videos.map((video) => {
        if (video.id === id) {
          const newSavedStatus = !video.saved;
          return { ...video, saved: newSavedStatus };
        }
        return video;
      })
    );
  };

  const getVideos = () => {};
  return (
    <div className="bg-black h-[calc(100vh-60px)] relative">
      <AIChat aiChatOpen={aiChatOpen} setAiChatOpen={setAiChatOpen} aiChatVideoId={aiChatVideoId} videosData={videos} />
      <ScoreBoard smileCoin={smileCoin} totalStars={totalStars} />
      {videosLoaded && videos.length > 0 ? (
        <>
          {videos.map((video, id) => (
            <VideoCard
              key={id}
              index={id}
              author={video.user.name}
              videoURL={video.video_files[0].link}
              authorImg={video.user.url}
              lastVideoIndex={videos.length - 1}
              liked={video.liked}
              handleLike={handleLike}
              handleSave={handleSave}
              videoId={video.id}
              saved={video.saved}
              aiChatOpen={aiChatOpen}
              setAiChatOpen={setAiChatOpen}
              setAiChatVideoId={setAiChatVideoId}
            />
          ))}
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
};

export default SmilePage;
