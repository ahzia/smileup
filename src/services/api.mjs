import { db } from './firebase.mjs';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

const addProject = async (project) => {
  try {
    const docRef = await addDoc(collection(db, 'projects'), project);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const getProjects = async () => {
  const querySnapshot = await getDocs(collection(db, 'projects'));
  const projects = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return projects;
};

const getProjectsByField = async (field, value) => {
  const q = query(collection(db, 'projects'), where(field, '==', value));
  const querySnapshot = await getDocs(q);
  const projects = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return projects;
};

const addEvent = async (event) => {
  try {
    const docRef = await addDoc(collection(db, 'events'), event);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const getEvents = async () => {
  const querySnapshot = await getDocs(collection(db, 'events'));
  const events = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return events;
};

const getEventsByField = async (field, value) => {
  const q = query(collection(db, 'events'), where(field, '==', value));
  const querySnapshot = await getDocs(q);
  const events = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return events;
};

const addOpportunity = async (opportunity) => {
  try {
    const docRef = await addDoc(collection(db, 'opportunities'), opportunity);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const getOpportunities = async () => {
  const querySnapshot = await getDocs(collection(db, 'opportunities'));
  const opportunities = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return opportunities;
};

const getOpportunitiesByField = async (field, value) => {
  const q = query(collection(db, 'opportunities'), where(field, '==', value));
  const querySnapshot = await getDocs(q);
  const opportunities = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return opportunities;
};

const getUserProfile = async (uid) => {
  const querySnapshot = await getDocs(collection(db, 'users'));
  const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  const userProfile = users.find(user => user.uid === uid);
  return userProfile;
};

export { addProject, getProjects, getProjectsByField, addEvent, getEvents, getEventsByField, addOpportunity, getOpportunities, getOpportunitiesByField, getUserProfile };

