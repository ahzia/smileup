import React from 'react'
import leaderboardImage from "../components/assets/image/leaderbopard.png"

const LeaderboardPage = () => {
    const RespponsiveImage = {
      height : "auto",
      width: "100%"
    }
  return (
    <div style={RespponsiveImage}>
    <img style={RespponsiveImage} src={leaderboardImage} alt='signup' />
  </div>
  )
}


export default LeaderboardPage;
