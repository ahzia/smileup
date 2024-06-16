import React, { useState, useEffect } from 'react';
import SwipeableContent from './SwipeableContent';
import { getOpportunities } from '../services/api';
import growImage from "./assets/image/grow.png"

const OpportunitiesPage = () => {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    async function fetchOpportunities() {
      const fetchedOpportunities = await getOpportunities();
      setOpportunities(fetchedOpportunities);
    }

    fetchOpportunities();
  }, []);

  const handleLike = (opportunity) => {
    console.log('Liked opportunity:', opportunity);
  };

  const handleDonate = (opportunity) => {
    console.log('Donated to opportunity:', opportunity);
  };
  const RespponsiveImage = {
    height : "auto",
    width: "100%"
  }

  return (
    <div style={RespponsiveImage}>
      <h2>Opportunities</h2>
      <SwipeableContent items={opportunities} onLike={handleLike} onDonate={handleDonate} />
      <img style={RespponsiveImage} src={growImage} alt='image' />
    </div>

  );
};

export default OpportunitiesPage;
