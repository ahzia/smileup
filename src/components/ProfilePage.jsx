import React, { useState, useEffect } from 'react';
import { getUserProfile } from '../services/api';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      const userProfile = await getUserProfile();
      setProfile(userProfile);
    }

    fetchProfile();
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {profile && (
        <div>
          <img src={profile.avatar} alt={profile.name} />
          <h3>{profile.name}</h3>
          <p>{profile.bio}</p>
          <p>LinkedIn: <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">{profile.linkedin}</a></p>
          <p>Smile Tokens: {profile.smileTokens}</p>
          <p>Rocket Tokens: {profile.rocketTokens}</p>
          <p>Last Donations:</p>
          <ul>
            {profile.lastDonations.map((donation, index) => (
              <li key={index}>{donation}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
