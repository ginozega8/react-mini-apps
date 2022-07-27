import React from 'react'
import { AiFillGithub } from "react-icons/ai";
function Home() {
  return (
    <div className='home-div'>
        <img src='https://res.cloudinary.com/dgiqi5urn/image/upload/v1658687827/React%20mini%20apps/home-img_ak2qqd.jpg' className='home-img'/>
        <h1 className='home-title'>Welcome to React mini-apps</h1>
        <p className='home-text'>for more projects like this visit my github!</p>
        <a href='https://github.com/ginozega8' className='home-link'><AiFillGithub className='home-icon'/>ginozega8</a>
    </div>
  )
}

export default Home;