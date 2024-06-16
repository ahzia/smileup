import React from 'react';
import signImage from "../components/assets/image/signup.png"

const Register = () => {
  const RespponsiveImage = {
    height : "auto",
    width: "100%"
  }
  return (
    <div style={RespponsiveImage}>
      <img style={RespponsiveImage} src={signImage} alt='signup' />
    </div>
  )
}

export default Register;
