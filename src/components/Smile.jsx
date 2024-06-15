import React, { useState, useEffect } from 'react';
import SwipeableContent from './SwipeableContent';
import { getProjects } from '../services/api';
import VideoCard from "./VideoCard";
import { createClient } from "pexels";
import video1 from "../videos/video1.mp4";
import video2 from "../videos/video2.mp4";

const SmilePage = () => {
  const [videos, setvideos] = useState([
    {
      user: {
        name: "John Doe",
        url: "https://www.google.com"
      },
      video_files: [
        {
          link: video1
        }
      ]
    },
    {
      user: {
        name: "Jane Smith",
        url: "https://www.google.com"
      },
      video_files: [
        {
          link: video2
        }
      ]
    },
    {
      user: {
        name: "John Doe",
        url: "https://www.google.com"
      },
      video_files: [
        {
          link: video1
        }
      ]
    },
  ]);
  const [videosLoaded, setvideosLoaded] = useState(true);
  const [projects, setProjects] = useState([]);

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

  // const handleLike = (project) => {
  //   console.log('Liked project:', project);
  // };

  // const handleDonate = (project) => {
  //   console.log('Donated to project:', project);
  // };
  const getVideos = () => { };
  return (
    <div className="slider-container">
      {videosLoaded && videos.length > 0 ? (
        <>
          {videos.map((video, id) => (
            <VideoCard
              key={id}
              index={id}
              author={video.user.name}
              videoURL={video.video_files[0].link}
              authorLink={video.user.url}
              lastVideoIndex={videos.length - 1}
            // getVideos={getVideos}
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
