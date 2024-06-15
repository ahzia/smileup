import React, { useState, useEffect } from "react";
import { getProjects } from "../services/api";
import VideoCard from "./VideoCard";
import video1 from "../videos/video1.mp4";
import video2 from "../videos/video2.mp4";
import ScoreBoard from "./ScoreBoard";

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
    },
  ]);
  const [videosLoaded, setvideosLoaded] = useState(true);
  const [projects, setProjects] = useState([]);
  const [smileCoin, setSmileCoin] = useState(2000);
  const [totalStars, setTotalStars] = useState(10000);

  // const randomQuery = () => {
  //   const queries = ["Food", "Random", "Business", "Travel"];
  //   return queries[Math.floor(Math.random() * queries.length)];
  // };

  // const getVideos = (length) => {
  //   const client = createClient("CxDfjTrPRO0IYT8xs8o7hyltVkqFpcjPnlQzT6GxdbE0f59VWpialhuM");

  //   const query = randomQuery();
  //   client.videos
  //     .search({ query, per_page: length })
  //     .then((result) => {
  //       setvideos((oldVideos) => [...oldVideos, ...result.videos]);
  //       setvideosLoaded(true);
  //     })
  //     .catch((e) => setvideosLoaded(false));
  // };
  // useEffect(() => {
  //   getVideos(3);
  // }, []);

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

  const handleDonate = (project) => {
    console.log("Donated to project:", project);
  };

  // const handleDonate = (project) => {
  //   console.log('Donated to project:', project);
  // };
  const getVideos = () => {};
  return (
    <div className="bg-black h-[calc(100vh-60px)] relative">
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
