import React, { useEffect, useState } from 'react';
import { getEvents, getOpportunities, getProjects } from '../services/api';

const Home = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [events, setEvents] = useState([]);
  const [civicProjects, setCivicProjects] = useState([]);

  useEffect(() => {
    const loadOpportunities = async () => {
      try {
        const data = await getOpportunities();
        setOpportunities(data);
      } catch (error) {
        console.error('Error fetching opportunities:', error);
      }
    };

    const loadEvents = async () => {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    const loadCivicProjects = async () => {
      try {
        const data = await getProjects();
        setCivicProjects(data);
      } catch (error) {
        console.error('Error fetching civic projects:', error);
      }
    };

    loadOpportunities();
    loadEvents();
    loadCivicProjects();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Opportunities</h2>
      {opportunities.length > 0 ? (
        <ul>
          {opportunities.map((opp) => (
            <li key={opp.id}>{opp.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading opportunities...</p>
      )}

      <h2>Events</h2>
      {events.length > 0 ? (
        <ul>
          {events.map((event) => (
            <li key={event.id}>{event.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading events...</p>
      )}

      <h2>Civic Projects</h2>
      {civicProjects.length > 0 ? (
        <ul>
          {civicProjects.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading civic projects...</p>
      )}
    </div>
  );
};

export default Home;
