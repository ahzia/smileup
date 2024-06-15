import React, { useState, useEffect } from "react";
import SwipeableContent from "./SwipeableContent";
import { getProjects } from "../services/api";
import Sidebar from "./Sidebar";

const CivicPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const fetchedProjects = await getProjects();
      setProjects(fetchedProjects);
    }

    fetchProjects();
  }, []);

  const handleLike = (project) => {
    console.log("Liked project:", project);
  };

  const handleDonate = (project) => {
    console.log("Donated to project:", project);
  };

  return (
    <div className="bg-black h-full">
      <Sidebar />
      <h2>Civic Engagement</h2>
      <SwipeableContent
        items={projects}
        onLike={handleLike}
        onDonate={handleDonate}
      />
    </div>
  );
};

export default CivicPage;
