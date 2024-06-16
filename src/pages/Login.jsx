import React from 'react'
import loginImage from "../components/assets/image/login.png"

const Login = () => {
  const RespponsiveImage = {
    height : "auto",
    width: "100%"
  }
  return (
    <div style={RespponsiveImage}>
      <img style={RespponsiveImage} src={loginImage} alt='login'/>
    </div>
  )
}

export default Login;
