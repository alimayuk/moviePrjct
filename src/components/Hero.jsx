import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="container">
       <h1>Ullimited movies, Tv shows and more</h1>
       <p>Find the latest and greatest movies and shows all avaible on Movieto.</p>
       <div className="hero-btns">
       <Link to={"start"}>Get Start</Link>
       <Link to={"plans"}>Show Plans</Link>
       </div>

      </div>
    </div>
  )
}

export default Hero