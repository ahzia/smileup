import React from 'react';
import profileImage from "../components/assets/image/profile.png"

const ProfilePage = () => {

  const RespponsiveImage = {
    height : "auto",
    width: "100%"
  }
  return (
    <div style={RespponsiveImage}>
      <img style={RespponsiveImage} src={profileImage} alt='profile' />
    </div>
  )
}

export default ProfilePage
