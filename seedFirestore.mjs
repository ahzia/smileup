import { addOpportunity, addEvent, addProject } from './src/services/api.mjs';
const opportunities = [
  { name: 'Opportunity 1', description: 'Description for Opportunity 1', type: 'Job' },
  { name: 'Opportunity 2', description: 'Description for Opportunity 2', type: 'Event' }
  // Add more opportunities
];

const events = [
  { name: 'Event 1', date: '2024-06-01', location: 'Location 1' },
  { name: 'Event 2', date: '2024-07-01', location: 'Location 2' }
  // Add more events
];

const civicProjects = [
  { name: 'Civic Project 1', goal: 'Goal for Project 1' },
  { name: 'Civic Project 2', goal: 'Goal for Project 2' }
  // Add more projects
];

const seedData = async () => {
  try {
    // Seed opportunities
    for (const opp of opportunities) {
      await addOpportunity(opp);
    }

    // Seed events
    for (const event of events) {
      await addEvent(event);
    }

    // Seed civic projects
    for (const project of civicProjects) {
      await addProject(project);
    }

    console.log('Data successfully seeded!');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

seedData();
