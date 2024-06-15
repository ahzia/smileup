import React, { useState, useEffect } from 'react';
import SwipeableContent from './SwipeableContent';
import { getOpportunities } from '../services/api';

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

  return (
    <div>
      <h2>Opportunities</h2>
      <SwipeableContent items={opportunities} onLike={handleLike} onDonate={handleDonate} />
    </div>
  );
};

export default OpportunitiesPage;
