import React, { useState, useEffect } from "react";
import { getProjects } from "../services/api";
import VideoCard from "./VideoCard";
import video00 from "../videos/video00.mp4";
import video01 from "../videos/video01.mp4";
import video1 from "../videos/video1.mp4";
import video2 from "../videos/video2.mp4";
import video03 from "../videos/video03.mp4";
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
          link: video03,
        },
      ],
      liked: false,
      saved: false,
      title: "Water for life ",
      description: `Project Duration: October 1, 2024 - October 31, 2025
Location: Selected regions in Sub-Saharan Africa, including rural communities in Kenya, Ethiopia, and Uganda

Overview:
“Water for Life - Addressing Water Scarcity in Africa” is a six-month initiative aimed at providing sustainable solutions to water scarcity in Sub-Saharan Africa. From October 1, 2024, to October  31, 2025, we will work with local communities to improve access to clean water through infrastructure development, education, and community engagement.`,
    },
    ,
    {
      id: 2,
      user: {
        name: "John Doe",
        img: "https://randomuser.me/api/portraits",
      },
      video_files: [
        {
          link: video00,
        },
      ],
      liked: false,
      saved: false,
      title: "Welcome Refugees",
      description: `Project Duration: August 1, 2024 - December 31, 2024
Location: Various locations across Poland, with central hubs in Warsaw, Kraków, and Gdańsk

Overview:
“Welcome Refugees - Supporting Ukrainian Families in Poland” is a five-month initiative designed to provide comprehensive support to Ukrainian refugees in Poland. From August 1 to December 31, 2024, we aim to assist Ukrainian families with essential resources, integration programs, and community support to help them rebuild their lives.`,
    },
    {
      id: 3,
      user: {
        name: "John Doe",
        img: "https://randomuser.me/api/portraits",
      },
      video_files: [
        {
          link: video01,
        },
      ],
      liked: false,
      saved: false,
      title: "Clean Beaches, Beautiful Bonn",
      description: `Project Duration: October 25, 2024 - December 25, 2024
Location: Various beaches along the Rhine River in Bonn, Germany

Overview:
“Clean Beaches, Beautiful Bonn” is a two-month environmental initiative focused on maintaining and restoring the natural beauty of the beaches along the Rhine River in Bonn. we are calling on residents, volunteers, environmental groups, and local businesses to join forces in this crucial effort to keep our riverside beaches clean, safe, and enjoyable for everyone.`,
    },
    {
      id: 4,
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
      title: " Save Amazon ",
      description: "Details: The annual rate of deforestation in the Amazon estimated in 2022 was 11,568 km², according to official data from the Legal Amazon Deforestation Satellite Monitoring Project (PRODES), of the National Institute for Space Research (INPE). With one euro donation you can help us save our planet.",
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

  const getVideos = () => { };
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
