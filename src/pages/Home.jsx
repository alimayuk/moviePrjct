import React from 'react'
import Hero from '../components/Hero'
import video from "../assets/heroBackground.mp4"
import MoviesLittle from '../components/MoviesLittle'
import LittleCategoryCard from '../components/LittleCategoryCard'



const Home = () => {
  return (
    <div className='home'>
      <div className='hero-wrapper'>
      <Hero/>
      <video src={video} autoPlay={true} loop muted/>
      </div>
      <MoviesLittle/>
      <LittleCategoryCard/>
    </div>
  )
}

export default Home